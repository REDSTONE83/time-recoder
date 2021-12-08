import { LOCAL_STORAGE_KEY } from "./_const";

const CATEGORY_STORAGE_KEY = LOCAL_STORAGE_KEY + "_CATEGORY";

const fetchCategoriesRaw = () => {
  return localStorage.getItem(CATEGORY_STORAGE_KEY) || "[]";
};

const fetchCategories = () => {
  return JSON.parse(fetchCategoriesRaw());
};

const storeCategories = (events) => {
  localStorage.setItem(CATEGORY_STORAGE_KEY, JSON.stringify(events));
};

export { fetchCategoriesRaw, fetchCategories, storeCategories };
