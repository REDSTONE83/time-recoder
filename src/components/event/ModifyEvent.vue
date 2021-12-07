<script>
import { modifyEvent, removeEvent } from "../../modules/event";
import EditEvent from "./EditEvent.vue";
export default {
  extends: EditEvent,
  data: () => ({
    sheetTitle: "Modify Event",

    id: "",
  }),
  created() {
    this.sheetBtns.push({
      label: "DELETE",
      color: "normal",
      event: this.deleteEvent,
    });
    this.sheetBtns.push({
      label: "UPDATE",
      color: "primary",
      event: this.saveEvent,
    });
  },
  methods: {
    saveEvent() {
      if (this.$refs.form.validate()) {
        modifyEvent({
          id: this.id,
          summary: this.summary,
          beginDate: this.beginDate,
          beginTime: this.beginTime,
          endDate: this.endDate,
          endTime: this.endTime,
          category: this.category,
        });
        this.emitClose();
      }
    },
    deleteEvent() {
      if (this.id) {
        removeEvent(this.id);
        this.emitClose();
      }
    },
    setEvent(event) {
      if (!event.id) return false;

      this.$refs.form.resetValidation();

      this.id = event.id;
      this.summary = event.summary;
      this.category = event.category;
      this.beginDate = event.beginDate;
      this.beginTime = event.beginTime;
      this.endDate = event.endDate;
      this.endTime = event.endTime;

      return true;
    },
  },
};
</script>
