<script setup>
import { ref, onMounted } from 'vue'

const isLoaded = ref(false)
const activeFilter = ref('all')

onMounted(() => {
  setTimeout(() => {
    isLoaded.value = true
  }, 100)
})

const products = [
  {
    id: 1,
    name: '灵境智脑',
    category: 'ai',
    tag: 'AI平台',
    description: '企业级人工智能中台，一站式解决模型训练、部署、管理全流程',
    features: ['AutoML自动化建模', '多模型管理', '实时推理引擎', '可视化监控'],
    color: '#c9a962'
  },
  {
    id: 2,
    name: '云翼计算',
    category: 'cloud',
    tag: '云计算',
    description: '弹性可扩展的云端基础设施，支持私有化部署与混合云架构',
    features: ['弹性伸缩', '容器编排', '微服务治理', '安全防护'],
    color: '#5a8fcd'
  },
  {
    id: 3,
    name: '数洞察',
    category: 'data',
    tag: '数据分析',
    description: '从数据采集到智能洞察，驱动企业数据化运营决策',
    features: ['实时流处理', '自研BI报表', '预测分析', '数据治理'],
    color: '#6bab90'
  },
  {
    id: 4,
    name: '易转宝',
    category: 'consult',
    tag: '咨询',
    description: '专业的数字化转型咨询与落地服务，陪伴企业完成转型之旅',
    features: ['现状诊断', '路径规划', '执行辅导', '效果评估'],
    color: '#c97a62'
  }
]

const categories = [
  { id: 'all', name: '全部产品' },
  { id: 'ai', name: 'AI平台' },
  { id: 'cloud', name: '云计算' },
  { id: 'data', name: '数据分析' },
  { id: 'consult', name: '咨询' }
]

const filteredProducts = ref(products)

const setFilter = (categoryId) => {
  activeFilter.value = categoryId
  if (categoryId === 'all') {
    filteredProducts.value = products
  } else {
    filteredProducts.value = products.filter(p => p.category === categoryId)
  }
}

const scrollToContact = () => {
  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <div class="products-page" :class="{ loaded: isLoaded }">
    <header class="header">
      <div class="header-content">
        <router-link to="/" class="logo">
          <span class="logo-mark">◈</span>
          <span class="logo-text">灵境科技</span>
        </router-link>
        <nav class="nav">
          <router-link to="/">首页</router-link>
          <router-link to="/products" class="active">产品</router-link>
          <router-link to="/cases">案例</router-link>
          <router-link to="/">关于</router-link>
          <router-link to="/">联系</router-link>
        </nav>
      </div>
    </header>

    <section class="hero">
      <div class="hero-bg"></div>
      <div class="hero-content">
        <span class="hero-overline" :class="{ visible: isLoaded }">产品中心</span>
        <h1 class="hero-title">
          <span class="hero-title-line" :class="{ visible: isLoaded }">四大核心产品</span>
          <span class="hero-title-line accent" :class="{ visible: isLoaded }">构建数字化基石</span>
        </h1>
        <p class="hero-description" :class="{ visible: isLoaded }">
          每一款产品都经过数百家企业验证，以卓越的技术实力和稳定的性能表现，赋能企业数字化升级。
        </p>
      </div>
    </section>

    <section class="filter-section">
      <div class="filter-content">
        <button 
          v-for="cat in categories" 
          :key="cat.id"
          @click="setFilter(cat.id)"
          :class="{ active: activeFilter === cat.id }"
        >
          {{ cat.name }}
        </button>
      </div>
    </section>

    <section class="products-grid-section">
      <div class="products-grid">
        <article 
          v-for="(product, index) in filteredProducts" 
          :key="product.id" 
          class="product-card"
          :style="{ animationDelay: `${index * 100}ms` }"
        >
          <div class="product-header" :style="{ borderColor: product.color }">
            <span class="product-tag" :style="{ background: product.color }">{{ product.tag }}</span>
            <h3 class="product-name">{{ product.name }}</h3>
          </div>
          <p class="product-desc">{{ product.description }}</p>
          <ul class="product-features">
            <li v-for="feature in product.features" :key="feature">
              <span class="feature-icon">→</span>
              {{ feature }}
            </li>
          </ul>
          <button class="product-btn" :style="{ background: product.color }" @click="scrollToContact">
            了解详情
          </button>
        </article>
      </div>
    </section>

    <section id="contact" class="contact-section">
      <div class="contact-content">
        <h2>想了解更多产品信息？</h2>
        <p>我们的专家团队随时为您服务，提供一对一的产品咨询</p>
        <button class="btn-primary" @click="scrollToContact">立即咨询</button>
      </div>
    </section>

    <footer class="footer">
      <div class="footer-content">
        <div class="footer-brand">
          <router-link to="/" class="logo">
            <span class="logo-mark">◈</span>
            <span class="logo-text">灵境科技</span>
          </router-link>
          <p class="footer-tagline">创新引领未来</p>
        </div>
        <div class="footer-links">
          <div class="footer-column">
            <h4>产品服务</h4>
            <router-link to="/services/ai-solution">人工智能</router-link>
            <router-link to="/services/cloud-platform">云计算</router-link>
            <router-link to="/services/data-analytics">大数据分析</router-link>
            <router-link to="/services/digital-consulting">数字化咨询</router-link>
          </div>
          <div class="footer-column">
            <h4>案例展示</h4>
            <router-link to="/cases">金融行业</router-link>
            <router-link to="/cases">制造业</router-link>
            <router-link to="/cases">零售业</router-link>
            <router-link to="/cases">医疗健康</router-link>
          </div>
          <div class="footer-column">
            <h4>支持</h4>
            <router-link to="/help">帮助中心</router-link>
            <router-link to="/terms">服务条款</router-link>
            <router-link to="/privacy">隐私政策</router-link>
            <router-link to="/contact">联系方式</router-link>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <p>© 2024 灵境科技有限公司 · 京ICP备XXXXXXXX号</p>
      </div>
    </footer>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --font-display: 'Cormorant Garamond', Georgia, serif;
  --font-body: 'Noto Sans SC', -apple-system, sans-serif;
  --color-bg: #faf9f7;
  --color-surface: #ffffff;
  --color-text: #1a1a1a;
  --color-text-secondary: #666666;
  --color-text-tertiary: #999999;
  --color-accent: #c9a962;
  --color-accent-dark: #a88a4a;
  --color-border: #e8e6e3;
  --color-dark: #1a1a1a;
  --space-xs: 4px;
  --space-sm: 8px;
  --space-md: 16px;
  --space-lg: 24px;
  --space-xl: 32px;
  --space-2xl: 48px;
  --space-3xl: 64px;
  --space-4xl: 96px;
  --ease-out-quart: cubic-bezier(0.25, 1, 0.5, 1);
  --ease-out-quint: cubic-bezier(0.22, 1, 0.36, 1);
  --transition-fast: 0.2s ease;
  --transition-base: 0.3s ease;
  --transition-slow: 0.5s ease;
}

body {
  font-family: var(--font-body);
  background: var(--color-bg);
  color: var(--color-text);
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
}

.products-page {
  opacity: 0;
  transition: opacity 0.6s ease;
}

.products-page.loaded {
  opacity: 1;
}

.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  padding: var(--space-lg) var(--space-3xl);
  background: rgba(250, 249, 247, 0.95);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--color-border);
}

.header-content {
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  text-decoration: none;
  color: inherit;
}

.logo-mark {
  font-size: 28px;
  color: var(--color-accent);
}

.logo-text {
  font-family: var(--font-display);
  font-size: 22px;
  font-weight: 600;
}

.nav {
  display: flex;
  gap: var(--space-xl);
}

.nav a {
  font-family: var(--font-body);
  font-size: 14px;
  font-weight: 500;
  color: var(--color-text-secondary);
  text-decoration: none;
  padding: var(--space-sm) 0;
  position: relative;
  transition: color var(--transition-fast);
}

.nav a::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 1px;
  background: var(--color-accent);
  transition: width var(--transition-base);
}

.nav a:hover,
.nav a.active {
  color: var(--color-text);
}

.nav a:hover::after,
.nav a.active::after {
  width: 100%;
}

.hero {
  padding: 160px var(--space-3xl) var(--space-4xl);
  text-align: center;
  position: relative;
  overflow: hidden;
}

.hero-bg {
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse at 50% 0%, rgba(201, 169, 98, 0.1) 0%, transparent 60%);
}

.hero-content {
  position: relative;
  z-index: 2;
  max-width: 800px;
  margin: 0 auto;
}

.hero-overline {
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--color-accent);
  display: block;
  margin-bottom: var(--space-lg);
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.6s var(--ease-out-quart);
  transition-delay: 0.1s;
}

.hero-overline.visible {
  opacity: 1;
  transform: translateY(0);
}

.hero-title {
  font-family: var(--font-display);
  font-size: clamp(40px, 6vw, 64px);
  font-weight: 500;
  line-height: 1.15;
  margin-bottom: var(--space-xl);
}

.hero-title-line {
  display: block;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s var(--ease-out-quart);
}

.hero-title-line:nth-child(1) { transition-delay: 0.2s; }
.hero-title-line:nth-child(2) { transition-delay: 0.4s; }

.hero-title-line.visible {
  opacity: 1;
  transform: translateY(0);
}

.hero-title-line.accent {
  color: var(--color-accent);
}

.hero-description {
  font-size: 18px;
  color: var(--color-text-secondary);
  line-height: 1.7;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.6s var(--ease-out-quart);
  transition-delay: 0.6s;
}

.hero-description.visible {
  opacity: 1;
  transform: translateY(0);
}

.filter-section {
  padding: 0 var(--space-3xl);
  margin-bottom: var(--space-3xl);
}

.filter-content {
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  gap: var(--space-sm);
  flex-wrap: wrap;
  justify-content: center;
}

.filter-content button {
  padding: var(--space-sm) var(--space-lg);
  background: transparent;
  border: 1px solid var(--color-border);
  font-family: var(--font-body);
  font-size: 14px;
  color: var(--color-text-secondary);
  cursor: pointer;
  transition: all var(--transition-base);
}

.filter-content button:hover {
  border-color: var(--color-text);
  color: var(--color-text);
}

.filter-content button.active {
  background: var(--color-dark);
  border-color: var(--color-dark);
  color: var(--color-bg);
}

.products-grid-section {
  padding: 0 var(--space-3xl) var(--space-4xl);
}

.products-grid {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: var(--space-xl);
}

.product-card {
  background: var(--color-surface);
  padding: var(--space-2xl);
  opacity: 0;
  transform: translateY(30px);
  animation: fadeInUp 0.6s var(--ease-out-quart) forwards;
  transition: box-shadow var(--transition-base), transform var(--transition-base);
}

.product-card:hover {
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.08);
  transform: translateY(-4px);
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.product-header {
  border-left: 3px solid var(--color-accent);
  padding-left: var(--space-lg);
  margin-bottom: var(--space-lg);
}

.product-tag {
  display: inline-block;
  padding: 2px 10px;
  font-size: 11px;
  font-weight: 500;
  color: white;
  margin-bottom: var(--space-sm);
}

.product-name {
  font-family: var(--font-display);
  font-size: 28px;
  font-weight: 600;
}

.product-desc {
  font-size: 15px;
  color: var(--color-text-secondary);
  line-height: 1.7;
  margin-bottom: var(--space-lg);
}

.product-features {
  list-style: none;
  margin-bottom: var(--space-xl);
}

.product-features li {
  font-size: 14px;
  color: var(--color-text-secondary);
  padding: var(--space-sm) 0;
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  border-bottom: 1px solid var(--color-border);
}

.feature-icon {
  color: var(--color-accent);
  font-size: 12px;
}

.product-btn {
  width: 100%;
  padding: var(--space-md);
  border: none;
  font-family: var(--font-body);
  font-size: 14px;
  font-weight: 500;
  color: white;
  cursor: pointer;
  transition: all var(--transition-base);
}

.product-btn:hover {
  filter: brightness(0.9);
  transform: translateY(-2px);
}

.contact-section {
  padding: var(--space-4xl) var(--space-3xl);
  background: var(--color-dark);
  text-align: center;
}

.contact-content h2 {
  font-family: var(--font-display);
  font-size: clamp(28px, 4vw, 40px);
  color: var(--color-bg);
  margin-bottom: var(--space-md);
}

.contact-content p {
  font-size: 16px;
  color: rgba(250, 249, 247, 0.7);
  margin-bottom: var(--space-xl);
}

.btn-primary {
  background: var(--color-accent);
  color: var(--color-dark);
  border: none;
  padding: var(--space-md) var(--space-2xl);
  font-family: var(--font-body);
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all var(--transition-base);
}

.btn-primary:hover {
  background: var(--color-accent-dark);
  transform: translateY(-2px);
}

.footer {
  background: var(--color-bg);
  padding: var(--space-3xl) var(--space-3xl) var(--space-lg);
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: var(--space-4xl);
  padding-bottom: var(--space-2xl);
  border-bottom: 1px solid var(--color-border);
}

.footer-tagline {
  font-family: var(--font-display);
  font-size: 18px;
  color: var(--color-text-tertiary);
  margin-top: var(--space-md);
}

.footer-links {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-xl);
}

.footer-column h4 {
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-bottom: var(--space-lg);
}

.footer-column a {
  display: block;
  font-size: 14px;
  color: var(--color-text-secondary);
  text-decoration: none;
  margin-bottom: var(--space-sm);
  transition: color var(--transition-fast);
}

.footer-column a:hover {
  color: var(--color-accent);
}

.footer-bottom {
  max-width: 1200px;
  margin: 0 auto;
  padding-top: var(--space-lg);
  text-align: center;
}

.footer-bottom p {
  font-size: 13px;
  color: var(--color-text-tertiary);
}

@media (max-width: 768px) {
  .header {
    padding: var(--space-md) var(--space-lg);
  }

  .nav {
    gap: var(--space-md);
    font-size: 13px;
  }

  .hero {
    padding: 120px var(--space-lg) var(--space-3xl);
  }

  .products-grid-section {
    padding: 0 var(--space-lg) var(--space-3xl);
  }

  .footer-content {
    grid-template-columns: 1fr;
  }

  .footer-links {
    grid-template-columns: 1fr 1fr;
  }
}

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
</style>