import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/MoviesGrid'
import GenrePicker from '../components/GenrePicker'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/single-movie/:id',
    name: 'single-movie',
    component: () => import('../components/SingleMovie')
  },
  {
    path: '/genre-picker',
    name: 'genre-picker',
    component: GenrePicker
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})

export default router
