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
    props: (router) => ({ any: router.params.any })
  },
  {
    path: '/beques/:any/:tipus_de_centre',
    name: 'detall-centre',
    component: () => import('../views/DetallCentre.vue'),
    props: (router) => ({ any: router.params.any, tipus_de_centre: router.params.tipus_de_centre })
  }  
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
