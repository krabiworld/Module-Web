<template>
  <div>
    <v-app-bar
      app
      dense
      elevation="0"
      color="rgba(0, 0, 0, 0)"
      class="mt-2"
    >
      <v-app-bar-nav-icon
        v-if="isMobile"
        class="ml-0"
        @click="drawer = true"
      />
      <v-btn
        class="d-flex align-center"
        to="/"
        plain
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
      <v-spacer />
      <div v-if="!isMobile">
        <v-btn
          icon
          color="primary"
          class="mr-1"
          :href="guildUrl"
          target="_blank"
        >
          <v-icon>mdi-discord</v-icon>
        </v-btn>
        <v-btn
          icon
          color="primary"
          class="mr-1"
          @click="changeTheme()"
        >
          <v-icon v-if="$vuetify.theme.dark">
            mdi-white-balance-sunny
          </v-icon>
          <v-icon v-else>
            mdi-weather-night
          </v-icon>
        </v-btn>
        <v-btn
          plain
          class="mr-1"
          to="/commands"
        >
          Commands
        </v-btn>
        <v-btn
          plain
          class="mr-1"
          to="/stats"
        >
          Stats
        </v-btn>
      </div>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group>
          <v-list-item to="/commands">
            <v-list-item-icon>
              <v-icon>terminal</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Commands</v-list-item-title>
          </v-list-item>

          <v-list-item to="/stats">
            <v-list-item-icon>
              <v-icon>analytics</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Stats</v-list-item-title>
          </v-list-item>

          <v-list-item to="/">
            <v-list-item-icon>
              <v-icon>mdi-discord</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Community</v-list-item-title>
          </v-list-item>

          <v-divider class="mb-1" />

          <v-list-group value="true">
            <template v-slot:activator>
              <v-list-item-title>Language</v-list-item-title>
            </template>

            <v-list-item>
              <v-list-item-title>Russian</v-list-item-title>
            </v-list-item>
            <v-list-item class="mb-1">
              <v-list-item-title>English</v-list-item-title>
            </v-list-item>
          </v-list-group>

          <v-divider class="mb-1" />

          <v-list-item
            v-if="$vuetify.theme.dark"
            value="false"
            @click="changeTheme"
          >
            <v-list-item-icon>
              <v-icon>light_mode</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Turn off dark theme</v-list-item-title>
          </v-list-item>
          <v-list-item
            v-else
            @click="changeTheme"
          >
            <v-list-item-icon>
              <v-icon>dark_mode</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Turn on dark theme</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import config from '../../../config.json'

export default {
  name: 'Header',
  data: () => ({
    drawer: false,
    language: false,
    guildUrl: config.guildUrl
  }),
  computed: {
    isMobile () {
      let isMobile = this.$vuetify.breakpoint.xs
      this.checkDrawer(isMobile)
      return isMobile
    }
  },
  mounted () {
    const theme = localStorage.getItem('isDarkTheme')
    if (theme) {
      this.$vuetify.theme.dark = theme === 'true'
    }
  },
  methods: {
    checkDrawer (isMobile) {
      if (!isMobile) {
        if (this.drawer === true) this.drawer = !this.drawer
      }
    },
    changeTheme () {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
      localStorage.setItem('isDarkTheme', this.$vuetify.theme.dark.toString())
    }
  }
}
</script>
