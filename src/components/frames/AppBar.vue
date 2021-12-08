<template>
  <v-app-bar app color="primary" dark>
    <v-app-bar-nav-icon @click="emitClickNav"></v-app-bar-nav-icon>
    <v-toolbar-title>Time Recorder</v-toolbar-title>
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
