<template>
  <v-app>
    <AppBar @click-nav="drawer = true" @open-data-sync="dataSync = true">
      <v-tabs v-model="tab" grow center-active centered>
        <v-tab>Event</v-tab>
        <v-tab>Category</v-tab>
      </v-tabs>
    </AppBar>

    <v-main>
      <v-tabs-items v-model="tab">
        <v-tab-item eager>
          <Event />
        </v-tab-item>
        <v-tab-item eager>
          <Category />
        </v-tab-item>
      </v-tabs-items>
    </v-main>

    <v-overlay v-model="dataSync" :dark="false">
      <DataSync @close="dataSync = false" />
    </v-overlay>
  </v-app>
</template>

<script>
import AppBar from "./components/frames/AppBar.vue";
import Event from "./views/Event.vue";
import Category from "./views/Category.vue";
import DataSync from "./components/datasync/DataSync.vue";
export default {
  name: "App",
  data: () => ({
    drawer: false,
    tab: null,

    dataSync: false,
  }),
  components: { AppBar, Event, Category, DataSync },
};
</script>

<style>
body {
  font-size: 16px;
}
</style>
