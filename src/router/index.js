import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import CourseDetail from '../views/CourseDetail.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    // 动态路由，:id 是一个参数
    path: '/course/:id',
    name: 'CourseDetail',
    component: CourseDetail,
    props: true // 将路由参数作为 props 传递给组件
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  // 切换路由时滚动到页面顶部
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
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