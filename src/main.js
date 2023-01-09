import { createApp } from "vue";
import App from './App.vue'
import router from './plugins/router'
import vuetify from './plugins/vuetify'
import i18n from './plugins/i18n'

// Vue.config.productionTip = false

const app = createApp(App)

app.use(router)
app.use(vuetify)
app.use(i18n)

app.mount("#app")

// new Vue({
//   router,
//   vuetify,
//   i18n,
//   render: h => h(App)
// }).$mount('#app')
