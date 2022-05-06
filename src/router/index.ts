import { createRouter, createWebHistory } from 'vue-router'
import QuoteView from '../views/QuoteView.vue'
import HomeView from '../views/HomeView.vue'
import InvoiceView from '../views/InvoiceView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'homeview',
      component: HomeView
    },
    {
      path: '/quote',
      name: 'quote',
      component: QuoteView
    },
    {
      path: '/invoice',
      name: 'invoice',
      component: InvoiceView
    }
  ]
})

export default router
