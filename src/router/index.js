import { createRouter, createWebHashHistory } from 'vue-router'
import TheCatalog from '../views/TheCatalog'
// import TheCart from '../views/TheCart'

const routes = [
  {
    path: '/',
    name: 'TheCatalog',
    component: TheCatalog
  },
  {
    path: '/cart',
    name: 'TheCart',
    props: true,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/TheCart')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
