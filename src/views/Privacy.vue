<script setup>
import { ref, onMounted } from 'vue'

const isLoaded = ref(false)

onMounted(() => {
  setTimeout(() => {
    isLoaded.value = true
  }, 100)
})
</script>

<template>
  <div class="privacy-page" :class="{ loaded: isLoaded }">
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
        <span class="hero-overline" :class="{ visible: isLoaded }">法律声明</span>
        <h1 class="hero-title">
          <span class="hero-title-line" :class="{ visible: isLoaded }">隐私政策</span>
        </h1>
        <p class="hero-description" :class="{ visible: isLoaded }">
          最后更新日期：2024年1月1日
        </p>
      </div>
    </section>

    <section class="content-section">
      <div class="content-wrapper">
        <div class="content-block">
          <h2>引言</h2>
          <p>灵境科技股份有限公司（以下简称"灵境科技"或"我们"）非常重视用户的隐私和个人信息安全。本隐私政策旨在向您说明我们如何收集、使用、存储、保护您的个人信息，以及您享有的相关权利。</p>
          <p>请您在使用我们的服务前，仔细阅读并了解本隐私政策。如您不同意本隐私政策的任何内容，请停止使用我们的服务。您使用我们的服务，即表示您同意我们按照本隐私政策收集、使用、存储和保护您的个人信息。</p>
        </div>

        <div class="content-block">
          <h2>一、信息收集</h2>
          <p>为向您提供优质服务，我们会在您使用服务过程中收集以下信息：</p>
          <h3>1. 您主动提供的信息</h3>
          <ul>
            <li>账户注册信息：包括姓名、公司名称、邮箱地址、电话号码等</li>
            <li>联系表单信息：当您填写咨询表单时提供的联系信息</li>
            <li>服务需求信息：您描述的业务需求、技术要求等</li>
          </ul>
          <h3>2. 服务过程中自动收集的信息</h3>
          <ul>
            <li>设备信息：设备型号、操作系统版本、屏幕分辨率等</li>
            <li>日志信息：访问时间、浏览页面、功能使用情况等</li>
            <li>Cookie信息：用于记住您的偏好设置</li>
          </ul>
        </div>

        <div class="content-block">
          <h2>二、信息使用</h2>
          <p>我们收集的个人信息将用于以下目的：</p>
          <ul>
            <li>提供、维护和改进我们的服务</li>
            <li>响应您的咨询和请求</li>
            <li>发送服务通知、技术更新和安全提醒</li>
            <li>分析服务使用情况，优化用户体验</li>
            <li>发送产品推荐和营销信息（需您同意）</li>
            <li>满足法律法规要求和保护用户权益</li>
          </ul>
        </div>

        <div class="content-block">
          <h2>三、信息共享</h2>
          <p>未经您同意，我们不会与任何第三方共享您的个人信息，但以下情况除外：</p>
          <ul>
            <li>获得您的明确同意</li>
            <li>根据法律法规要求或政府主管部门的强制性要求</li>
            <li>为保护我们的合法权益所必需</li>
            <li>与服务提供商共享：为我们提供数据分析、云存储、技术支持的合作伙伴，我们会要求其遵守保密义务</li>
          </ul>
        </div>

        <div class="content-block">
          <h2>四、信息存储</h2>
          <p>您的个人信息将存储在中华人民共和国境内的服务器上。我们会在法律允许的范围内，根据提供服务所必需的时间保存您的个人信息。当您的账户注销或您要求删除个人信息时，我们将在合理时间内删除或匿名化处理您的数据。</p>
        </div>

        <div class="content-block">
          <h2>五、信息安全</h2>
          <p>我们采用业界领先的安全技术保护您的个人信息安全，包括：</p>
          <ul>
            <li>数据加密：敏感数据在传输和存储过程中采用加密处理</li>
            <li>访问控制：严格限制员工访问用户数据的权限</li>
            <li>安全审计：定期进行安全审计和漏洞扫描</li>
            <li>应急响应：建立完善的安全事件应急响应机制</li>
          </ul>
          <p>但请您理解，由于技术的局限性，我们无法保证百分之百的安全。如果您发现任何安全漏洞或可疑活动，请立即联系我们。</p>
        </div>

        <div class="content-block">
          <h2>六、您的权利</h2>
          <p>您对您的个人信息享有以下权利：</p>
          <ul>
            <li><strong>访问权：</strong>您有权访问我们持有的您的个人信息</li>
            <li><strong>更正权：</strong>您有权要求更正不准确的个人信息</li>
            <li><strong>删除权：</strong>您有权要求删除您的个人信息</li>
            <li><strong>撤回同意：</strong>您有权撤回您之前给予的同意</li>
            <li><strong>投诉权：</strong>您有权向相关监管机构投诉</li>
          </ul>
          <p>如需行使上述权利，请通过本政策末尾的联系方式联系我们，我们将在15个工作日内予以回复。</p>
        </div>

        <div class="content-block">
          <h2>七、未成年人保护</h2>
          <p>我们的服务主要面向企业用户，不面向未满18周岁的未成年人。我们不会故意收集未成年人的个人信息。如果您是未成年人，请在监护人的陪同下阅读本政策，并在监护人的指导下使用我们的服务。</p>
        </div>

        <div class="content-block">
          <h2>八、隐私政策更新</h2>
          <p>我们可能会不时更新本隐私政策。未经您的明确同意，我们不会削减您按照本隐私政策享有的权利。我们会将更新后的隐私政策在网站上公布，并注明更新的日期。</p>
          <p>如更新涉及重大变更，我们可能会通过网站公告或发送邮件的方式通知您。建议您定期查阅本隐私政策，了解最新的隐私保护措施。</p>
        </div>

        <div class="content-block">
          <h2>九、联系我们</h2>
          <p>如您对本隐私政策有任何疑问、意见或建议，或者需要行使您的权利，请通过以下方式联系我们：</p>
          <ul>
            <li>隐私保护专线：400-888-9999</li>
            <li>邮箱：privacy@lingjingtech.com</li>
            <li>地址：北京市海淀区中关村科技园区1号</li>
            <li>邮编：100085</li>
          </ul>
          <p>我们的隐私保护团队将在15个工作日内回复您的请求。</p>
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
  --color-border: #e8e6e3;
  --space-md: 16px;
  --space-lg: 24px;
  --space-xl: 32px;
  --space-2xl: 48px;
  --space-3xl: 64px;
  --space-4xl: 96px;
  --ease-out-quart: cubic-bezier(0.25, 1, 0.5, 1);
  --transition-base: 0.3s ease;
}

body {
  font-family: var(--font-body);
  background: var(--color-bg);
  color: var(--color-text);
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
}

.privacy-page {
  opacity: 0;
  transition: opacity 0.6s ease;
}

.privacy-page.loaded {
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
  transition: color var(--transition-base);
}

.nav a:hover,
.nav a.active {
  color: var(--color-text);
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
  background: radial-gradient(ellipse at 50% 0%, rgba(201, 169, 98, 0.08) 0%, transparent 60%);
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
  font-size: 14px;
  color: var(--color-text-tertiary);
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.6s var(--ease-out-quart);
  transition-delay: 0.4s;
}

.hero-description.visible {
  opacity: 1;
  transform: translateY(0);
}

.content-section {
  padding: 0 var(--space-3xl) var(--space-4xl);
}

.content-wrapper {
  max-width: 800px;
  margin: 0 auto;
}

.content-block {
  margin-bottom: var(--space-2xl);
}

.content-block h2 {
  font-family: var(--font-display);
  font-size: 22px;
  font-weight: 600;
  margin-bottom: var(--space-md);
  color: var(--color-text);
}

.content-block h3 {
  font-size: 16px;
  font-weight: 600;
  margin-top: var(--space-lg);
  margin-bottom: var(--space-md);
  color: var(--color-text);
}

.content-block p {
  font-size: 15px;
  color: var(--color-text-secondary);
  line-height: 1.8;
  margin-bottom: var(--space-md);
}

.content-block ul {
  list-style: none;
  padding-left: var(--space-lg);
}

.content-block ul li {
  font-size: 15px;
  color: var(--color-text-secondary);
  line-height: 1.8;
  margin-bottom: var(--space-sm);
  position: relative;
}

.content-block ul li::before {
  content: '•';
  position: absolute;
  left: calc(-1 * var(--space-lg));
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
  transition: color var(--transition-base);
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

  .content-section {
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