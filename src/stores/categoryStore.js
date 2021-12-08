import { LOCAL_STORAGE_KEY } from "./_const";

const CATEGORY_STORAGE_KEY = LOCAL_STORAGE_KEY + "_CATEGORY";
const fetchCategories = () => {
  return JSON.parse(localStorage.getItem(CATEGORY_STORAGE_KEY) || "[]");
};

const storeCategories = (events) => {
  localStorage.setItem(CATEGORY_STORAGE_KEY, JSON.stringify(events));
};

export { fetchCategories, storeCategories };
