<template>
  <v-container fill-height>
    <v-row
      align="center"
      justify="center"
    >
      <v-col
        cols="8"
        md="3"
      >
        <v-text-field
          label="Prefix"
          :value="prefix"
          outlined
        />
      </v-col>
      <v-col
        cols="8"
        md="3"
      >
        <v-select
          label="Logs Channel"
          :items="channels"
          :value="channels[0]"
          outlined
        />
      </v-col>
      <v-col
        cols="8"
        md="3"
      >
        <v-select
          label="Moderation Role"
          :items="roles"
          :value="roles[0]"
          outlined
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Dashboard',
  metaInfo: {
    title: 'Dashboard'
  },
  data: () => ({
    prefix: '!',
    channels: [
      'Channel 1',
      'Channel 2'
    ],
    roles: [
      'Role 1',
      'Role 2'
    ]
  })
}
</script>
