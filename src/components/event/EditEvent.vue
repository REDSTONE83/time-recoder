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
            v-model="summary"
            :counter="20"
            :rules="summaryRules"
            validate-on-blur
            label="Summary"
            required
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <v-dialog
            v-model="beginDateMenu"
            :close-on-content-click="false"
            :nudge-right="40"
            transition="scale-transition"
            offset-y
            min-width="auto"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="beginDate"
                label="Begin Date"
                append-icon="mdi-calendar"
                readonly
                v-bind="attrs"
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker v-model="beginDate" @input="beginDateMenu = false"></v-date-picker>
          </v-dialog>
        </v-col>
        <v-col>
          <v-dialog
            ref="beginTimeMenu"
            v-model="beginTimeMenu"
            :close-on-content-click="false"
            :nudge-right="40"
            :return-value.sync="beginTime"
            transition="scale-transition"
            offset-y
            max-width="290px"
            min-width="290px"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="beginTime"
                label="Begin Time"
                append-icon="mdi-clock-time-four-outline"
                readonly
                v-bind="attrs"
                v-on="on"
              ></v-text-field>
            </template>
            <v-time-picker
              v-if="beginTimeMenu"
              v-model="beginTime"
              full-width
              @click:minute="$refs.beginTimeMenu.save(beginTime)"
            ></v-time-picker>
          </v-dialog>
        </v-col>
      </v-row>

      <v-row>
        <v-col class="py-0">
          <span class="text-subtitle-1 font-weight-black">{{ duration }}</span>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <v-dialog
            v-model="endDateMenu"
            :close-on-content-click="false"
            :nudge-right="40"
            transition="scale-transition"
            offset-y
            min-width="auto"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="endDate"
                label="End Date"
                append-icon="mdi-calendar"
                readonly
                v-bind="attrs"
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker v-model="endDate" @input="endDateMenu = false"></v-date-picker>
          </v-dialog>
        </v-col>
        <v-col>
          <v-dialog
            ref="endTimeMenu"
            v-model="endTimeMenu"
            :close-on-content-click="false"
            :nudge-right="40"
            :return-value.sync="endTime"
            transition="scale-transition"
            offset-y
            max-width="290px"
            min-width="290px"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="endTime"
                label="End Time"
                append-icon="mdi-clock-time-four-outline"
                readonly
                v-bind="attrs"
                v-on="on"
              ></v-text-field>
            </template>
            <v-time-picker
              v-if="endTimeMenu"
              v-model="endTime"
              full-width
              @click:minute="$refs.endTimeMenu.save(endTime)"
            ></v-time-picker>
          </v-dialog>
        </v-col>
      </v-row>

      <!-- <v-row>
        <v-col>
          <v-text-field
            v-model="category"
            :counter="20"
            label="Category"
            required
          ></v-text-field>
        </v-col>
      </v-row> -->
    </v-form>

    <v-row class="mt-2" v-if="sheetBtns.length > 0">
      <v-col v-for="(btn, index) in sheetBtns" :key="index">
        <v-btn block :color="btn.color" @click="btn.event"> {{ btn.label }} </v-btn>
      </v-col>
    </v-row>
  </v-sheet>
</template>

<script>
import { getDurationString } from "../../modules/event";
export default {
  data: () => ({
    valid: true,
    summaryRules: [(v) => !!v || "Event summary is required"],

    summary: "",
    beginDate: "",
    beginTime: "",
    endDate: "",
    endTime: "",
    category: "",

    beginDateMenu: false,
    beginTimeMenu: false,
    endDateMenu: false,
    endTimeMenu: false,

    sheetTitle: "Title",
    sheetBtns: [],
  }),
  computed: {
    duration() {
      return getDurationString(this);
    },
  },
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
