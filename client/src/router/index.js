import { createRouter, createWebHistory } from 'vue-router'
import CalculatorPackageView from '../views/CalculatorPackage.vue'
import ConfirmQuoteView from '../views/ConfirmQuote.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: CalculatorPackageView
  },
  {
    path: '/confirm/quote',
    name: 'confirmQuote',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: CalculatorPackageView
    component: ConfirmQuoteView,
    // component: () => import(/* webpackChunkName: "ConfirmQuoteView" */ '../views/ConfirmQuote.vue'),
    props: true
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
