import { v4 as uuidv4 } from "uuid";
import { fetchEvents, storeEvents } from "../stores/eventStore";

const eventList = fetchEvents();

const getDurationMinutes = ({ beginDate, beginTime, endDate, endTime }) => {
  const beginDatetime = Date.parse(`${beginDate}T${beginTime}:00`);
  const endDatetime = Date.parse(`${endDate}T${endTime}:00`);
  return Math.floor((endDatetime - beginDatetime) / (1000 * 60));
};

const getDurationString = ({ beginDate, beginTime, endDate, endTime }) => {
  const minutes = getDurationMinutes({
    beginDate,
    beginTime,
    endDate,
    endTime,
  });
  const hoursString = String(Math.floor(minutes / 60)).padStart(2, "0");
  const minutesString = String(Math.floor(minutes % 60)).padStart(2, "0");

  return `${hoursString}H ${minutesString}M`;
};

const addEvent = ({ category, summary, beginDate, beginTime, endDate, endTime }) => {
  eventList.push({
    id: uuidv4(),
    category,
    summary,
    beginDate,
    beginTime,
    endDate,
    endTime,
  });

  storeEvents(eventList);
};

const getEvent = (id) => {
  return eventList.find((event) => event.id === id);
};

const modifyEvent = ({ id, category, summary, beginDate, beginTime, endDate, endTime }) => {
  const event = getEvent(id);
  if (event) {
    event.category = category;
    event.summary = summary;
    event.beginDate = beginDate;
    event.beginTime = beginTime;
    event.endDate = endDate;
    event.endTime = endTime;

    storeEvents(eventList);
  }
};

const removeEvent = (id) => {
  const removeIndex = eventList.findIndex((event) => event.id === id);
  if (removeIndex > -1) {
    eventList.splice(removeIndex, 1);
    storeEvents(eventList);
  }
};

export { eventList, addEvent, modifyEvent, removeEvent, getDurationString };
