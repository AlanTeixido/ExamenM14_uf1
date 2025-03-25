import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { 
    path: '/', 
    name: 'home', 
    component: () => import('../views/HomeView.vue') 
  },
  { 
    path: '/pagina1', 
    name: 'pagina1', 
    component: () => import('../views/PaginaUn.vue') 
  },
  {
    path: '/pagina2/:id',
    name: 'pagina2',
    component: () => import('../views/PaginaDigues.vue'),
    props: true
  },
  { 
    path: '/pagina3', 
    name: 'pagina3', 
    component: () => import('../views/PaginaTres.vue') 

  },
  {
    path: '/estacio/:station',
    name: 'estacio',
    component: () => import('../views/StationView.vue'),
    props: (route) => ({ stationName: route.params.station })
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
