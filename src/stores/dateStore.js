import { LOCAL_STORAGE_KEY } from "./_const";

const DATE_STORAGE_KEY = LOCAL_STORAGE_KEY + "_DATE";

const fetchDatesRaw = () => {
  return localStorage.getItem(DATE_STORAGE_KEY) || "[]";
};

const fetchDates = () => {
  return JSON.parse(fetchDatesRaw());
};

const storeDates = (dates) => {
  localStorage.setItem(DATE_STORAGE_KEY, JSON.stringify(dates));
};

export { fetchDatesRaw, fetchDates, storeDates };
