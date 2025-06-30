import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import CourseDetail from '../views/CourseDetail.vue'
import About from '../views/About.vue'
import PrivacyPolicy from '../views/PrivacyPolicy.vue' // 新增
import TermsOfService from '../views/TermsOfService.vue' // 新增

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/course/:id',
    name: 'CourseDetail',
    component: CourseDetail,
    props: true
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  { // 新增路由
    path: '/privacy-policy',
    name: 'PrivacyPolicy',
    component: PrivacyPolicy,
  },
  { // 新增路由
    path: '/terms-of-service',
    name: 'TermsOfService',
    component: TermsOfService,
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  // 切换路由时滚动到页面顶部或指定锚点
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
        top: 80, // Offset for fixed header
      };
    }
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
})

export default router
