<template>
  <v-container fill-height>
    <v-row align="center" justify="center">
      <div class="d-flex align-center mr-2">
        <v-img
            alt="Module Logo"
            class="shrink mr-2"
            contain
            src="../assets/module.png"
            transition="scale-transition"
            width="40" />
        <h2>Module</h2>
      </div>
      <div class="pa-4 my-mt">
        <h4>
          Multifunctional bot with moderation, information and utilities commands.
        </h4>
      </div>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'Home',
    metaInfo: {
      title: 'Home',
    }
  }
</script>

<style>
  .my-mt {
    margin-top: 2px;
  }
</style>
