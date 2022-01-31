import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import vueMeta from 'vue-meta'

Vue.config.productionTip = false
Vue.use(vueMeta)

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
