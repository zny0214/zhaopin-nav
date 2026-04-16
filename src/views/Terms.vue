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
  <div class="terms-page" :class="{ loaded: isLoaded }">
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
          <span class="hero-title-line" :class="{ visible: isLoaded }">服务条款</span>
        </h1>
        <p class="hero-description" :class="{ visible: isLoaded }">
          最后更新日期：2024年1月1日
        </p>
      </div>
    </section>

    <section class="content-section">
      <div class="content-wrapper">
        <div class="content-block">
          <h2>一、服务说明</h2>
          <p>灵境科技股份有限公司（以下简称"灵境科技"）通过其网站、移动应用及相关服务，为企业用户提供数字化解决方案、人工智能平台、云计算服务及相关的技术支持服务（以下简称"本服务"）。</p>
          <p>用户在使用本服务前，应仔细阅读本服务条款。用户通过任何方式使用本服务，即表示用户已阅读、理解并同意接受本服务条款的约束。</p>
        </div>

        <div class="content-block">
          <h2>二、账户注册与管理</h2>
          <p>用户需要注册账户才能使用部分服务。用户应提供真实、准确、完整的注册信息，并及时更新。用户应妥善保管账户信息，对账户下的一切活动负责。因用户保管不善造成的损失，由用户自行承担。</p>
          <p>灵境科技有权根据实际情况决定是否接受用户的注册申请，并有权在发现用户存在违规行为时，暂停或终止用户的账户。</p>
        </div>

        <div class="content-block">
          <h2>三、服务使用规范</h2>
          <p>用户在使用本服务时，应遵守中华人民共和国相关法律法规，不得利用本服务从事任何违法活动，包括但不限于：</p>
          <ul>
            <li>反对中华人民共和国宪法所确定的基本原则的</li>
            <li>危害国家安全，泄露国家秘密，颠覆国家政权，破坏国家统一的</li>
            <li>损害国家荣誉和利益的</li>
            <li>煽动民族仇恨、民族歧视，破坏民族团结的</li>
            <li>破坏国家宗教政策，宣扬邪教和封建迷信的</li>
            <li>散布谣言，扰乱社会秩序，破坏社会稳定的</li>
            <li>散布淫秽、色情、赌博、暴力、凶杀、恐怖或者教唆犯罪的</li>
            <li>侮辱或者诽谤他人，侵害他人合法权益的</li>
            <li>含有法律、行政法规禁止的其他内容的</li>
          </ul>
        </div>

        <div class="content-block">
          <h2>四、知识产权</h2>
          <p>灵境科技对本服务中包含的软件、技术、程序、代码、界面设计、版面框架、排版方式、文字说明等享有知识产权。未经灵境科技书面授权，用户不得对上述内容进行复制、修改、传播、反向工程等操作。</p>
          <p>用户在使用本服务过程中产生的任何内容，其知识产权归用户所有，但用户授权灵境科技使用该内容用于提供服务。</p>
        </div>

        <div class="content-block">
          <h2>五、数据安全与隐私</h2>
          <p>灵境科技承诺按照隐私政策保护用户的个人信息安全。具体隐私保护措施请参阅《隐私政策》。用户在使用本服务时，应遵守隐私政策的相关规定。</p>
        </div>

        <div class="content-block">
          <h2>六、服务变更与终止</h2>
          <p>灵境科技有权根据业务发展情况，随时变更、中断或终止部分或全部服务，无需对用户或第三方承担责任。服务变更时，灵境科技将通过网站公告或书面通知的方式告知用户。</p>
          <p>如用户违反本服务条款的任何约定，灵境科技有权立即终止向用户提供服务，并追究用户的法律责任。</p>
        </div>

        <div class="content-block">
          <h2>七、免责声明</h2>
          <p>本服务按"现状"提供，灵境科技不对本服务的稳定性、可靠性、准确性作出任何明示或暗示的保证。用户使用本服务产生的风险由用户自行承担。</p>
          <p>因不可抗力导致的服务中断或数据丢失，灵境科技不承担责任。不可抗力包括但不限于：自然灾害、政府行为、电信主干网络故障、黑客攻击等。</p>
        </div>

        <div class="content-block">
          <h2>八、争议解决</h2>
          <p>本服务条款的订立、执行和解释均适用中华人民共和国法律。如双方发生争议，应首先通过友好协商解决；协商不成的，任何一方均可向北京市海淀区人民法院提起诉讼。</p>
        </div>

        <div class="content-block">
          <h2>九、条款修改</h2>
          <p>灵境科技有权随时修改本服务条款，修改后的条款一经公布即生效。如果用户不同意修改后的条款，有权停止使用本服务。用户继续使用本服务，即表示接受修改后的条款。</p>
        </div>

        <div class="content-block">
          <h2>十、联系我们</h2>
          <p>如您对本服务条款有任何疑问，请通过以下方式联系我们：</p>
          <ul>
            <li>电话：400-888-9999</li>
            <li>邮箱：legal@lingjingtech.com</li>
            <li>地址：北京市海淀区中关村科技园区1号</li>
          </ul>
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

.terms-page {
  opacity: 0;
  transition: opacity 0.6s ease;
}

.terms-page.loaded {
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