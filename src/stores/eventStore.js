import { LOCAL_STORAGE_KEY } from "./const";

const EVENT_STORAGE_KEY = LOCAL_STORAGE_KEY + "_EVENT";
const fetchEvents = () => {
  return JSON.parse(localStorage.getItem(EVENT_STORAGE_KEY) || "[]");
};

const storeEvents = (events) => {
  localStorage.setItem(EVENT_STORAGE_KEY, JSON.stringify(events));
};

export { fetchEvents, storeEvents };
