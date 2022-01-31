<template>
  <v-app>
    <v-app-bar app elevation="0" color="rgba(0, 0, 0, 0)">
      <div class="d-flex align-center mr-2 drawer-btn" v-if="!showAlert" @click="showAlert = true">
        <v-img
          alt="Module Logo"
          class="shrink mr-2"
          contain
          src="./assets/module.png"
          transition="scale-transition"
          width="40" />
        <h3>Module</h3>
      </div>
      <v-alert
          v-model="showAlert"
          dismissible
          dense
          color="rgba(0, 0, 0, 0)"
          class="mt-3"
          transition="slide-x-reverse-transition">
        <v-btn
            color="primary"
            text
            small
            @click="openGitHub(); showAlert = false">
          Please give me a star
        </v-btn>
      </v-alert>
      <v-spacer></v-spacer>
      <v-btn icon to="/about" @:click="resetBottomNavigation()" class="mr-2">
        <v-icon>mdi-help</v-icon>
      </v-btn>
      <v-btn icon class="mr-1">
        <v-avatar color="warning lighten-2" size="48px">HC</v-avatar>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>

    <v-bottom-navigation
        v-model="bottom_navigation"
        color="primary"
    >
      <v-btn to="/">Home</v-btn>
      <v-btn to="/dashboard">Dashboard</v-btn>
    </v-bottom-navigation>
  </v-app>
</template>

<script>
  export default {
    name: 'App',
    data: () => ({
      bottom_navigation: 0,
      showAlert: false
    }),
    methods: {
      resetBottomNavigation: function () {
        this.bottom_navigation = 0
      },
      openGitHub: function () {
        window.open('https://github.com/HeadcrabJ/Module/', '_blank').focus()
      }
    }
  };
</script>

<style>
  .drawer-btn {
    transition: all 0.2s ease-out;
  }
  .drawer-btn:hover {
    padding-left: 8px;
    filter: grayscale(100%);
  }
</style>
