<template>
  <v-sheet class="text-center pa-4">
    <v-row>
      <v-col class="d-flex justify-start">
        <span class="text-h6">{{ sheetTitle }}</span>
      </v-col>
      <v-col cols="auto">
        <v-btn fab x-small text @click="emitClose">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-col>
    </v-row>

    <v-form ref="form" class="mt-2" v-model="valid" lazy-validation>
      <v-row>
        <v-col>
          <v-text-field
            v-model="title"
            :counter="10"
            :rules="titleRules"
            validate-on-blur
            label="Title"
            required
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <v-select
            v-model="icon"
            :items="iconList"
            item-text="text"
            item-value="value"
            :rules="iconRules"
            validate-on-blur
            label="Icon"
            required
            autofocus
          >
            <template v-slot:item="{ item }">
              <v-icon v-text="item.value"></v-icon>
              <span class="ml-2">{{ item.text }}</span>
            </template>
          </v-select>
        </v-col>
        <v-col cols="auto" class="d-flex align-center">
          <v-avatar :color="color" size="38">
            <v-icon v-text="icon" dark></v-icon>
          </v-avatar>
        </v-col>
      </v-row>

      <v-row>
        <v-col class="d-flex justify-center">
          <v-color-picker v-model="color" hide-canvas hide-inputs hide-sliders show-swatches></v-color-picker>
        </v-col>
      </v-row>
    </v-form>

    <v-row class="mt-2" v-if="sheetBtns.length > 0">
      <v-col v-for="(btn, index) in sheetBtns" :key="index">
        <v-btn block :color="btn.color" @click="btn.event"> {{ btn.label }} </v-btn>
      </v-col>
    </v-row>
  </v-sheet>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    titleRules: [(v) => !!v || "Category title is required"],
    iconRules: [(v) => !!v || "Category icon is required"],

    iconList: [
      { value: "mdi-food-fork-drink", text: "Food" },
      { value: "mdi-bed", text: "Bed" },
      { value: "mdi-cart", text: "Cart" },
      { value: "mdi-baby-bottle", text: "Baby Bottle" },
      { value: "mdi-book-open-page-variant", text: "Book" },
      { value: "mdi-domain", text: "Company" },
      { value: "mdi-dumbbell", text: "Dumbbell" },
      { value: "mdi-account-multiple", text: "Meeting" },
      { value: "mdi-music", text: "Music" },
      { value: "mdi-train-car", text: "Transports" },
      { value: "mdi-airplane", text: "Airplane" },
      { value: "mdi-bicycle", text: "Bicycle" },
    ],

    title: "",
    icon: "",
    color: "#1976d2",

    sheetTitle: "Title",
    sheetBtns: [],
  }),
  methods: {
    emitClose() {
      this.$emit("close");
    },
    saveEvent() {
      this.emitClose();
    },
  },
};
</script>
