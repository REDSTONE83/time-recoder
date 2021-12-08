<script>
import { modifyCategory, removeCategory } from "../../modules/category";
import EditCategory from "./EditCategory.vue";
export default {
  extends: EditCategory,
  data: () => ({
    sheetTitle: "Modify Category",

    id: "",
  }),
  created() {
    this.sheetBtns.push({
      label: "DELETE",
      color: "normal",
      event: this.deleteEvent,
    });
    this.sheetBtns.push({
      label: "SAVE",
      color: "primary",
      event: this.saveEvent,
    });
  },
  methods: {
    saveEvent() {
      if (this.$refs.form.validate()) {
        modifyCategory({
          id: this.id,
          title: this.title,
          icon: this.icon,
          color: this.color,
        });
        this.emitClose();
      }
    },
    deleteEvent() {
      if (this.id) {
        removeCategory(this.id);
        this.emitClose();
      }
    },
    setCategory(category) {
      if (!category.id) return false;

      this.$refs.form.resetValidation();

      this.id = category.id;
      this.title = category.title;
      this.icon = category.icon;
      this.color = category.color;

      return true;
    },
  },
};
</script>
