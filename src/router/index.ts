import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About')
  },
  {
    path: '/shop',
    name: 'Shop',
    component: () => import(/* webpackChunkName: "shop" */ '../views/Shop')
  },
  {
    path: '/basket',
    name: 'Basket',
    component: () => import(/* webpackChunkName: "basket" */ '../views/Basket')
  }
  // {
  //   path: '/edibles',
  //   name: 'Edibles',
  //   component: () => import(/* webpackChunkName: "edibles" */ '../views/Edibles')
  // }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
