<template>
  <v-app>
    <AppBar @click-nav="drawer = true" />

    <v-navigation-drawer v-model="drawer" fixed temporary>
      <AppMenu />
    </v-navigation-drawer>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import AppBar from "./components/frames/AppBar.vue";
import AppMenu from "./components/frames/AppMenu.vue";
export default {
  name: "App",
  data: () => ({
    drawer: false,
  }),
  components: { AppBar, AppMenu },
};
</script>

<style>
body {
  font-size: 16px;
}
</style>
