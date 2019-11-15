import Home from '../views/home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/todo',
    name: 'Todo',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "todos" */ '../views/todos.vue')
  },
  {
    path: '/m7',
    name: 'M7',
    component: () => import(/* webpackChunkName: "method7" */ '../views/method7.vue')
  },
  {
    path: '/cssGrid',
    name: 'CSS Grid',
    component: () => import(/* webpackChunkName: "cssGrid" */ '../views/cssGrid.vue')
  },
  {
    path: '/usefullinks',
    name: 'Useful links',
    component: () => import(/* webpackChunkName: "usefullinks" */ '../views/usefullinks.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/about.vue')
  }
]

export default routes
