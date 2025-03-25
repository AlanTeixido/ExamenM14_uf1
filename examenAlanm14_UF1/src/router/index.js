import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { 
    path: '/', 
    name: 'home', 
    component: () => import('../views/HomeView.vue') 
  },
  { 
    path: '/beques', 
    name: 'beques', 
    component: () => import('../views/BequesView.vue') 
  },
  {
    path: '/beques/:any',
    name: 'centres',
    component: () => import('../views/CentresView.vue'),
    props: true
  },
  { 
    path: '/beques/:any/:centre', 
    name: 'detall-centre', 
    component: () => import('../views/DetallCentre.vue'),
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
