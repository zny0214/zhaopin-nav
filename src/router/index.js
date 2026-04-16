import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Products from '../views/Products.vue'
import Cases from '../views/Cases.vue'
import AISolution from '../views/services/AISolution.vue'
import CloudPlatform from '../views/services/CloudPlatform.vue'
import DataAnalytics from '../views/services/DataAnalytics.vue'
import DigitalConsulting from '../views/services/DigitalConsulting.vue'
import Help from '../views/Help.vue'
import Terms from '../views/Terms.vue'
import Privacy from '../views/Privacy.vue'
import Contact from '../views/Contact.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/products',
      name: 'products',
      component: Products
    },
    {
      path: '/cases',
      name: 'cases',
      component: Cases
    },
    {
      path: '/services/ai-solution',
      name: 'ai-solution',
      component: AISolution
    },
    {
      path: '/services/cloud-platform',
      name: 'cloud-platform',
      component: CloudPlatform
    },
    {
      path: '/services/data-analytics',
      name: 'data-analytics',
      component: DataAnalytics
    },
    {
      path: '/services/digital-consulting',
      name: 'digital-consulting',
      component: DigitalConsulting
    },
    {
      path: '/help',
      name: 'help',
      component: Help
    },
    {
      path: '/terms',
      name: 'terms',
      component: Terms
    },
    {
      path: '/privacy',
      name: 'privacy',
      component: Privacy
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

export default router