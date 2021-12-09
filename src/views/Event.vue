<template>
  <v-container class="v-container--board">
    <v-btn block outlined large color="primary" class="mb-4" @click="openAddEventSheet">Add New Event</v-btn>

    <v-slide-x-transition group>
      <v-card-text class="py-0 px-0 v-card--date" v-for="date in dates" :key="date.date">
        <v-card class="my-2">
          <v-card-title>
            {{ date.dateString }}
          </v-card-title>
          <v-card-subtitle v-if="date.summary">
            {{ date.summary }}
          </v-card-subtitle>
          <v-card-actions>
            <v-btn icon @click="showDetailDate = date.date">
              <v-icon>{{ showDetailDate === date.date ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
            </v-btn>

            <v-spacer></v-spacer>

            <v-btn color="primary lighten-1" text @click="openEditDateSheet(date)"> Edit Summary </v-btn>
          </v-card-actions>
        </v-card>
        <v-timeline align-top dense v-if="showDetailDate === date.date">
          <v-timeline-item
            :color="event.color"
            :icon="event.icon"
            fill-dot
            v-for="event in date.events"
            :key="event.id"
          >
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
        </v-timeline>
      </v-card-text>
    </v-slide-x-transition>

    <span v-if="dates.length === 0">No Events.</span>

    <v-bottom-sheet v-model="addEvent" eager>
      <AddEvent ref="addEvent" @close="closeAddEventSheet" />
    </v-bottom-sheet>
    <v-bottom-sheet v-model="modifyEvent" eager>
      <ModifyEvent ref="modifyEvent" @close="closeModifyEventSheet" />
    </v-bottom-sheet>
    <v-bottom-sheet v-model="editDate" eager>
      <EditDate ref="editDate" @close="closeEditDateSheet" />
    </v-bottom-sheet>
  </v-container>
</template>

<script>
import AddEvent from "../components/event/AddEvent.vue";
import ModifyEvent from "../components/event/ModifyEvent.vue";
import EditDate from "../components/date/EditDate.vue";
import { eventList, getDurationString } from "../modules/event";
import { getCategory } from "../modules/category";
import { dateList } from "../modules/date";

const getNowdate = () => {
  const nowDatetime = new Date(Date.now());
  const nowYear = String(nowDatetime.getFullYear());
  const nowMonth = String(nowDatetime.getMonth() + 1).padStart(2, "0");
  const nowDate = String(nowDatetime.getDate()).padStart(2, "0");

  return `${nowYear}-${nowMonth}-${nowDate}`;
};

export default {
  filters: {
    getDurationString,
  },
  data: () => ({
    dateList,
    eventList,
    showDetailDate: getNowdate(),
    addEvent: false,
    modifyEvent: false,
    editDate: false,
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
          const savedDate = this.dateList.find((item) => item.date === event.beginDate);
          date = {
            date: event.beginDate,
            dateString: this.getDateString(event.beginDate),
            summary: savedDate ? savedDate.summary : "",
            events: [],
          };
          dateEvents.push(date);
        }

        const { icon, color } = getCategory(event.category);

        date.events.push({
          ...event,
          icon,
          color,
        });
      });

      return dateEvents;
    },
  },
  methods: {
    getDateString(date) {
      const dateObject = new Date(`${date}T00:00:00`);
      return dateObject.toLocaleDateString("ko-KR", {
        weekday: "short",
        year: "numeric",
        month: "numeric",
        day: "numeric",
      });
    },
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

    openEditDateSheet(date) {
      if (date) {
        this.$refs.editDate.setTargetDate(date);
        this.editDate = true;
      }
    },
    closeEditDateSheet() {
      this.editDate = false;
    },
  },
  components: { AddEvent, ModifyEvent, EditDate },
};
</script>

<style>
.v-card--date .v-timeline-item__dot {
  z-index: initial;
}
.v-container--board {
  min-height: calc(100vh - 104px);
}
</style>
