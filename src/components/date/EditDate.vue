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
          <v-textarea v-model="summary" :counter="500" label="Summary"></v-textarea>
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
import { saveDate } from "../../modules/date";

export default {
  data: () => ({
    valid: true,

    date: "",
    summary: "",

    sheetTitle: "Title",
    sheetBtns: [],
  }),
  created() {
    this.sheetBtns.push({
      label: "SAVE",
      color: "primary",
      event: this.saveEvent,
    });
  },
  methods: {
    setTargetDate({ date, dateString, summary }) {
      this.date = date;
      this.summary = summary;
      this.sheetTitle = dateString;
    },
    emitClose() {
      this.$emit("close");
    },
    saveEvent() {
      saveDate({ date: this.date, summary: this.summary });
      this.emitClose();
    },
  },
};
</script>
