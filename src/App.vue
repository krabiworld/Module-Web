<template>
  <v-app :style="{background: $vuetify.theme.themes[getTheme].background}">
    <v-app-bar
      app
      elevation="0"
      color="rgba(0, 0, 0, 0)"
      class="mt-2"
    >
      <div
        v-if="!showAlert"
        class="d-flex align-center mr-2 module-btn"
        @click="showAlert = true"
      >
        <v-img
          alt="Module Logo"
          class="shrink mr-2 module-btn-img"
          contain
          src="./assets/module.png"
          transition="scale-transition"
          width="40"
        />
        <h3>Module</h3>
      </div>
      <v-alert
        v-model="showAlert"
        dismissible
        dense
        color="rgba(0, 0, 0, 0)"
        class="mt-3"
        transition="slide-x-reverse-transition"
      >
        <v-btn
          color="primary"
          text
          small
          :href="githubLink"
          target="_blank"
          @click="showAlert = false"
        >
          Please give me a star
        </v-btn>
      </v-alert>
      <v-spacer />
      <v-btn
        icon
        color="primary"
        class="mr-1"
        @click="changeTheme()"
      >
        <v-icon v-if="$vuetify.theme.dark">
          mdi-weather-sunny
        </v-icon>
        <v-icon v-else>
          mdi-weather-night
        </v-icon>
      </v-btn>
      <v-btn
        icon
        class="mr-1"
      >
        <v-avatar
          color="warning"
          size="48px"
        >
          HC
        </v-avatar>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>

    <v-bottom-navigation
      v-model="bottom_navigation"
      color="primary"
      :style="{background: $vuetify.theme.themes[getTheme].background}"
    >
      <v-btn to="/">
        Home
      </v-btn>
      <v-btn to="/commands">
        Commands
      </v-btn>
    </v-bottom-navigation>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    bottom_navigation: 0,
    showAlert: false,
    githubLink: 'https://github.com/HeadcrabJ/Module/'
  }),
  computed: {
    getTheme: function () {
      return this.$vuetify.theme.dark ? 'dark' : 'light'
    }
  },
  methods: {
    changeTheme: function () {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
    }
  }
}
</script>

<style>
.module-btn, .module-btn-img {
  transition: all 0.2s ease-out;
}
.module-btn:hover {
  padding-left: 8px;
  color: #fff;
  cursor: pointer;
}
.module-btn:hover .module-btn-img {
  z-index: -1;
  transform: scale(600%);
  filter: grayscale(100%);
  cursor: pointer;
}
</style>
