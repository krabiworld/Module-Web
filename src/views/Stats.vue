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
import axios from 'axios'
import StatsCard from '../components/StatsCard.vue'
import config from '../../config.json'

export default {
  name: 'Stats',
  components: {
    StatsCard
  },
  data: () => ({
    guilds: 0,
    users: 0,
    channels: 0,
    executedCommands: 0,
    shards: 0
  }),
  mounted () {
    document.title = 'Statistics - Module';

    this.setStats()
  },
  methods: {
    setStats () {
      axios.get(new URL('/stats', config.apiUrl).href).then(({ data }) => {
        this.guilds = data.guilds
        this.users = data.users
        this.channels = data.channels
        this.executedCommands = data.executedCommands
        this.shards = data.shards
      })
    }
  }
}
</script>
