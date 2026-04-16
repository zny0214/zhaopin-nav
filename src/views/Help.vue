<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const isLoaded = ref(false)
const activeCategory = ref('all')
const expandedQuestion = ref(null)

onMounted(() => {
  setTimeout(() => {
    isLoaded.value = true
  }, 100)
})

const categories = [
  { id: 'all', name: '全部问题' },
  { id: 'product', name: '产品服务' },
  { id: 'technical', name: '技术支持' },
  { id: 'billing', name: '账户账单' },
  { id: 'cooperation', name: '商务合作' }
]

const faqs = [
  {
    category: 'product',
    question: '灵境智脑支持哪些机器学习框架？',
    answer: '灵境智脑支持TensorFlow、PyTorch、Scikit-learn、XGBoost等主流机器学习框架，同时也支持用户自定义模型导入。我们的平台会自动适配不同框架的模型格式，提供统一的推理接口。'
  },
  {
    category: 'product',
    question: '云翼计算支持哪些部署方式？',
    answer: '云翼计算支持多种部署方式，包括公有云、私有化部署和混合云架构。用户可以根据业务需求和数据安全要求灵活选择，同时也支持容器化和传统虚机部署。'
  },
  {
    category: 'technical',
    question: '如何申请技术支持服务？',
    answer: '您可以通过以下方式获取技术支持：1) 提交工单：登录控制台进入"帮助中心"提交工单；2) 电话支持：拨打400-888-9999获取7×24小时技术支持；3) 在线客服：官网右下角在线客服随时为您服务。'
  },
  {
    category: 'technical',
    question: '遇到系统故障应该如何处理？',
    answer: '遇到系统故障时，请立即联系我们的技术支持团队。对于企业级客户，我们提供SLA保障，核心服务故障响应时间不超过15分钟。我们建议您提前配置告警通知，第一时间掌握系统状态。'
  },
  {
    category: 'billing',
    question: '如何查看和管理我的账单？',
    answer: '您可以登录灵境科技控制台，进入"账户管理"查看详细账单。我们支持按量计费和包年包月两种计费模式，同时提供企业发票开具服务。如有账单疑问，请联系您的专属客户经理。'
  },
  {
    category: 'billing',
    question: '支持哪些付款方式？',
    answer: '我们支持银行转账、对公支票、支付宝、微信支付、信用卡等多种付款方式。企业客户还可以申请月结服务，按月统一结算。具体付款方式可在合同中约定。'
  },
  {
    category: 'cooperation',
    question: '如何成为灵境科技的合作伙伴？',
    answer: '我们欢迎各类合作伙伴加入灵境科技生态体系，包括技术合作伙伴、解决方案合作伙伴和渠道合作伙伴。请通过官网联系方式或邮件（partner@lingjingtech.com）提交合作意向，我们的商务团队将在3个工作日内与您联系。'
  },
  {
    category: 'cooperation',
    question: '灵境科技提供定制化开发服务吗？',
    answer: '是的，我们提供全面的定制化开发服务。我们的专家团队可以根据您的具体业务需求，定制开发专属的数字化解决方案。定制服务涵盖产品功能扩展、系统集成、数据处理流程优化等多个领域。'
  }
]

const filteredFaqs = () => {
  if (activeCategory.value === 'all') return faqs
  return faqs.filter(faq => faq.category === activeCategory.value)
}

const toggleQuestion = (index) => {
  expandedQuestion.value = expandedQuestion.value === index ? null : index
}

const setCategory = (categoryId) => {
  activeCategory.value = categoryId
  expandedQuestion.value = null
}
</script>

<template>
  <div class="help-page" :class="{ loaded: isLoaded }">
    <header class="header">
      <div class="header-content">
        <router-link to="/" class="logo">
          <span class="logo-mark">◈</span>
          <span class="logo-text">灵境科技</span>
        </router-link>
        <nav class="nav">
          <router-link to="/" :class="{ active: route.path === '/' }">首页</router-link>
          <router-link to="/products" :class="{ active: route.path === '/products' }">产品</router-link>
          <router-link to="/cases" :class="{ active: route.path === '/cases' }">案例</router-link>
          <router-link to="/" :class="{ active: route.path === '/about' }">关于</router-link>
          <router-link to="/contact" :class="{ active: route.path === '/contact' }">联系</router-link>
        </nav>
      </div>
    </header>

    <section class="hero">
      <div class="hero-bg"></div>
      <div class="hero-content">
        <span class="hero-overline" :class="{ visible: isLoaded }">客户支持</span>
        <h1 class="hero-title">
          <span class="hero-title-line" :class="{ visible: isLoaded }">帮助中心</span>
          <span class="hero-title-line accent" :class="{ visible: isLoaded }">您的问题，我来解答</span>
        </h1>
        <p class="hero-description" :class="{ visible: isLoaded }">
          无论是产品使用、技术问题还是商务合作，我们随时为您提供专业、高效的支持服务。
        </p>
      </div>
    </section>

    <section class="categories">
      <div class="categories-content">
        <button 
          v-for="cat in categories" 
          :key="cat.id"
          @click="setCategory(cat.id)"
          :class="{ active: activeCategory === cat.id }"
        >
          {{ cat.name }}
        </button>
      </div>
    </section>

    <section class="faq-section">
      <div class="faq-list">
        <article 
          v-for="(faq, index) in filteredFaqs()" 
          :key="index"
          class="faq-item"
          :class="{ expanded: expandedQuestion === index }"
        >
          <button class="faq-question" @click="toggleQuestion(index)">
            <span class="faq-icon">{{ expandedQuestion === index ? '−' : '+' }}</span>
            <span class="faq-text">{{ faq.question }}</span>
          </button>
          <div class="faq-answer">
            <p>{{ faq.answer }}</p>
          </div>
        </article>
      </div>
    </section>

    <section class="contact-support">
      <div class="support-content">
        <h2>没有找到答案？</h2>
        <p>我们的支持团队随时为您服务</p>
        <div class="support-methods">
          <div class="support-item">
            <span class="support-icon">📞</span>
            <span class="support-label">电话咨询</span>
            <span class="support-value">400-888-9999</span>
          </div>
          <div class="support-item">
            <span class="support-icon">✉️</span>
            <span class="support-label">邮件联系</span>
            <span class="support-value">support@lingjingtech.com</span>
          </div>
          <div class="support-item">
            <span class="support-icon">💬</span>
            <span class="support-label">在线客服</span>
            <span class="support-value">7×24 小时</span>
          </div>
        </div>
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
  --transition-fast: 0.2s ease;
  --transition-base: 0.3s ease;
}

body {
  font-family: var(--font-body);
  background: var(--color-bg);
  color: var(--color-text);
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
}

.help-page {
  opacity: 0;
  transition: opacity 0.6s ease;
}

.help-page.loaded {
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

.categories {
  padding: 0 var(--space-3xl);
  margin-bottom: var(--space-3xl);
}

.categories-content {
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  gap: var(--space-sm);
  flex-wrap: wrap;
  justify-content: center;
}

.categories-content button {
  padding: var(--space-sm) var(--space-lg);
  background: transparent;
  border: 1px solid var(--color-border);
  font-family: var(--font-body);
  font-size: 14px;
  color: var(--color-text-secondary);
  cursor: pointer;
  transition: all var(--transition-base);
}

.categories-content button:hover {
  border-color: var(--color-text);
  color: var(--color-text);
}

.categories-content button.active {
  background: var(--color-dark);
  border-color: var(--color-dark);
  color: var(--color-bg);
}

.faq-section {
  padding: 0 var(--space-3xl) var(--space-4xl);
}

.faq-list {
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
}

.faq-item {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  transition: all var(--transition-base);
}

.faq-item:hover {
  border-color: var(--color-accent);
}

.faq-item.expanded {
  border-color: var(--color-accent);
}

.faq-question {
  width: 100%;
  padding: var(--space-lg);
  background: none;
  border: none;
  display: flex;
  align-items: flex-start;
  gap: var(--space-md);
  cursor: pointer;
  text-align: left;
  font-family: var(--font-body);
  font-size: 16px;
  font-weight: 500;
  color: var(--color-text);
}

.faq-icon {
  font-size: 20px;
  color: var(--color-accent);
  font-weight: 600;
  flex-shrink: 0;
}

.faq-text {
  flex: 1;
}

.faq-answer {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease, padding 0.3s ease;
}

.faq-item.expanded .faq-answer {
  max-height: 500px;
  padding: 0 var(--space-lg) var(--space-lg);
  padding-left: 52px;
}

.faq-answer p {
  font-size: 15px;
  color: var(--color-text-secondary);
  line-height: 1.8;
}

.contact-support {
  padding: var(--space-4xl) var(--space-3xl);
  background: var(--color-dark);
  text-align: center;
}

.support-content h2 {
  font-family: var(--font-display);
  font-size: clamp(28px, 4vw, 40px);
  color: var(--color-bg);
  margin-bottom: var(--space-md);
}

.support-content > p {
  font-size: 16px;
  color: rgba(250, 249, 247, 0.7);
  margin-bottom: var(--space-2xl);
}

.support-methods {
  display: flex;
  justify-content: center;
  gap: var(--space-2xl);
  flex-wrap: wrap;
}

.support-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-sm);
}

.support-icon {
  font-size: 32px;
}

.support-label {
  font-size: 14px;
  color: rgba(250, 249, 247, 0.6);
}

.support-value {
  font-size: 16px;
  font-weight: 500;
  color: var(--color-accent);
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

  .faq-section {
    padding: 0 var(--space-lg) var(--space-3xl);
  }

  .support-methods {
    flex-direction: column;
    gap: var(--space-lg);
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