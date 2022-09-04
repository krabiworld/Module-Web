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
          {{ $t('home.description') }}
        </h3>
      </div>
      <v-responsive width="100%" />
      <div class="text-center">
        <v-btn
          elevation="2"
          color="orange"
          class="mr-2 white--text"
          target="popup"
          @click="openInvite"
        >
          {{ $t('home.addToServer') }}
        </v-btn>
        <v-btn
          elevation="2"
          color="primary"
        >
          {{ $t('home.learnMore') }}
        </v-btn>
      </div>
    </v-row>
  </v-container>
</template>

<script>
import config from '../../config.json'

export default {
  name: 'Home',
  /*metaInfo: {
    title: 'Home'
  },*/
  mounted() {
    document.title = 'Home - Module';
  },
  methods: {
    openInvite: function () {
      document.open(config.inviteUrl, 'popup', 'width=400, height=600')
    }
  }
}
</script>
