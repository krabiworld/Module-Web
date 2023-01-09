<template>
  <v-footer
    color="transparent"
    padless
    class="mt-6"
    rounded
  >
    <v-card
      width="100%"
      color="transparent"
      class="text-center"
    >
      <v-card-text>
        <v-btn
          to="/"
          class="mr-2"
          plain
          large
        >
          <v-img
            alt="Module Logo"
            class="shrink mr-2"
            contain
            src="../../assets/module.png"
            transition="scale-transition"
            width="40"
          />
          Module
        </v-btn>

        <v-btn
          icon
          color="primary"
          class="mr-4"
          :href="guildUrl"
          target="_blank"
        >
          <v-icon icon="mdi-discord"></v-icon>
        </v-btn>
        <v-btn
          icon
          color="primary"
          @click="changeTheme()"
        >
          <v-icon v-if="$vuetify.theme.current.dark" icon="mdi-white-balance-sunny"></v-icon>
          <v-icon v-else icon="mdi-weather-night"></v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text>
        {{ new Date().getFullYear() }} — <strong>Module</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
import config from '../../../config.json'

export default {
  name: 'Footer',
  data: () => ({
    guildUrl: config.guildUrl
  }),
  methods: {
    changeTheme () {
      this.$vuetify.theme.dark = !this.$vuetify.theme.current.dark
      localStorage.setItem('isDarkTheme', this.$vuetify.theme.current.dark.toString())
    }
  }
}
</script>
