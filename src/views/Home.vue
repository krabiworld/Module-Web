<template>
  <v-container fill-height>
    <v-row justify="center">
      <div>
        <h2>
          Module
        </h2>
      </div>
      <v-responsive width="100%" />
      <div class="pl-2 pr-2 mb-5 mt-1">
        <h3 class="font-weight-light text-center">
          Multi-purpose Discord bot for your server!
        </h3>
      </div>
      <v-responsive width="100%" />
      <div class="text-center">
        <v-btn
          elevation="2"
          color="orange"
          class="mr-2"
          target="popup"
          @click="openInvite"
        >
          Add to server
        </v-btn>
        <v-btn
          elevation="2"
          color="primary"
        >
          Learn more
        </v-btn>
      </div>
    </v-row>
  </v-container>
</template>

<script>
import config from '../../config.json'

export default {
  name: 'Home',
  metaInfo: {
    title: 'Home'
  },
  methods: {
    openInvite: function () {
      document.open(config.inviteUrl, 'popup', 'width=400, height=600')
    }
  }
}
</script>
