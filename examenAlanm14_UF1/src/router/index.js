import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', name: 'home', component: () => import('../views/Home.vue') },
  { path: '/pagina1', name: 'pagina1', component: () => import('../views/Pagina1.vue') },
  { path: '/pagina2/:id', name: 'pagina2', component: () => import('../views/Pagina2.vue') },
  { path: '/pagina3', name: 'pagina3', component: () => import('../views/Pagina3.vue') }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
