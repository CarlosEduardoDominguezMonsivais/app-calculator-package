import { createRouter, createWebHistory } from 'vue-router'
import NoPageFound from '@/modules/shared/pages/NoPageFound'
 
const routes = [
  {
    path: '/',
    name: 'CalculatorPage',
    component: () => import(/* webpackChunkName: "CalculatorPage" */ '@/modules/quoter/pages/CalculatorPage')
  },
  {
    path: '/confirmation',
    name: 'confirmPage',
    component: () => import(/* webpackChunkName: "ConfirmationPage" */ '@/modules/quoter/pages/ConfirmPage'),
  },
  {
    path: '/:pathMatch(.*)*', 
    name: 'NoPageFound',
    component: NoPageFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
