<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isLoaded = ref(false)
const expandedFeature = ref(null)
const activeScenario = ref(null)
const visibleMetrics = ref(false)
const activeMethod = ref(0)

const features = [
  {
    title: '现状诊断',
    description: '深入调研企业现状，识别数字化转型的关键痛点与机会点，明确转型方向',
    details: '业务调研 | 痛点分析 | 机会识别 | 优先级排序'
  },
  {
    title: '路径规划',
    description: '基于行业最佳实践与企业实际情况，量身定制切实可行的转型路线图',
    details: '路线图设计 | 里程碑设定 | 资源规划 | 风险预案'
  },
  {
    title: '执行辅导',
    description: '专业团队全程陪伴，从战略到落地，确保转型举措有效执行',
    details: '项目监理 | 进度跟踪 | 问题协调 | 变更管理'
  },
  {
    title: '效果评估',
    description: '建立科学的评估体系，持续跟踪转型效果，及时优化调整',
    details: 'KPI设定 | 效果追踪 | 归因分析 | 持续优化'
  }
]

const scenarios = [
  { name: '战略规划', icon: '◈', desc: '数字化战略制定与蓝图规划' },
  { name: '流程优化', icon: '◇', desc: '业务流程梳理与优化建议' },
  { name: '组织变革', icon: '◉', desc: '组织架构与人才发展' },
  { name: '能力建设', icon: '◎', desc: '团队能力提升与知识转移' }
]

const metrics = [
  { value: '200+', label: '成功案例' },
  { value: '98%', label: '客户满意度' },
  { value: '15+', label: '行业经验' },
  { value: '100+', label: '专家团队' }
]

const methods = [
  { name: '诊断访谈', desc: '一对一深度访谈' },
  { name: '工作坊', desc: '团队协作共创' },
  { name: '标杆考察', desc: '行业最佳实践' },
  { name: '培训赋能', desc: '系统化能力提升' }
]

let metricsObserver = null

onMounted(() => {
  setTimeout(() => {
    isLoaded.value = true
  }, 100)

  metricsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        visibleMetrics.value = true
        metricsObserver.disconnect()
      }
    })
  }, { threshold: 0.3 })

  setTimeout(() => {
    const metricsEl = document.querySelector('.metrics')
    if (metricsEl) metricsObserver.observe(metricsEl)
  }, 100)
})

onUnmounted(() => {
  if (metricsObserver) metricsObserver.disconnect()
})

const toggleFeature = (index) => {
  expandedFeature.value = expandedFeature.value === index ? null : index
}

const selectScenario = (index) => {
  activeScenario.value = activeScenario.value === index ? null : index
}
</script>

<template>
  <div class="service-detail" :class="{ loaded: isLoaded }">
    <header class="header">
      <div class="header-content">
        <router-link to="/" class="logo">
          <span class="logo-mark">◈</span>
          <span class="logo-text">灵境科技</span>
        </router-link>
        <nav class="nav">
          <router-link to="/">首页</router-link>
          <router-link to="/products">产品</router-link>
          <router-link to="/cases">案例</router-link>
          <router-link to="/">关于</router-link>
          <router-link to="/contact">联系</router-link>
        </nav>
      </div>
    </header>

    <section class="hero">
      <div class="hero-bg"></div>
      <div class="hero-content">
        <span class="hero-overline" :class="{ visible: isLoaded }">数字化转型咨询</span>
        <h1 class="hero-title">
          <span class="hero-title-line" :class="{ visible: isLoaded }">易转宝</span>
          <span class="hero-title-line accent" :class="{ visible: isLoaded }">让转型更简单</span>
        </h1>
        <p class="hero-description" :class="{ visible: isLoaded }">
          专业的数字化转型咨询与落地服务，陪伴企业完成从传统到数字化的跨越。十五年行业深耕，200+企业共同选择。
        </p>
        <div class="hero-actions" :class="{ visible: isLoaded }">
          <router-link to="/#contact" class="btn-primary">立即咨询</router-link>
          <router-link to="/cases" class="btn-secondary">查看案例</router-link>
        </div>
      </div>
    </section>

    <section class="methods-section">
      <div class="section-header">
        <span class="section-overline">咨询方法</span>
        <h2 class="section-title">专业的咨询方式</h2>
      </div>
      <div class="methods-grid">
        <button
          v-for="(method, index) in methods"
          :key="method.name"
          class="method-card"
          :class="{ active: activeMethod === index }"
          @click="activeMethod = index"
        >
          <span class="method-num">{{ String(index + 1).padStart(2, '0') }}</span>
          <span class="method-name">{{ method.name }}</span>
          <span class="method-desc">{{ method.desc }}</span>
        </button>
      </div>
    </section>

    <section class="features">
      <div class="section-header">
        <span class="section-overline">服务流程</span>
        <h2 class="section-title">四大核心服务</h2>
      </div>
      <div class="features-grid">
        <article
          v-for="(feature, index) in features"
          :key="feature.title"
          class="feature-card"
          :class="{ expanded: expandedFeature === index }"
          @click="toggleFeature(index)"
        >
          <div class="feature-header">
            <div class="feature-icon">{{ index + 1 }}</div>
            <h3 class="feature-title">{{ feature.title }}</h3>
            <span class="expand-icon">{{ expandedFeature === index ? '−' : '+' }}</span>
          </div>
          <p class="feature-desc">{{ feature.description }}</p>
          <div class="feature-details" :class="{ show: expandedFeature === index }">
            <div class="detail-tags">
              <span v-for="tag in feature.details.split(' | ')" :key="tag" class="detail-tag">{{ tag }}</span>
            </div>
          </div>
        </article>
      </div>
    </section>

    <section class="scenarios">
      <div class="scenarios-content">
        <div class="scenarios-text">
          <span class="section-overline">咨询方向</span>
          <h2 class="section-title">全方位转型支持</h2>
          <p class="scenarios-desc">从战略规划到组织变革，从流程优化到能力建设，我们提供全链条的咨询服务，助您系统性推进数字化转型。</p>
        </div>
        <div class="scenarios-grid">
          <div
            v-for="(scenario, index) in scenarios"
            :key="scenario.name"
            class="scenario-card"
            :class="{ active: activeScenario === index }"
            @click="selectScenario(index)"
          >
            <span class="scenario-icon">{{ scenario.icon }}</span>
            <span class="scenario-name">{{ scenario.name }}</span>
            <p class="scenario-desc" :class="{ show: activeScenario === index }">{{ scenario.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="metrics" :class="{ visible: visibleMetrics }">
      <div class="metrics-grid">
        <div v-for="metric in metrics" :key="metric.label" class="metric-item">
          <span class="metric-value">{{ metric.value }}</span>
          <span class="metric-label">{{ metric.label }}</span>
        </div>
      </div>
    </section>

    <section class="cta">
      <div class="cta-content">
        <h2>开启您的数字化转型之旅</h2>
        <p>专业团队为您保驾护航</p>
        <router-link to="/#contact" class="btn-primary">预约咨询</router-link>
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
  --color-accent: #c97a62;
  --color-accent-dark: #b96a52;
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

.service-detail {
  opacity: 0;
  transition: opacity 0.6s ease;
}

.service-detail.loaded {
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
  background: radial-gradient(ellipse at 50% 0%, rgba(201, 122, 98, 0.15) 0%, transparent 60%);
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
  font-size: clamp(48px, 7vw, 72px);
  font-weight: 500;
  line-height: 1.1;
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
  margin-bottom: var(--space-xl);
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.6s var(--ease-out-quart);
  transition-delay: 0.6s;
}

.hero-description.visible {
  opacity: 1;
  transform: translateY(0);
}

.hero-actions {
  display: flex;
  gap: var(--space-md);
  justify-content: center;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.6s var(--ease-out-quart);
  transition-delay: 0.8s;
}

.hero-actions.visible {
  opacity: 1;
  transform: translateY(0);
}

.btn-primary {
  background: var(--color-dark);
  color: var(--color-bg);
  border: none;
  padding: var(--space-md) var(--space-xl);
  font-family: var(--font-body);
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
  transition: all var(--transition-base);
  display: inline-block;
}

.btn-primary:hover {
  background: var(--color-accent);
  transform: translateY(-2px);
}

.btn-secondary {
  background: transparent;
  color: var(--color-text);
  border: 1px solid var(--color-border);
  padding: var(--space-md) var(--space-xl);
  font-family: var(--font-body);
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
  transition: all var(--transition-base);
  display: inline-block;
}

.btn-secondary:hover {
  border-color: var(--color-text);
  background: var(--color-text);
  color: var(--color-bg);
}

.methods-section {
  padding: var(--space-4xl) var(--space-3xl);
  background: var(--color-surface);
}

.section-header {
  text-align: center;
  margin-bottom: var(--space-3xl);
}

.section-overline {
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--color-accent);
  display: block;
  margin-bottom: var(--space-md);
}

.section-title {
  font-family: var(--font-display);
  font-size: clamp(32px, 5vw, 48px);
  font-weight: 500;
  line-height: 1.2;
  margin-bottom: var(--space-md);
}

.methods-grid {
  max-width: 900px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-md);
}

.method-card {
  background: var(--color-bg);
  border: 2px solid transparent;
  padding: var(--space-xl);
  text-align: center;
  cursor: pointer;
  transition: all var(--transition-base);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-sm);
}

.method-card:hover {
  border-color: var(--color-accent);
  transform: translateY(-4px);
}

.method-card.active {
  border-color: var(--color-accent);
  background: var(--color-accent);
}

.method-card.active .method-num,
.method-card.active .method-name,
.method-card.active .method-desc {
  color: white;
}

.method-num {
  font-family: var(--font-display);
  font-size: 28px;
  font-weight: 600;
  color: var(--color-accent);
  transition: color var(--transition-base);
}

.method-name {
  font-weight: 600;
  font-size: 16px;
  transition: color var(--transition-base);
}

.method-desc {
  font-size: 13px;
  color: var(--color-text-secondary);
  transition: color var(--transition-base);
}

.features {
  padding: var(--space-4xl) var(--space-3xl);
  background: var(--color-bg);
}

.features-grid {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: var(--space-xl);
}

.feature-card {
  padding: var(--space-2xl);
  background: var(--color-surface);
  cursor: pointer;
  transition: all var(--transition-base);
  border: 1px solid transparent;
}

.feature-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.06);
  border-color: var(--color-accent);
}

.feature-card.expanded {
  border-color: var(--color-accent);
}

.feature-header {
  display: flex;
  align-items: center;
  gap: var(--space-md);
  margin-bottom: var(--space-md);
}

.feature-icon {
  width: 48px;
  height: 48px;
  background: var(--color-accent);
  color: white;
  font-family: var(--font-display);
  font-size: 20px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.feature-title {
  font-family: var(--font-display);
  font-size: 20px;
  font-weight: 600;
  flex: 1;
}

.expand-icon {
  font-size: 24px;
  color: var(--color-accent);
  font-weight: 300;
}

.feature-desc {
  font-size: 15px;
  color: var(--color-text-secondary);
  line-height: 1.7;
}

.feature-details {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.4s ease, margin-top 0.3s ease;
}

.feature-details.show {
  max-height: 200px;
  margin-top: var(--space-lg);
}

.detail-tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-sm);
}

.detail-tag {
  background: var(--color-bg);
  padding: var(--space-xs) var(--space-md);
  font-size: 12px;
  color: var(--color-text-secondary);
  border: 1px solid var(--color-border);
}

.scenarios {
  padding: var(--space-4xl) var(--space-3xl);
  background: var(--color-surface);
}

.scenarios-content {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-4xl);
  align-items: center;
}

.scenarios-text .section-overline {
  text-align: left;
}

.scenarios-text .section-title {
  text-align: left;
  margin-bottom: var(--space-lg);
}

.scenarios-desc {
  font-size: 16px;
  color: var(--color-text-secondary);
  line-height: 1.7;
}

.scenarios-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-md);
}

.scenario-card {
  padding: var(--space-xl);
  background: var(--color-bg);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-sm);
  cursor: pointer;
  transition: all var(--transition-base);
  border: 2px solid transparent;
}

.scenario-card:hover {
  transform: translateY(-4px);
  border-color: var(--color-accent);
}

.scenario-card.active {
  border-color: var(--color-accent);
  background: var(--color-accent);
}

.scenario-card.active .scenario-icon,
.scenario-card.active .scenario-name {
  color: white;
}

.scenario-icon {
  font-size: 32px;
  color: var(--color-accent);
  transition: color var(--transition-base);
}

.scenario-name {
  font-size: 15px;
  font-weight: 500;
  transition: color var(--transition-base);
}

.scenario-desc {
  font-size: 13px;
  color: var(--color-text-secondary);
  text-align: center;
  max-height: 0;
  overflow: hidden;
  opacity: 0;
  transition: all 0.3s ease;
}

.scenario-desc.show {
  max-height: 50px;
  opacity: 1;
  margin-top: var(--space-sm);
}

.scenario-card.active .scenario-desc {
  color: rgba(255, 255, 255, 0.9);
}

.metrics {
  padding: var(--space-4xl) var(--space-3xl);
  background: var(--color-dark);
}

.metrics-grid {
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-xl);
}

.metric-item {
  text-align: center;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.6s ease;
}

.metrics.visible .metric-item {
  opacity: 1;
  transform: translateY(0);
}

.metrics.visible .metric-item:nth-child(1) { transition-delay: 0.1s; }
.metrics.visible .metric-item:nth-child(2) { transition-delay: 0.2s; }
.metrics.visible .metric-item:nth-child(3) { transition-delay: 0.3s; }
.metrics.visible .metric-item:nth-child(4) { transition-delay: 0.4s; }

.metric-value {
  font-family: var(--font-display);
  font-size: 48px;
  font-weight: 600;
  color: var(--color-accent);
  display: block;
}

.metric-label {
  font-size: 14px;
  color: rgba(250, 249, 247, 0.7);
  margin-top: var(--space-sm);
  display: block;
}

.cta {
  padding: var(--space-4xl) var(--space-3xl);
  background: var(--color-accent);
  text-align: center;
}

.cta-content h2 {
  font-family: var(--font-display);
  font-size: clamp(28px, 4vw, 40px);
  color: white;
  margin-bottom: var(--space-md);
}

.cta-content p {
  font-size: 16px;
  color: white;
  opacity: 0.9;
  margin-bottom: var(--space-xl);
}

.cta .btn-primary {
  background: white;
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

@media (max-width: 1024px) {
  .scenarios-content {
    grid-template-columns: 1fr;
  }

  .metrics-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .methods-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .footer-content {
    grid-template-columns: 1fr;
  }
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

  .hero-actions {
    flex-direction: column;
  }

  .methods-grid {
    grid-template-columns: 1fr;
  }

  .features,
  .scenarios,
  .metrics,
  .cta,
  .methods-section {
    padding: var(--space-3xl) var(--space-lg);
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