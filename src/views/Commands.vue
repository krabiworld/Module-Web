<template>
  <v-container>
    <v-row justify="center">
      <div class="ma-6">
        <h2>
          All commands of Module
        </h2>
        <v-responsive width="100%" />
        <h3 class="text-center">
          {{ commands }} commands
        </h3>
      </div>
      <v-responsive width="100%" />
      <v-expansion-panels
        class="float-right ma-2"
        style="max-width: 800px"
      >
        <v-expansion-panel
          v-for="category in categories"
          :key="category.name"
          :style="{background: changeTheme()}"
        >
          <v-expansion-panel-header>
            {{ category.name }}
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <div
              v-for="command in category.commands"
              :key="command.name"
            >
              <p>
                <v-chip small>
                  {{ command.name }}
                </v-chip>
                <span v-if="!isMobile">
                  - {{ command.help }}
                </span>
                <v-dialog
                  v-model="command.dialog"
                  max-width="500"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      plain
                      icon
                      small
                      class="float-right"
                      v-bind="attrs"
                      v-on="on"
                    >
                      <v-icon>mdi-information</v-icon>
                    </v-btn>
                  </template>
                  <v-card :color="changeTheme()">
                    <v-card-title>Command {{ command.name }}</v-card-title>
                    <v-card-text>
                      <div class="mb-1">
                        <h3 class="text--primary">
                          Description:
                        </h3>
                        {{ command.help }}
                      </div>
                      <div>
                        <h3 class="text--primary mb-1">
                          Usage:
                        </h3>
                        <v-chip small>
                          {{ command.name }} {{ command.arguments }}
                        </v-chip>
                      </div>
                    </v-card-text>
                    <v-divider />
                    <v-card-actions>
                      <v-spacer />
                      <v-btn
                        plain
                        @click="command.dialog = false"
                      >
                        Close
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </p>
            </div>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-row>
  </v-container>
</template>

<script>
import axios from 'axios'
import config from '../../config.json'

export default {
  name: 'Commands',
  metaInfo: {
    title: 'Commands'
  },
  data: () => ({
    commands: 0,
    categories: null
  }),
  computed: {
    isMobile () {
      return this.$vuetify.breakpoint.xs
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      axios.get(new URL('/commands', config.apiUrl).href).then(({ data }) => {
        this.commands = data.commands
        this.categories = data.categories
      })
    },
    changeTheme () {
      if (this.$vuetify.theme.dark) {
        return this.$vuetify.theme.themes.dark.secondaryBackground
      }
      return this.$vuetify.theme.themes.light.secondaryBackground
    }
  }
}
</script>
