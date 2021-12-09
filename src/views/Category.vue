<template>
  <v-container class="v-container--board">
    <v-btn block outlined large color="primary" class="mb-4" @click="openAddCategorySheet">Add New Category</v-btn>
    <v-list-item v-for="category in categoryList" :key="category.id">
      <v-list-item-icon>
        <v-avatar :color="category.color" size="38">
          <v-icon dark v-text="category.icon"></v-icon>
        </v-avatar>
      </v-list-item-icon>
      <v-list-item-content class="flex-row">
        <v-row>
          <v-col class="d-flex align-center">
            <v-list-item-title>{{ category.title }}</v-list-item-title>
          </v-col>
          <v-col cols="auto">
            <v-btn outlined x-small fab color="indigo" @click="openModifyCategorySheet(category)">
              <v-icon>mdi-pencil</v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-list-item-content>
    </v-list-item>

    <span v-if="categoryList.length === 0">No Categories.</span>

    <v-bottom-sheet v-model="addCategory" eager>
      <AddCategory ref="addCategory" @close="closeAddCategorySheet" />
    </v-bottom-sheet>
    <v-bottom-sheet v-model="modifyCategory" eager>
      <ModifyCategory ref="modifyCategory" @close="closeModifyCategorySheet" />
    </v-bottom-sheet>
  </v-container>
</template>

<script>
import { categoryList } from "../modules/category";
import AddCategory from "../components/category/AddCategory.vue";
import ModifyCategory from "../components/category/ModifyCategory.vue";
export default {
  data: () => ({
    categoryList,

    addCategory: false,
    modifyCategory: false,
  }),
  methods: {
    openAddCategorySheet() {
      this.$refs.addCategory.initialize();
      this.addCategory = true;
    },
    closeAddCategorySheet() {
      this.addCategory = false;
    },
    openModifyCategorySheet(category) {
      this.$refs.modifyCategory.setCategory(category);
      this.modifyCategory = true;
    },
    closeModifyCategorySheet() {
      this.modifyCategory = false;
    },
  },
  components: { AddCategory, ModifyCategory },
};
</script>
