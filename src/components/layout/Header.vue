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
              v-on:click="on"
            >
              <v-icon icon="mdi-translate"></v-icon>
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
        <v-list-item to="/commands">
          <template v-slot:prepend>
            <v-icon icon="mdi-terminal"></v-icon>
          </template>
          <v-list-item-title>{{ $t('header.commands') }}</v-list-item-title>
        </v-list-item>

        <v-list-item to="/stats">
          <template v-slot:prepend>
            <v-icon icon="mdi-analytics"></v-icon>
          </template>
          <v-list-item-title>{{ $t('header.stats') }}</v-list-item-title>
        </v-list-item>

        <v-list-item
          :href="guildUrl"
          target="_blank"
        >
          <template v-slot:prepend>
            <v-icon icon="mdi-discord"></v-icon>
          </template>
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
          v-if="$vuetify.theme.current.dark"
          value="false"
          @click="changeTheme"
        >
          <template v-slot:prepend>
            <v-icon icon="mdi-light-mode"></v-icon>
          </template>
          <v-list-item-title>{{ $t('header.offDarkTheme') }}</v-list-item-title>
        </v-list-item>
        <v-list-item
          v-else
          @click="changeTheme"
        >
          <template v-slot:prepend>
            <v-icon icon="mdi-dark-mode"></v-icon>
          </template>
          <v-list-item-title>{{ $t('header.onDarkTheme') }}</v-list-item-title>
        </v-list-item>
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
      let isMobile = this.$vuetify.display.xs
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
      this.$vuetify.theme.dark = !this.$vuetify.theme.current.dark
      localStorage.setItem('isDarkTheme', this.$vuetify.theme.current.dark.toString())
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
