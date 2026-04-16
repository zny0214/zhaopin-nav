<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isLoaded = ref(false)
const expandedFeature = ref(null)
const activeScenario = ref(null)
const visibleMetrics = ref(false)
const activeStep = ref(0)

const features = [
  {
    title: 'AutoML 自动化建模',
    description: '无需专业AI背景，通过可视化界面快速构建高质量机器学习模型，大幅降低AI应用门槛',
    details: '拖拽式界面 | 无需编码 | 自动特征工程 | 模型自动调优 | 支持20+算法'
  },
  {
    title: '多模型管理',
    description: '统一管理从数据处理到模型部署的全生命周期，支持主流深度学习框架与传统机器学习算法',
    details: 'TensorFlow | PyTorch | Scikit-learn | ONNX | 全流程追溯'
  },
  {
    title: '实时推理引擎',
    description: '毫秒级响应的高性能推理服务，支持弹性扩缩容，保障业务在高并发场景下的稳定表现',
    details: '99.9%可用性 | 弹性扩缩容 | 多级缓存 | 异步处理 | GPU加速'
  },
  {
    title: '可视化监控',
    description: '全方位监控模型性能、数据漂移与业务指标，及时发现并预警潜在风险',
    details: '实时看板 | 漂移检测 | 异常告警 | 性能分析 | 日志追踪'
  }
]

const scenarios = [
  { name: '智能风控', icon: '◈', desc: '实时风险识别与预警' },
  { name: '精准营销', icon: '◇', desc: '用户画像与精准推荐' },
  { name: '客户服务', icon: '◉', desc: '智能客服与工单分类' },
  { name: '运营优化', icon: '◎', desc: '流程自动化与效率提升' }
]

const metrics = [
  { value: '35%', label: '风控效率提升' },
  { value: '94%', label: '模型准确率' },
  { value: '60%', label: '运营成本降低' },
  { value: '200+', label: '服务企业' }
]

const processSteps = [
  { num: '01', title: '数据接入', desc: '多源数据一键对接' },
  { num: '02', title: '模型训练', desc: 'AutoML自动建模' },
  { num: '03', title: '部署上线', desc: '一键部署到生产' },
  { num: '04', title: '运维监控', desc: '全方位性能监控' }
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
        <span class="hero-overline" :class="{ visible: isLoaded }">人工智能解决方案</span>
        <h1 class="hero-title">
          <span class="hero-title-line" :class="{ visible: isLoaded }">灵境智脑</span>
          <span class="hero-title-line accent" :class="{ visible: isLoaded }">企业级AI中台</span>
        </h1>
        <p class="hero-description" :class="{ visible: isLoaded }">
          基于深度学习的智能系统，为企业注入AI能力。一站式解决模型训练、部署、管理全流程，让人工智能真正成为企业的核心竞争力。
        </p>
        <div class="hero-actions" :class="{ visible: isLoaded }">
          <router-link to="/#contact" class="btn-primary">立即咨询</router-link>
          <router-link to="/cases" class="btn-secondary">查看案例</router-link>
        </div>
      </div>
    </section>

    <section class="process">
      <div class="section-header">
        <span class="section-overline">服务流程</span>
        <h2 class="section-title">四步轻松启用AI能力</h2>
      </div>
      <div class="process-steps">
        <button
          v-for="(step, index) in processSteps"
          :key="step.num"
          class="process-step"
          :class="{ active: activeStep === index }"
          @click="activeStep = index"
        >
          <span class="step-num">{{ step.num }}</span>
          <span class="step-title">{{ step.title }}</span>
          <span class="step-desc">{{ step.desc }}</span>
        </button>
      </div>
    </section>

    <section class="features">
      <div class="section-header">
        <span class="section-overline">核心能力</span>
        <h2 class="section-title">四大技术优势</h2>
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
          <span class="section-overline">应用场景</span>
          <h2 class="section-title">覆盖多元业务需求</h2>
          <p class="scenarios-desc">灵境智脑已广泛应用于金融、零售、医疗、制造等多个行业，帮助企业实现智能化升级。</p>
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
        <h2>准备好开启AI转型之旅了吗？</h2>
        <p>我们的专家团队将为您量身定制解决方案</p>
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
  background: radial-gradient(ellipse at 50% 0%, rgba(201, 169, 98, 0.15) 0%, transparent 60%);
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
  background: var(--color-accent-dark);
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

.process {
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

.process-steps {
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-md);
}

.process-step {
  background: var(--color-bg);
  border: 2px solid transparent;
  padding: var(--space-xl);
  text-align: center;
  cursor: pointer;
  transition: all var(--transition-base);
}

.process-step:hover {
  border-color: var(--color-accent);
}

.process-step.active {
  border-color: var(--color-accent);
  background: var(--color-accent);
}

.process-step.active .step-num,
.process-step.active .step-title,
.process-step.active .step-desc {
  color: white;
}

.step-num {
  font-family: var(--font-display);
  font-size: 32px;
  font-weight: 600;
  color: var(--color-accent);
  display: block;
  margin-bottom: var(--space-sm);
  transition: color var(--transition-base);
}

.step-title {
  font-family: var(--font-display);
  font-size: 18px;
  font-weight: 600;
  display: block;
  margin-bottom: var(--space-xs);
  transition: color var(--transition-base);
}

.step-desc {
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
  color: var(--color-dark);
  margin-bottom: var(--space-md);
}

.cta-content p {
  font-size: 16px;
  color: var(--color-dark);
  opacity: 0.8;
  margin-bottom: var(--space-xl);
}

.cta .btn-primary {
  background: var(--color-dark);
  color: var(--color-bg);
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

  .process-steps {
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

  .process-steps {
    grid-template-columns: 1fr;
  }

  .features,
  .scenarios,
  .metrics,
  .cta,
  .process {
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