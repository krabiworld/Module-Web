import { createVuetify } from "vuetify";

export default createVuetify({
  theme: {
    themes: {
      dark: {
        dark: true,
        colors: {
          background: "#1f2f40"
        }
      },
      light: {
        dark: false,
        colors: {
          background: "#fff"
        }
      }
    }
  }
})
