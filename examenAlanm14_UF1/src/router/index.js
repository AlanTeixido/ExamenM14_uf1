import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', name: 'home', component: () => import('../views/HomeView.vue') },
  { path: '/pagina1', name: 'pagina1', component: () => import('../views/PaginaUn.vue') },
  { path: '/pagina2/:id', name: 'pagina2', component: () => import('../views/PaginaDigues.vue') },
  { path: '/pagina3', name: 'pagina3', component: () => import('../views/PaginaTres.vue') }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
