import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/MoviesGrid'
import SingleMovie from '../components/SingleMovie'
import GenrePicker from '../components/GenrePicker'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/single-movie',
    name: 'single-movie',
    component: SingleMovie
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
  routes
})

export default router
