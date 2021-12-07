<script>
import { addEvent } from "../../modules/event";
import EditEvent from "./EditEvent.vue";
export default {
  extends: EditEvent,
  data: () => ({
    sheetTitle: "Add Event",
    saveBtnLabel: "ADD EVENT",
  }),
  created() {
    this.sheetBtns.push({
      label: "SAVE",
      color: "primary",
      event: this.saveEvent,
    });
  },
  methods: {
    saveEvent() {
      if (this.$refs.form.validate()) {
        addEvent({
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
    initialize(recentEvent) {
      this.$refs.form.resetValidation();

      this.summary = "";
      this.category = "";

      const nowDatetime = new Date(Date.now());
      const nowYear = String(nowDatetime.getFullYear());
      const nowMonth = String(nowDatetime.getMonth() + 1).padStart(2, "0");
      const nowDate = String(nowDatetime.getDate()).padStart(2, "0");
      const nowHours = String(nowDatetime.getHours()).padStart(2, "0");
      const nowMinutes = String(nowDatetime.getMinutes()).padStart(2, "0");

      this.endDate = `${nowYear}-${nowMonth}-${nowDate}`;
      this.endTime = `${nowHours}:${nowMinutes}`;

      if (recentEvent) {
        this.beginDate = recentEvent.endDate;
        this.beginTime = recentEvent.endTime;
      } else {
        const beginDatetime = new Date(nowDatetime.valueOf() - 1000 * 60 * 60);
        const beginYear = String(beginDatetime.getFullYear());
        const beginMonth = String(beginDatetime.getMonth() + 1).padStart(2, "0");
        const beginDate = String(beginDatetime.getDate()).padStart(2, "0");
        const beginHours = String(beginDatetime.getHours()).padStart(2, "0");
        const beginMinutes = String(beginDatetime.getMinutes()).padStart(2, "0");

        this.beginDate = `${beginYear}-${beginMonth}-${beginDate}`;
        this.beginTime = `${beginHours}:${beginMinutes}`;
      }
    },
  },
};
</script>
