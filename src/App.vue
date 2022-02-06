<template>
  <v-app :style="{background: $vuetify.theme.themes[getTheme].background}">
    <Header />

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import Header from '@/components/layout/Header'

export default {
  name: 'App',
  components: {
    Header
  },
  data: () => ({
    githubLink: 'https://github.com/HeadcrabJ/Module/'
  }),
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
  scrollbar-width: none;
}
</style>
