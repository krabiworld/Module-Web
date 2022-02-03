<template>
  <v-container fill-height>
    <v-row
      justify="center"
    >
      <div>
        <h2>
          Module
        </h2>
      </div>
      <v-responsive width="100%" />
      <div class="pl-2 pr-2 mb-5 my-mt d-flex">
        <h3
          class="font-weight-light"
          :style="{textAlign: 'center'}"
        >
          Simple Discord bot with moderation written on Java and JDA.
        </h3>
      </div>
      <v-responsive width="100%" />
      <div>
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
          to="/about"
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

<style>
.my-mt {
  margin-top: 2px;
}
</style>
