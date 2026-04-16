<script setup>
import { ref, onMounted } from 'vue'

const isLoaded = ref(false)
const activeIndustry = ref('all')

onMounted(() => {
  setTimeout(() => {
    isLoaded.value = true
  }, 100)
})

const cases = [
  {
    id: 1,
    title: '某大型商业银行智能风控系统',
    industry: 'finance',
    industryName: '金融',
    company: '某国有商业银行',
    description: '基于机器学习的智能风控系统，实现贷前、贷中、贷后全流程风险管控，大幅降低不良贷款率',
    results: ['不良贷款率下降 35%', '审批效率提升 60%', '风险预警准确率 94%'],
    products: ['灵境智脑', '数洞察']
  },
  {
    id: 2,
    title: '某头部电商平台用户增长系统',
    industry: 'retail',
    industryName: '零售',
    company: '某知名电商',
    description: 'AI驱动的用户行为分析与精准营销系统，实现用户全生命周期价值最大化',
    results: ['用户留存率提升 45%', '客单价增长 28%', '营销ROI提升 200%'],
    products: ['灵境智脑', '数洞察']
  },
  {
    id: 3,
    title: '某三甲医院智慧医疗平台',
    industry: 'medical',
    industryName: '医疗',
    company: '某三甲医院',
    description: '覆盖诊前、诊中、诊后的全流程智慧医疗解决方案，提升医疗服务质量与效率',
    results: ['患者等待时间减少 50%', '诊断准确率提升 20%', '医疗资源利用率提高 40%'],
    products: ['灵境智脑', '云翼计算']
  },
  {
    id: 4,
    title: '某汽车制造企业智能工厂',
    industry: 'manufacture',
    industryName: '制造',
    company: '某大型车企',
    description: '基于工业互联网的智能制造平台，实现生产全流程数字化管控与柔性生产',
    results: ['生产效率提升 30%', '设备利用率提高 25%', '产品不良率下降 40%'],
    products: ['云翼计算', '数洞察', '易转宝']
  }
]

const industries = [
  { id: 'all', name: '全部行业' },
  { id: 'finance', name: '金融' },
  { id: 'retail', name: '零售' },
  { id: 'medical', name: '医疗' },
  { id: 'manufacture', name: '制造' }
]

const filteredCases = ref(cases)

const setIndustry = (industryId) => {
  activeIndustry.value = industryId
  if (industryId === 'all') {
    filteredCases.value = cases
  } else {
    filteredCases.value = cases.filter(c => c.industry === industryId)
  }
}

const scrollToContact = () => {
  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <div class="cases-page" :class="{ loaded: isLoaded }">
    <header class="header">
      <div class="header-content">
        <router-link to="/" class="logo">
          <span class="logo-mark">◈</span>
          <span class="logo-text">灵境科技</span>
        </router-link>
        <nav class="nav">
          <router-link to="/">首页</router-link>
          <router-link to="/products">产品</router-link>
          <router-link to="/cases" class="active">案例</router-link>
          <router-link to="/">关于</router-link>
          <router-link to="/">联系</router-link>
        </nav>
      </div>
    </header>

    <section class="hero">
      <div class="hero-bg"></div>
      <div class="hero-content">
        <span class="hero-overline" :class="{ visible: isLoaded }">成功案例</span>
        <h1 class="hero-title">
          <span class="hero-title-line" :class="{ visible: isLoaded }">200+企业的</span>
          <span class="hero-title-line accent" :class="{ visible: isLoaded }">数字化转型伙伴</span>
        </h1>
        <p class="hero-description" :class="{ visible: isLoaded }">
          从金融科技到智能制造，灵境科技以领先的技术实力和深厚的行业经验，帮助各行业企业实现数字化升级与业务增长。
        </p>
      </div>
    </section>

    <section class="filter-section">
      <div class="filter-content">
        <button 
          v-for="ind in industries" 
          :key="ind.id"
          @click="setIndustry(ind.id)"
          :class="{ active: activeIndustry === ind.id }"
        >
          {{ ind.name }}
        </button>
      </div>
    </section>

    <section class="cases-section">
      <div class="cases-list">
        <article 
          v-for="(caseItem, index) in filteredCases" 
          :key="caseItem.id" 
          class="case-card"
          :style="{ animationDelay: `${index * 100}ms` }"
        >
          <div class="case-image">
            <div class="case-image-placeholder">
              <span class="placeholder-icon">◈</span>
            </div>
          </div>
          <div class="case-content">
            <div class="case-meta">
              <span class="case-industry">{{ caseItem.industryName }}</span>
              <span class="case-company">{{ caseItem.company }}</span>
            </div>
            <h3 class="case-title">{{ caseItem.title }}</h3>
            <p class="case-desc">{{ caseItem.description }}</p>
            <div class="case-results">
              <span v-for="result in caseItem.results" :key="result" class="result-tag">
                {{ result }}
              </span>
            </div>
            <div class="case-products">
              <span class="products-label">采用方案：</span>
              <span v-for="product in caseItem.products" :key="product" class="product-tag">
                {{ product }}
              </span>
            </div>
          </div>
        </article>
      </div>
    </section>

    <section id="contact" class="contact-section">
      <div class="contact-content">
        <h2>开启您的数字化转型之旅</h2>
        <p>无论您来自哪个行业，我们的专家团队都将为您量身定制解决方案</p>
        <button class="btn-primary" @click="scrollToContact">预约咨询</button>
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
            <router-link to="/products">人工智能</router-link>
            <router-link to="/products">云计算</router-link>
            <router-link to="/products">大数据分析</router-link>
            <router-link to="/products">数字化咨询</router-link>
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

.cases-page {
  opacity: 0;
  transition: opacity 0.6s ease;
}

.cases-page.loaded {
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

.cases-section {
  padding: 0 var(--space-3xl) var(--space-4xl);
}

.cases-list {
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: var(--space-xl);
}

.case-card {
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: var(--space-xl);
  background: var(--color-surface);
  opacity: 0;
  transform: translateY(30px);
  animation: fadeInUp 0.6s var(--ease-out-quart) forwards;
  transition: box-shadow var(--transition-base), transform var(--transition-base);
}

.case-card:hover {
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.06);
  transform: translateX(8px);
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.case-image {
  aspect-ratio: 4/3;
}

.case-image-placeholder {
  width: 100%;
  height: 100%;
  background: var(--color-dark);
  display: flex;
  align-items: center;
  justify-content: center;
}

.placeholder-icon {
  font-size: 48px;
  color: var(--color-accent);
  opacity: 0.8;
}

.case-content {
  padding: var(--space-xl) var(--space-xl) var(--space-xl) 0;
}

.case-meta {
  display: flex;
  gap: var(--space-md);
  margin-bottom: var(--space-md);
}

.case-industry {
  padding: 2px 10px;
  background: var(--color-accent);
  color: white;
  font-size: 11px;
  font-weight: 500;
}

.case-company {
  font-size: 13px;
  color: var(--color-text-tertiary);
}

.case-title {
  font-family: var(--font-display);
  font-size: 24px;
  font-weight: 600;
  margin-bottom: var(--space-md);
  line-height: 1.3;
}

.case-desc {
  font-size: 15px;
  color: var(--color-text-secondary);
  line-height: 1.7;
  margin-bottom: var(--space-lg);
}

.case-results {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-sm);
  margin-bottom: var(--space-md);
}

.result-tag {
  padding: 4px 12px;
  background: var(--color-bg);
  font-size: 13px;
  color: var(--color-text-secondary);
}

.case-products {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  flex-wrap: wrap;
}

.products-label {
  font-size: 12px;
  color: var(--color-text-tertiary);
}

.product-tag {
  font-size: 12px;
  color: var(--color-accent);
  font-weight: 500;
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

  .cases-section {
    padding: 0 var(--space-lg) var(--space-3xl);
  }

  .case-card {
    grid-template-columns: 1fr;
  }

  .case-image {
    aspect-ratio: 16/9;
  }

  .case-content {
    padding: var(--space-lg);
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