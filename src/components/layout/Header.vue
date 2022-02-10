<template>
  <div>
    <v-app-bar
      app
      rounded
      absolute
      color="transparent"
    >
      <v-app-bar-nav-icon
        v-if="isMobile"
        class="ml-0"
        @click="drawer = true"
      />
      <v-btn
        to="/"
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
      <v-spacer />
      <div v-if="!isMobile">
        <v-btn
          text
          class="mr-1"
          to="/commands"
        >
          {{ $t('header.commands') }}
        </v-btn>
        <v-btn
          text
          class="mr-1"
          to="/stats"
        >
          {{ $t('header.stats') }}
        </v-btn>
        <v-divider vertical />
        <v-menu>
          <template v-slot:activator="{ on }">
            <v-btn
              icon
              v-on="on"
            >
              <v-icon>translate</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item @click="changeLocale('ru')">
              <v-list-item-title>Русский</v-list-item-title>
            </v-list-item>
            <v-list-item @click="changeLocale('en')">
              <v-list-item-title>English</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
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
            <v-list-item-title>{{ $t('header.commands') }}</v-list-item-title>
          </v-list-item>

          <v-list-item to="/stats">
            <v-list-item-icon>
              <v-icon>analytics</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{ $t('header.stats') }}</v-list-item-title>
          </v-list-item>

          <v-list-item
            :href="guildUrl"
            target="_blank"
          >
            <v-list-item-icon>
              <v-icon>mdi-discord</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{ $t('header.community') }}</v-list-item-title>
          </v-list-item>

          <v-divider class="mb-1" />

          <v-list-group value="true">
            <template v-slot:activator>
              <v-list-item-title>{{ $t('header.lang') }}</v-list-item-title>
            </template>

            <v-list-item @click="changeLocale('ru')">
              <v-list-item-title>Русский</v-list-item-title>
            </v-list-item>
            <v-list-item
              class="mb-1"
              @click="changeLocale('en')"
            >
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
            <v-list-item-title>{{ $t('header.offDarkTheme') }}</v-list-item-title>
          </v-list-item>
          <v-list-item
            v-else
            @click="changeTheme"
          >
            <v-list-item-icon>
              <v-icon>dark_mode</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{ $t('header.onDarkTheme') }}</v-list-item-title>
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
    const locale = localStorage.getItem('locale')
    if (theme) this.$vuetify.theme.dark = theme === 'true'
    if (locale) this.$i18n.locale = locale
  },
  methods: {
    checkDrawer (isMobile) {
      if (!isMobile) {
        if (this.drawer === true) this.drawer = false
      }
    },
    changeTheme () {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
      localStorage.setItem('isDarkTheme', this.$vuetify.theme.dark.toString())
    },
    changeLocale (locale) {
      if (locale === 'ru' || locale === 'en') {
        this.$i18n.locale = locale
        localStorage.setItem('locale', this.$i18n.locale)
      }
    }
  }
}
</script>
