<template>
  <v-app-bar app color="primary" dark>
    <v-toolbar-title>Time Recorder</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-menu left bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon v-bind="attrs" v-on="on">
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </template>

      <v-list>
        <v-list-item
          @click="
            () => {
              $emit('open-data-sync');
            }
          "
        >
          <v-list-item-title>Data Sync</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    <template v-slot:extension>
      <slot />
    </template>
  </v-app-bar>
</template>

<script>
export default {
  methods: {
    emitClickNav() {
      this.$emit("click-nav");
    },
  },
};
</script>
