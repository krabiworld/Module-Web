<template>
  <v-app :style="{background: $vuetify.theme.themes[getTheme].background}">
    <Header />

    <v-main>
      <router-view />
    </v-main>

    <Footer />
  </v-app>
</template>

<script>
import Header from './components/layout/Header.vue'
import Footer from './components/layout/Footer.vue'

export default {
  name: 'App',
  components: {
    Footer,
    Header
  },
  computed: {
    getTheme () {
      return this.$vuetify.theme.dark ? 'dark' : 'light'
    }
  }
}
</script>

<style>
::-webkit-scrollbar {
  width: 0;
}
* {
  -ms-overflow-style: none;
}
</style>
