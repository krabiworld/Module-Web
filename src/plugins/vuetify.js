import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    dark: true,
    options: {
      themeCache: {
        get: key => localStorage.getItem(key),
        set: (key, value) => localStorage.setItem(key, value)
      }
    },
    themes: {
      dark: {
        background: '#1f2f40'
      },
      light: {
        background: '#fff'
      }
    }
  }
})
