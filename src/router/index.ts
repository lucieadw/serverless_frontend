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
    path: '/shop/:category',
    name: 'Shop',
    component: () => import(/* webpackChunkName: "shop" */ '../views/Shop'),
    props: route => ({ category: route.params.category })
  },
  {
    path: '/basket',
    name: 'Basket',
    component: () => import(/* webpackChunkName: "basket" */ '../views/Basket')
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import(/* webpackChunkName: "profile" */ '../views/Profile')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: 'active',
  linkExactActiveClass: 'active',
  routes
})

export default router
