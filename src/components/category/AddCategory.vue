<script>
import { addCategory } from "../../modules/category";
import EditCategory from "./EditCategory.vue";
export default {
  extends: EditCategory,
  data: () => ({
    sheetTitle: "Add Category",
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
        addCategory({
          title: this.title,
          icon: this.icon,
          color: this.color,
        });
        this.emitClose();
      }
    },
    initialize() {
      this.$refs.form.resetValidation();

      this.title = "";
      this.icon = "";
      this.color = "#1976d2";
    },
  },
};
</script>
