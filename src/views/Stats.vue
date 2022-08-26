<template>
  <div style="height: 100%">
    <v-progress-linear
      v-if="!shards"
      indeterminate
    />
    <v-container
      v-else
      fill-height
    >
      <v-row justify="center">
        <StatsCard
          :count="guilds"
          :text="$t('stats.guilds')"
        />
        <StatsCard
          :count="users"
          :text="$t('stats.users')"
        />
        <StatsCard
          :count="channels"
          :text="$t('stats.channels')"
        />
        <StatsCard
          :count="executedCommands"
          :text="$t('stats.executedCommands')"
        />
        <StatsCard
          :count="shards"
          :text="$t('stats.shards')"
        />
      </v-row>
    </v-container>
  </div>
</template>

<script>
import fetch from 'node-fetch'
import StatsCard from '../components/StatsCard.vue'
import config from '../../config.json'

export default {
  name: 'Stats',
  components: {
    StatsCard
  },
  metaInfo: {
    title: 'Statistics'
  },
  data: () => ({
    guilds: 0,
    users: 0,
    channels: 0,
    executedCommands: 0,
    shards: 0
  }),
  mounted () {
    this.setStats()
  },
  methods: {
    async setStats() {
      const res = await fetch(new URL('/stats', config.apiUrl).href)
      const json = await res.json()

      this.guilds = json.guilds
      this.users = json.users
      this.channels = json.channels
      this.executedCommands = json.executedCommands
      this.shards = json.shards
    }
  }
}
</script>
