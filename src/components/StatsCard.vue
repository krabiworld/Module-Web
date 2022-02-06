<template>
  <v-card
    min-width="170"
    outlined
    class="ma-2"
    elevation="4"
    :color="changeTheme()"
  >
    <v-card-title>{{ count }}</v-card-title>
    <v-card-text>{{ text }}</v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'StatsCard',
  props: {
    count: {
      type: Number,
      default: 0
    },
    text: {
      type: String,
      default: 'Without name'
    }
  },
  methods: {
    changeTheme () {
      if (this.$vuetify.theme.dark) {
        return this.$vuetify.theme.themes.dark.secondaryBackground
      }
      return this.$vuetify.theme.themes.light.secondaryBackground
    }
  }
}
</script>
