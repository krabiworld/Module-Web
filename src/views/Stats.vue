<template>
  <v-container fill-height>
    <v-row justify="center">
      <StatsCard
        :count="guilds"
        text="Guilds"
      />
      <StatsCard
        :count="users"
        text="Users"
      />
      <StatsCard
        :count="channels"
        text="Channels"
      />
      <StatsCard
        :count="commandsExecuted"
        text="Commands executed"
      />
      <StatsCard
        :count="shards"
        text="Shards"
      />
    </v-row>
  </v-container>
</template>

<script>
import axios from 'axios'
import StatsCard from '@/components/StatsCard'
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
    commandsExecuted: 0,
    shards: 0
  }),
  mounted () {
    this.setStats()
  },
  methods: {
    setStats () {
      axios.get(new URL('/stats', config.apiUrl).href).then(({ data }) => {
        this.guilds = data.guilds
        this.users = data.users
        this.channels = data.channels
        this.commandsExecuted = data.commandsExecuted
        this.shards = data.shards
      })
    }
  }
}
</script>
