<script setup>
import { ref, onMounted } from 'vue'

const isLoaded = ref(false)
const formData = ref({
  type: 'consultation',
  name: '',
  email: '',
  phone: '',
  company: '',
  message: ''
})
const isSubmitting = ref(false)
const isSuccess = ref(false)

const consultationTypes = [
  { id: 'consultation', name: '产品咨询' },
  { id: 'technical', name: '技术支持' },
  { id: 'cooperation', name: '商务合作' },
  { id: 'other', name: '其他' }
]

onMounted(() => {
  setTimeout(() => {
    isLoaded.value = true
  }, 100)
})

const handleSubmit = () => {
  if (!formData.value.name || !formData.value.email || !formData.value.message) {
    return
  }
  isSubmitting.value = true
  setTimeout(() => {
    isSubmitting.value = false
    isSuccess.value = true
    formData.value = {
      type: 'consultation',
      name: '',
      email: '',
      phone: '',
      company: '',
      message: ''
    }
    setTimeout(() => {
      isSuccess.value = false
    }, 5000)
  }, 2000)
}
</script>

<template>
  <div class="contact-page" :class="{ loaded: isLoaded }">
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
          <router-link to="/contact" class="active">联系</router-link>
        </nav>
      </div>
    </header>

    <section class="hero">
      <div class="hero-bg"></div>
      <div class="hero-content">
        <span class="hero-overline" :class="{ visible: isLoaded }">联系我们</span>
        <h1 class="hero-title">
          <span class="hero-title-line" :class="{ visible: isLoaded }">开启数字化之旅</span>
        </h1>
        <p class="hero-description" :class="{ visible: isLoaded }">
          无论您有任何问题或需求，我们的专业团队都将为您提供一对一的咨询服务
        </p>
      </div>
    </section>

    <section class="contact-section">
      <div class="contact-container">
        <div class="contact-info">
          <div class="info-block">
            <h3>总部地址</h3>
            <p>北京市海淀区中关村科技园区1号</p>
            <p>灵境科技大厦</p>
          </div>
          <div class="info-block">
            <h3>联系电话</h3>
            <p class="highlight">400-888-9999</p>
            <p>7×24 小时客户服务中心</p>
          </div>
          <div class="info-block">
            <h3>商务合作</h3>
            <p>partner@lingjingtech.com</p>
          </div>
          <div class="info-block">
            <h3>媒体联络</h3>
            <p>media@lingjingtech.com</p>
          </div>
          <div class="info-block">
            <h3>HR邮箱</h3>
            <p>hr@lingjingtech.com</p>
          </div>
          <div class="social-links">
            <h3>关注我们</h3>
            <div class="social-icons">
              <span class="social-icon">𝕏</span>
              <span class="social-icon">in</span>
              <span class="social-icon">▶</span>
            </div>
          </div>
        </div>

        <div class="contact-form-wrapper">
          <h2>发送消息</h2>
          <form @submit.prevent="handleSubmit" class="contact-form">
            <div class="form-group form-group-full">
              <label for="type">咨询类型</label>
              <select id="type" v-model="formData.type">
                <option v-for="type in consultationTypes" :key="type.id" :value="type.id">
                  {{ type.name }}
                </option>
              </select>
            </div>
            <div class="form-row">
              <div class="form-group">
                <label for="name">姓名 <span class="required">*</span></label>
                <input type="text" id="name" v-model="formData.name" placeholder="请输入您的姓名" required />
              </div>
              <div class="form-group">
                <label for="email">邮箱 <span class="required">*</span></label>
                <input type="email" id="email" v-model="formData.email" placeholder="请输入您的邮箱" required />
              </div>
            </div>
            <div class="form-row">
              <div class="form-group">
                <label for="phone">电话</label>
                <input type="tel" id="phone" v-model="formData.phone" placeholder="请输入您的电话" />
              </div>
              <div class="form-group">
                <label for="company">公司</label>
                <input type="text" id="company" v-model="formData.company" placeholder="请输入您的公司名称" />
              </div>
            </div>
            <div class="form-group form-group-full">
              <label for="message">留言 <span class="required">*</span></label>
              <textarea id="message" v-model="formData.message" placeholder="请描述您的需求或问题..." required></textarea>
            </div>
            <button type="submit" class="submit-btn" :class="{ loading: isSubmitting, success: isSuccess }" :disabled="isSubmitting">
              <span v-if="!isSubmitting && !isSuccess">提交咨询</span>
              <span v-else-if="isSubmitting">提交中...</span>
              <span v-else>✓ 提交成功</span>
            </button>
          </form>
        </div>
      </div>
    </section>

    <section class="map-section">
      <div class="map-placeholder">
        <div class="map-content">
          <span class="map-icon">◈</span>
          <p>北京市海淀区中关村科技园区1号</p>
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

.contact-page {
  opacity: 0;
  transition: opacity 0.6s ease;
}

.contact-page.loaded {
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
  font-size: clamp(40px, 6vw, 56px);
  font-weight: 500;
  line-height: 1.15;
  margin-bottom: var(--space-lg);
}

.hero-title-line {
  display: block;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s var(--ease-out-quart);
  transition-delay: 0.2s;
}

.hero-title-line.visible {
  opacity: 1;
  transform: translateY(0);
}

.hero-description {
  font-size: 18px;
  color: var(--color-text-secondary);
  line-height: 1.7;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.6s var(--ease-out-quart);
  transition-delay: 0.4s;
}

.hero-description.visible {
  opacity: 1;
  transform: translateY(0);
}

.contact-section {
  padding: 120px var(--space-3xl) var(--space-4xl);
}

.contact-container {
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 320px 1fr;
  gap: 60px;
  align-items: start;
  width: 100%;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: var(--space-xl);
}

.info-block h3 {
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-accent);
  margin-bottom: var(--space-sm);
}

.info-block p {
  font-size: 15px;
  color: var(--color-text-secondary);
  line-height: 1.6;
}

.info-block p.highlight {
  font-size: 24px;
  font-family: var(--font-display);
  font-weight: 600;
  color: var(--color-text);
}

.social-links h3 {
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-accent);
  margin-bottom: var(--space-md);
}

.social-icons {
  display: flex;
  gap: var(--space-md);
}

.social-icon {
  width: 40px;
  height: 40px;
  background: var(--color-dark);
  color: var(--color-bg);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  cursor: pointer;
  transition: background var(--transition-base);
}

.social-icon:hover {
  background: var(--color-accent);
}

.contact-form-wrapper {
  background: var(--color-surface);
  padding: var(--space-2xl);
  border: 1px solid var(--color-border);
  width: 100%;
  overflow: hidden;
}

.contact-form-wrapper h2 {
  font-family: var(--font-display);
  font-size: 28px;
  font-weight: 600;
  margin-bottom: var(--space-xl);
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-lg);
  width: 100%;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
  min-width: 0;
}

.form-group-full {
  width: 100%;
  min-width: 0;
}

.form-group label {
  font-size: 13px;
  font-weight: 500;
  color: var(--color-text);
  word-wrap: break-word;
}

.form-group select {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23666666' d='M6 8L1 3h10z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 12px center;
  padding-right: 36px;
}

.form-group .required {
  color: #c97a62;
}

.form-group input,
.form-group select,
.form-group textarea {
  width: 100%;
  min-width: 0;
  max-width: 100%;
  padding: 12px var(--space-md);
  background: var(--color-bg);
  border: 1px solid var(--color-border);
  font-family: var(--font-body);
  font-size: 15px;
  color: var(--color-text);
  transition: border-color var(--transition-fast);
  box-sizing: border-box;
  -webkit-appearance: none;
  appearance: none;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--color-accent);
}

.form-group textarea {
  min-height: 120px;
  resize: vertical;
}

.submit-btn {
  padding: 14px 32px;
  background: var(--color-dark);
  color: var(--color-bg);
  border: none;
  font-family: var(--font-body);
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  transition: all var(--transition-base);
  align-self: flex-start;
}

.submit-btn:hover:not(:disabled) {
  background: var(--color-accent);
}

.submit-btn:disabled {
  cursor: not-allowed;
}

.submit-btn.success {
  background: #4a9d6e;
}

.map-section {
  padding: 0 var(--space-3xl) var(--space-4xl);
}

.map-placeholder {
  max-width: 1100px;
  margin: 0 auto;
  height: 300px;
  background: var(--color-dark);
  display: flex;
  align-items: center;
  justify-content: center;
}

.map-content {
  text-align: center;
}

.map-icon {
  font-size: 48px;
  color: var(--color-accent);
  display: block;
  margin-bottom: var(--space-md);
}

.map-content p {
  font-size: 16px;
  color: rgba(250, 249, 247, 0.7);
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
  .contact-container {
    grid-template-columns: 1fr;
    gap: var(--space-2xl);
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

  .contact-section {
    padding: 0 var(--space-lg) var(--space-3xl);
  }

  .form-row {
    grid-template-columns: 1fr;
  }

  .map-placeholder {
    height: 200px;
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