import { v4 as uuidv4 } from "uuid";
import { fetchCategories, storeCategories } from "../stores/categoryStore";

const categoryList = [];

const reloadCategories = () => {
  categoryList.splice(0, categoryList.length);
  categoryList.push(...fetchCategories());
};

reloadCategories();

const addCategory = ({ icon, title, color }) => {
  categoryList.push({
    id: uuidv4(),
    icon,
    title,
    color: color || "primary",
  });

  storeCategories(categoryList);
};

const getCategory = (id) => {
  return categoryList.find((category) => category.id === id);
};

const modifyCategory = ({ id, icon, title, color }) => {
  const category = getCategory(id);
  if (category) {
    category.icon = icon;
    category.title = title;
    category.color = color || "primary";

    storeCategories(categoryList);
  }
};

const removeCategory = (id) => {
  const removeIndex = categoryList.findIndex((category) => category.id === id);
  if (removeIndex > -1) {
    categoryList.splice(removeIndex, 1);

    storeCategories(categoryList);
  }
};

export { categoryList, reloadCategories, addCategory, getCategory, modifyCategory, removeCategory };
