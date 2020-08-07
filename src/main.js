import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import { store } from './store/store'
import VueResource from 'vue-resource'

Vue.use(VueResource)

Vue.filter('shortenTitle', function (title) {
  const maximumNameLength = 25
  if (title.length > maximumNameLength) {
    return title.slice(0, 20) + '...'
  } else {
    return title
  }
})

Vue.filter('shortenYear', function (year) {
  return '(' + year.slice(0, 4) + ')'
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
