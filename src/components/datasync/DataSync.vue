<template>
  <v-card class="pa-4" min-width="300">
    <v-row>
      <v-col>
        <span class="text-h6">Data Sync</span>
      </v-col>
      <v-col cols="auto">
        <v-btn
          fab
          x-small
          text
          @click="
            () => {
              $emit('close');
            }
          "
        >
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-col>
    </v-row>

    <v-row>
      <v-col class="py-0">
        <v-text-field v-model="serverUrl" validate-on-blur label="Sync server URL" required></v-text-field>
      </v-col>
    </v-row>

    <v-row>
      <v-col class="py-0">
        <v-text-field v-model="id" validate-on-blur label="ID" required></v-text-field>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-btn block text @click="getData">LOAD</v-btn>
      </v-col>
      <v-col>
        <v-btn block color="primary" @click="postData">SAVE</v-btn>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import Axios from "axios";
import { fetchEvents, storeEvents } from "../../stores/eventStore";
import { fetchCategories, storeCategories } from "../../stores/categoryStore";
import { reloadEvents } from "../../modules/event";
import { reloadCategories } from "../../modules/category";

export default {
  data: () => ({
    serverUrl: "",
    id: "",
  }),
  methods: {
    getData() {
      Axios.get(`api/data/${this.id}`, {
        baseURL: this.serverUrl,
      })
        .then((res) => {
          const { data } = res;
          const { events, categories } = data;
          if (events && categories) {
            storeCategories(categories);
            storeEvents(events);
            reloadCategories();
            reloadEvents();
          } else {
            alert("REQUEST LOAD DATA IS FINISHED BUT WRONG FORMAT");
          }
        })
        .catch((err) => {
          alert("REQUEST LOAD DATA IS FAILED");
        });
    },
    postData() {
      const data = {
        events: fetchEvents(),
        categories: fetchCategories(),
      };

      Axios.post(`api/data/${this.id}`, data, {
        baseURL: this.serverUrl,
      }).catch((err) => {
        alert("REQUEST SAVE DATA IS FAILED");
      });
    },
  },
};
</script>
