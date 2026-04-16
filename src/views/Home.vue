<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isLoaded = ref(false)
const activeSection = ref('hero')
const scrollY = ref(0)
const formData = ref({
  name: '',
  email: '',
  company: '',
  message: ''
})
const isSubmitting = ref(false)
const isSuccess = ref(false)

onMounted(() => {
  setTimeout(() => {
    isLoaded.value = true
  }, 100)
  window.addEventListener('scroll', handleScroll, { passive: true })
  setupIntersectionObserver()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const handleScroll = () => {
  scrollY.value = window.scrollY
  const sections = ['hero', 'services', 'about', 'contact']
  for (const section of sections) {
    const el = document.getElementById(section)
    if (el) {
      const rect = el.getBoundingClientRect()
      if (rect.top <= 150 && rect.bottom >= 150) {
        activeSection.value = section
        break
      }
    }
  }
}

const services = [
  {
    title: '人工智能解决方案',
    description: '基于深度学习的智能系统，为企业注入AI能力，提升运营效率与决策质量',
    icon: '◈',
    route: '/services/ai-solution'
  },
  {
    title: '云计算平台',
    description: '弹性可扩展的云基础设施，支持海量数据处理与分布式计算，保障业务连续性',
    icon: '◇',
    route: '/services/cloud-platform'
  },
  {
    title: '数据智能分析',
    description: '从数据洞察到商业智能，挖掘数据价值，驱动精准决策与业务增长',
    icon: '◉',
    route: '/services/data-analytics'
  },
  {
    title: '数字化转型咨询',
    description: '专业团队量身定制转型路径，陪伴企业完成从传统到数字化的跨越',
    icon: '◎',
    route: '/services/digital-consulting'
  }
]

const stats = [
  { value: 200, suffix: '+', label: '服务企业' },
  { value: 98, suffix: '%', label: '客户满意度' },
  { value: 15, suffix: '+', label: '技术专利' },
  { value: 24, suffix: '/7', label: '全天候支持' }
]

const animatedStats = ref(stats.map(s => ({ ...s, display: 0 })))
const statsAnimated = ref(false)

const animateValue = (obj, target, duration = 2000) => {
  const startTime = performance.now()
  const step = (currentTime) => {
    const elapsed = currentTime - startTime
    const progress = Math.min(elapsed / duration, 1)
    const easeProgress = 1 - Math.pow(1 - progress, 4)
    obj.display = Math.round(easeProgress * target)
    if (progress < 1) {
      requestAnimationFrame(step)
    }
  }
  requestAnimationFrame(step)
}

const scrollToSection = (sectionId) => {
  activeSection.value = sectionId
  document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
}

const goToProducts = () => {
  window.location.href = '/products'
}

const goToCases = () => {
  window.location.href = '/cases'
}

const handleSubmit = () => {
  isSubmitting.value = true
  setTimeout(() => {
    isSubmitting.value = false
    isSuccess.value = true
    formData.value = { name: '', email: '', company: '', message: '' }
    setTimeout(() => {
      isSuccess.value = false
    }, 3000)
  }, 1500)
}

const setupIntersectionObserver = () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.target.classList.contains('stat-item')) {
          if (!statsAnimated.value) {
            statsAnimated.value = true
            animatedStats.value.forEach((stat, index) => {
              setTimeout(() => {
                animateValue(stat, stat.value)
              }, index * 200)
            })
          }
        }
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view')
        }
      })
    },
    { threshold: 0.2 }
  )

  setTimeout(() => {
    document.querySelectorAll('.service-card, .stat-item, .about-visual, .contact-info, .contact-form').forEach((el) => {
      observer.observe(el)
    })
  }, 100)
}
</script>

<template>
  <div class="home" :class="{ loaded: isLoaded }">
    <header class="header">
      <div class="header-content">
        <router-link to="/" class="logo">
          <span class="logo-mark">◈</span>
          <span class="logo-text">灵境科技</span>
        </router-link>
        <nav class="nav">
          <router-link to="/" :class="{ active: activeSection === 'hero' }">首页</router-link>
          <button @click="scrollToSection('services')" :class="{ active: activeSection === 'services' }">服务</button>
          <button @click="goToProducts">产品</button>
          <button @click="goToCases">案例</button>
          <button @click="scrollToSection('about')" :class="{ active: activeSection === 'about' }">关于</button>
          <button @click="scrollToSection('contact')" :class="{ active: activeSection === 'contact' }">联系</button>
        </nav>
      </div>
    </header>

    <section id="hero" class="hero">
      <div class="hero-bg"></div>
      <div class="hero-content">
        <div class="hero-overline" :class="{ visible: isLoaded }">创新驱动 · 技术领先</div>
        <h1 class="hero-title">
          <span class="hero-title-line" :class="{ visible: isLoaded }">探索数字边界</span>
          <span class="hero-title-line accent" :class="{ visible: isLoaded }">定义未来可能</span>
        </h1>
        <p class="hero-description" :class="{ visible: isLoaded }">
          灵境科技致力于为企业提供领先的数字化解决方案，以人工智能、云计算、大数据为核心技术，助力企业在数字时代赢得竞争优势。
        </p>
        <div class="hero-actions" :class="{ visible: isLoaded }">
          <button class="btn-primary" @click="scrollToSection('services')">探索服务</button>
          <button class="btn-secondary" @click="scrollToSection('contact')">联系我们</button>
        </div>
      </div>
      <div class="hero-decoration" :style="{ transform: `translateY(${scrollY * 0.3}px)` }">
        <div class="deco-ring ring-1"></div>
        <div class="deco-ring ring-2"></div>
        <div class="deco-ring ring-3"></div>
      </div>
      <div class="scroll-indicator" :class="{ visible: isLoaded }">
        <span>向下滚动</span>
        <div class="scroll-line"></div>
      </div>
    </section>

    <section id="services" class="services">
      <div class="section-header">
        <span class="section-overline">我们的服务</span>
        <h2 class="section-title">以技术创造价值</h2>
        <p class="section-desc">四大核心业务板块，构建完整的数字化生态体系</p>
      </div>
      <div class="services-grid">
        <router-link 
          v-for="(service, index) in services" 
          :key="service.title" 
          :to="service.route"
          class="service-card" 
          :style="{ animationDelay: `${index * 100}ms` }">
          <div class="service-icon">{{ service.icon }}</div>
          <h3 class="service-title">{{ service.title }}</h3>
          <p class="service-desc">{{ service.description }}</p>
          <div class="service-line"></div>
        </router-link>
      </div>
    </section>

    <section id="about" class="about">
      <div class="about-content">
        <div class="about-text">
          <span class="section-overline">关于灵境</span>
          <h2 class="section-title">十五年深耕<br>专注技术创新</h2>
          <p class="about-desc">
            灵境科技成立于2010年，是国内领先的数字化解决方案提供商。公司汇聚了来自清华大学、北京大学等顶尖学府的技术精英，专注于人工智能、云计算等前沿领域的技术研发与应用落地。
          </p>
          <p class="about-desc">
            我们相信，科技的力量在于赋能每一个企业。十五年来，我们已帮助超过200家企业完成数字化转型，赢得了业界的广泛认可与信赖。
          </p>
          <div class="stats-row">
            <div v-for="stat in animatedStats" :key="stat.label" class="stat-item">
              <span class="stat-value">
                <span class="stat-number">{{ stat.display }}</span>
                <span class="stat-suffix">{{ stat.suffix }}</span>
              </span>
              <span class="stat-label">{{ stat.label }}</span>
            </div>
          </div>
        </div>
        <div class="about-visual">
          <div class="visual-block block-1" :class="{ visible: isLoaded }"></div>
          <div class="visual-block block-2" :class="{ visible: isLoaded }"></div>
          <div class="visual-block block-3" :class="{ visible: isLoaded }"></div>
        </div>
      </div>
    </section>

    <section id="contact" class="contact">
      <div class="contact-content">
        <div class="contact-info">
          <span class="section-overline">联系我们</span>
          <h2 class="section-title">开启数字化之旅</h2>
          <p class="contact-desc">无论您有任何问题或需求，我们的专业团队都将为您提供一对一的咨询服务。</p>
          <div class="contact-details">
            <div class="contact-item">
              <span class="contact-label">地址</span>
              <span class="contact-value">北京市海淀区中关村科技园区1号</span>
            </div>
            <div class="contact-item">
              <span class="contact-label">电话</span>
              <span class="contact-value">400-888-9999</span>
            </div>
            <div class="contact-item">
              <span class="contact-label">邮箱</span>
              <span class="contact-value">contact@lingjingtech.com</span>
            </div>
          </div>
        </div>
        <form class="contact-form" @submit.prevent="handleSubmit">
          <div class="form-row">
            <div class="form-group">
              <input type="text" id="name" v-model="formData.name" placeholder=" " required />
              <label for="name">您的姓名</label>
              <div class="form-line"></div>
            </div>
            <div class="form-group">
              <input type="email" id="email" v-model="formData.email" placeholder=" " required />
              <label for="email">电子邮箱</label>
              <div class="form-line"></div>
            </div>
          </div>
          <div class="form-group">
            <input type="text" id="company" v-model="formData.company" placeholder=" " />
            <label for="company">公司名称</label>
            <div class="form-line"></div>
          </div>
          <div class="form-group">
            <textarea id="message" v-model="formData.message" placeholder=" " required></textarea>
            <label for="message">请描述您的需求...</label>
            <div class="form-line"></div>
          </div>
          <button type="submit" class="btn-primary form-submit" :class="{ loading: isSubmitting, success: isSuccess }">
            <span v-if="!isSubmitting && !isSuccess">发送咨询</span>
            <span v-else-if="isSubmitting" class="loading-text">发送中<span class="dot">.</span><span class="dot">.</span><span class="dot">.</span></span>
            <span v-else class="success-text">✓ 发送成功</span>
          </button>
        </form>
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
  --ease-out-quint: cubic-bezier(0.22, 1, 0.36, 1);
  --transition-fast: 0.2s ease;
  --transition-base: 0.3s ease;
  --transition-slow: 0.5s ease;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: var(--font-body);
  background: var(--color-bg);
  color: var(--color-text);
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
}

.home {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.8s var(--ease-out-quart), transform 0.8s var(--ease-out-quart);
}

.home.loaded {
  opacity: 1;
  transform: translateY(0);
}

.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  padding: var(--space-lg) var(--space-3xl);
  background: rgba(250, 249, 247, 0.9);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid transparent;
  transition: border-color var(--transition-base), padding var(--transition-base);
}

.header:hover {
  border-color: var(--color-border);
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
  line-height: 1;
}

.logo-text {
  font-family: var(--font-display);
  font-size: 22px;
  font-weight: 600;
  letter-spacing: 0.02em;
}

.nav {
  display: flex;
  gap: var(--space-xl);
  align-items: center;
}

.nav a,
.nav button {
  background: none;
  border: none;
  font-family: var(--font-body);
  font-size: 14px;
  font-weight: 500;
  color: var(--color-text-secondary);
  cursor: pointer;
  padding: var(--space-sm) 0;
  position: relative;
  transition: color var(--transition-fast);
  text-decoration: none;
}

.nav a::after,
.nav button::after {
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
.nav a.router-link-exact-active,
.nav button:hover,
.nav button.active {
  color: var(--color-text);
}

.nav a:hover::after,
.nav a.router-link-exact-active::after,
.nav button:hover::after,
.nav button.active::after {
  width: 100%;
}

.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--space-4xl) var(--space-3xl);
  position: relative;
  overflow: hidden;
}

.hero-bg {
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse at 70% 30%, rgba(201, 169, 98, 0.08) 0%, transparent 50%),
              radial-gradient(ellipse at 30% 70%, rgba(201, 169, 98, 0.05) 0%, transparent 40%);
}

.hero-content {
  max-width: 900px;
  text-align: center;
  position: relative;
  z-index: 2;
}

.hero-overline {
  font-family: var(--font-body);
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--color-accent);
  margin-bottom: var(--space-lg);
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s var(--ease-out-quart), transform 0.6s var(--ease-out-quart);
  transition-delay: 0.2s;
}

.hero-overline.visible {
  opacity: 1;
  transform: translateY(0);
}

.hero-title {
  font-family: var(--font-display);
  font-size: clamp(48px, 8vw, 80px);
  font-weight: 500;
  line-height: 1.1;
  letter-spacing: -0.02em;
  margin-bottom: var(--space-xl);
}

.hero-title-line {
  display: block;
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 0.8s var(--ease-out-quart), transform 0.8s var(--ease-out-quart);
}

.hero-title-line:nth-child(1) {
  transition-delay: 0.3s;
}

.hero-title-line:nth-child(2) {
  transition-delay: 0.5s;
}

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
  max-width: 600px;
  margin: 0 auto var(--space-2xl);
  line-height: 1.8;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s var(--ease-out-quart), transform 0.6s var(--ease-out-quart);
  transition-delay: 0.7s;
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
  transition: opacity 0.6s var(--ease-out-quart), transform 0.6s var(--ease-out-quart);
  transition-delay: 0.9s;
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
  cursor: pointer;
  transition: all var(--transition-base);
  position: relative;
  overflow: hidden;
}

.btn-primary::before {
  content: '';
  position: absolute;
  inset: 0;
  background: var(--color-accent-dark);
  transform: translateX(-100%);
  transition: transform 0.4s var(--ease-out-quart);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(26, 26, 26, 0.15);
}

.btn-primary:hover::before {
  transform: translateX(0);
}

.btn-primary span {
  position: relative;
  z-index: 1;
}

.btn-secondary {
  background: transparent;
  color: var(--color-text);
  border: 1px solid var(--color-border);
  padding: var(--space-md) var(--space-xl);
  font-family: var(--font-body);
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all var(--transition-base);
}

.btn-secondary:hover {
  border-color: var(--color-text);
  background: var(--color-text);
  color: var(--color-bg);
}

.hero-decoration {
  position: absolute;
  inset: 0;
  pointer-events: none;
  will-change: transform;
}

.deco-ring {
  position: absolute;
  border: 1px solid rgba(201, 169, 98, 0.15);
  border-radius: 50%;
}

.ring-1 {
  width: 600px;
  height: 600px;
  right: -200px;
  top: 50%;
  transform: translateY(-50%);
}

.ring-2 {
  width: 400px;
  height: 400px;
  right: -100px;
  top: 50%;
  transform: translateY(-50%);
}

.ring-3 {
  width: 200px;
  height: 200px;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

.scroll-indicator {
  position: absolute;
  bottom: var(--space-2xl);
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-sm);
  opacity: 0;
  transition: opacity 0.6s var(--ease-out-quart);
  transition-delay: 1.2s;
}

.scroll-indicator.visible {
  opacity: 1;
}

.scroll-indicator span {
  font-size: 11px;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--color-text-tertiary);
}

.scroll-line {
  width: 1px;
  height: 40px;
  background: linear-gradient(to bottom, var(--color-accent), transparent);
  animation: scrollPulse 2s ease-in-out infinite;
}

@keyframes scrollPulse {
  0%, 100% { opacity: 0.3; transform: scaleY(0.6); }
  50% { opacity: 1; transform: scaleY(1); }
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
  letter-spacing: -0.01em;
  margin-bottom: var(--space-md);
}

.section-desc {
  font-size: 16px;
  color: var(--color-text-secondary);
}

.services {
  padding: var(--space-4xl) var(--space-3xl);
  background: var(--color-surface);
}

.services-grid {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--space-xl);
}

.service-card {
  padding: var(--space-2xl);
  background: var(--color-bg);
  position: relative;
  transition: transform var(--transition-base), box-shadow var(--transition-base);
  opacity: 0;
  transform: translateY(30px);
  text-decoration: none;
  color: inherit;
  display: block;
}

.service-card.in-view {
  animation: fadeInUp 0.6s var(--ease-out-quart) forwards;
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.service-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.06);
}

.service-icon {
  font-size: 32px;
  color: var(--color-accent);
  margin-bottom: var(--space-lg);
  line-height: 1;
  transition: transform var(--transition-base);
}

.service-card:hover .service-icon {
  transform: scale(1.1);
}

.service-title {
  font-family: var(--font-display);
  font-size: 24px;
  font-weight: 600;
  margin-bottom: var(--space-md);
}

.service-desc {
  font-size: 15px;
  color: var(--color-text-secondary);
  line-height: 1.7;
}

.service-line {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--color-accent);
  transition: width var(--transition-slow);
}

.service-card:hover .service-line {
  width: 100%;
}

.about {
  padding: var(--space-4xl) var(--space-3xl);
  background: var(--color-bg);
}

.about-content {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-4xl);
  align-items: center;
}

.about-text .section-overline {
  text-align: left;
}

.about-text .section-title {
  text-align: left;
  margin-bottom: var(--space-xl);
}

.about-desc {
  font-size: 16px;
  color: var(--color-text-secondary);
  line-height: 1.8;
  margin-bottom: var(--space-lg);
}

.stats-row {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-lg);
  margin-top: var(--space-2xl);
  padding-top: var(--space-2xl);
  border-top: 1px solid var(--color-border);
}

.stat-item {
  text-align: center;
  opacity: 0;
  transform: translateY(20px);
}

.stat-item.in-view {
  animation: fadeInUp 0.6s var(--ease-out-quart) forwards;
}

.stat-value {
  font-family: var(--font-display);
  font-size: 36px;
  font-weight: 600;
  color: var(--color-accent);
  display: block;
}

.stat-suffix {
  font-size: 24px;
}

.stat-label {
  font-size: 13px;
  color: var(--color-text-tertiary);
  margin-top: var(--space-xs);
  display: block;
}

.about-visual {
  position: relative;
  height: 500px;
}

.visual-block {
  position: absolute;
  background: linear-gradient(135deg, var(--color-accent) 0%, var(--color-accent-dark) 100%);
  opacity: 0;
  transform: translateX(30px);
  transition: opacity 0.8s var(--ease-out-quart), transform 0.8s var(--ease-out-quart);
}

.visual-block.visible {
  opacity: 0.9;
  transform: translateX(0);
}

.block-1 {
  width: 280px;
  height: 380px;
  top: 0;
  right: 0;
  transition-delay: 0.2s;
}

.block-2 {
  width: 200px;
  height: 280px;
  top: 80px;
  left: 60px;
  background: var(--color-dark);
  transition-delay: 0.4s;
}

.block-3 {
  width: 160px;
  height: 200px;
  bottom: 0;
  right: 120px;
  background: var(--color-bg);
  border: 1px solid var(--color-border);
  transition-delay: 0.6s;
}

.contact {
  padding: var(--space-4xl) var(--space-3xl);
  background: var(--color-dark);
  color: var(--color-bg);
}

.contact-content {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-4xl);
}

.contact .section-overline {
  color: var(--color-accent);
}

.contact .section-title {
  color: var(--color-bg);
}

.contact-desc {
  font-size: 16px;
  color: rgba(250, 249, 247, 0.7);
  line-height: 1.7;
  margin-bottom: var(--space-2xl);
}

.contact-details {
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);
}

.contact-item {
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
}

.contact-label {
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-accent);
}

.contact-value {
  font-size: 16px;
  color: var(--color-bg);
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
}

.form-group {
  position: relative;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: var(--space-md);
  padding-top: var(--space-lg);
  background: rgba(250, 249, 247, 0.05);
  border: none;
  border-bottom: 1px solid rgba(250, 249, 247, 0.15);
  color: var(--color-bg);
  font-family: var(--font-body);
  font-size: 15px;
  transition: border-color var(--transition-fast);
  resize: none;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--color-accent);
}

.form-group label {
  position: absolute;
  left: var(--space-md);
  top: var(--space-lg);
  font-size: 15px;
  color: rgba(250, 249, 247, 0.4);
  pointer-events: none;
  transition: all var(--transition-fast);
}

.form-group input:focus + label,
.form-group input:not(:placeholder-shown) + label,
.form-group textarea:focus + label,
.form-group textarea:not(:placeholder-shown) + label {
  top: 0;
  font-size: 11px;
  color: var(--color-accent);
}

.form-group .form-line {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--color-accent);
  transition: width var(--transition-base);
}

.form-group input:focus ~ .form-line,
.form-group textarea:focus ~ .form-line {
  width: 100%;
}

.form-textarea {
  min-height: 120px;
}

.form-submit {
  align-self: flex-start;
  background: var(--color-accent);
  min-width: 140px;
}

.form-submit::before {
  background: var(--color-accent-dark);
}

.form-submit.loading {
  pointer-events: none;
}

.form-submit.success {
  background: #4a9d6e;
}

.loading-text .dot {
  animation: dotPulse 1.4s infinite ease-in-out;
}

.loading-text .dot:nth-child(2) { animation-delay: 0.2s; }
.loading-text .dot:nth-child(3) { animation-delay: 0.4s; }

@keyframes dotPulse {
  0%, 80%, 100% { opacity: 0; }
  40% { opacity: 1; }
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
  font-family: var(--font-body);
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-bottom: var(--space-lg);
  color: var(--color-text);
}

.footer-column a {
  display: block;
  font-size: 14px;
  color: var(--color-text-secondary);
  text-decoration: none;
  margin-bottom: var(--space-sm);
  transition: color var(--transition-fast);
  position: relative;
}

.footer-column a::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 1px;
  background: var(--color-accent);
  transition: width var(--transition-base);
}

.footer-column a:hover {
  color: var(--color-accent);
}

.footer-column a:hover::after {
  width: 100%;
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
  .about-content,
  .contact-content,
  .footer-content {
    grid-template-columns: 1fr;
  }

  .about-visual {
    height: 300px;
  }

  .stats-row {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .header {
    padding: var(--space-md) var(--space-lg);
  }

  .nav {
    gap: var(--space-lg);
  }

  .hero {
    padding: var(--space-3xl) var(--space-lg);
  }

  .hero-actions {
    flex-direction: column;
  }

  .services,
  .about,
  .contact {
    padding: var(--space-3xl) var(--space-lg);
  }

  .form-row {
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