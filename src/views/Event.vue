<template>
  <v-container>
    <v-slide-x-transition group>
      <v-card-text class="py-0" v-for="date in dates" :key="date.date">
        <div class="text-subtitle-1">{{ date.date }}</div>
        <v-timeline align-top dense>
          <v-slide-x-transition group>
            <v-timeline-item color="primary" small v-for="event in date.events" :key="event.id">
              <v-row class="pt-1 flex-nowrap">
                <v-col cols="3">
                  <strong>{{ event.beginTime }}</strong>
                </v-col>
                <v-col>
                  <strong>{{ event.summary }}</strong>
                  <div class="text-caption">
                    {{ event | getDurationString }}
                  </div>
                </v-col>
                <v-col cols="auto">
                  <v-btn outlined x-small fab color="indigo" @click="openModifyEventSheet(event)">
                    <v-icon>mdi-pencil</v-icon>
                  </v-btn>
                </v-col>
              </v-row>
            </v-timeline-item>
          </v-slide-x-transition>
        </v-timeline>
      </v-card-text>
    </v-slide-x-transition>
    <span v-if="dates.length === 0">No Events.</span>
    <v-btn class="v-btn--action" fab dark color="indigo" @click="openAddEventSheet">
      <v-icon dark> mdi-plus </v-icon>
    </v-btn>
    <v-bottom-sheet v-model="addEvent" eager>
      <AddEvent ref="addEvent" @close="closeAddEventSheet" />
    </v-bottom-sheet>
    <v-bottom-sheet v-model="modifyEvent" eager>
      <ModifyEvent ref="modifyEvent" @close="closeModifyEventSheet" />
    </v-bottom-sheet>
  </v-container>
</template>

<script>
import AddEvent from "../components/event/AddEvent.vue";
import ModifyEvent from "../components/event/ModifyEvent.vue";
import { eventList, getDurationString } from "../modules/event";
export default {
  filters: {
    getDurationString,
  },
  data: () => ({
    eventList,
    addEvent: false,
    modifyEvent: false,
  }),
  computed: {
    sortedEventList() {
      return this.eventList.sort((a, b) => {
        if (`${a.beginDate} ${a.beginTime}` < `${b.beginDate} ${b.beginTime}`) return 1;
        else return -1;
      });
    },
    dates() {
      const dateEvents = [];

      let date;
      this.sortedEventList.forEach((event) => {
        date = dateEvents.find((item) => item.date === event.beginDate);
        if (!date) {
          date = { date: event.beginDate, events: [] };
          dateEvents.push(date);
        }
        date.events.push(event);
      });

      return dateEvents;
    },
  },
  methods: {
    openAddEventSheet() {
      this.$refs.addEvent.initialize(this.sortedEventList[0]);
      this.addEvent = true;
    },
    closeAddEventSheet() {
      this.addEvent = false;
    },
    openModifyEventSheet(event) {
      if (this.$refs.modifyEvent.setEvent(event)) {
        this.modifyEvent = true;
      } else {
        alert("ERROR!!");
      }
    },
    closeModifyEventSheet() {
      this.modifyEvent = false;
    },
  },
  components: { AddEvent, ModifyEvent },
};
</script>

<style>
.v-btn--action {
  position: fixed;
  bottom: 16px;
  left: 16px;
  z-index: 3;
}
</style>
