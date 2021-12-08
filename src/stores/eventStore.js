import { LOCAL_STORAGE_KEY } from "./_const";

const EVENT_STORAGE_KEY = LOCAL_STORAGE_KEY + "_EVENT";

const fetchEventsRaw = () => {
  return localStorage.getItem(EVENT_STORAGE_KEY) || "[]";
};

const fetchEvents = () => {
  return JSON.parse(fetchEventsRaw());
};

const storeEvents = (events) => {
  localStorage.setItem(EVENT_STORAGE_KEY, JSON.stringify(events));
};

export { fetchEventsRaw, fetchEvents, storeEvents };
