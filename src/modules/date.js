import { fetchDates, storeDates } from "../stores/dateStore";

const dateList = [];

const reloadDates = () => {
  dateList.splice(0, dateList.length);
  dateList.push(...fetchDates());
};

reloadDates();

const saveDate = ({ date, summary }) => {
  const targetDate = getDate(date);

  if (targetDate) {
    targetDate.summary = summary;
  } else {
    dateList.push({
      date,
      summary,
    });
  }

  storeDates(dateList);
};

const getDate = (date) => {
  return dateList.find((item) => item.date === date);
};

export { dateList, reloadDates, saveDate, getDate };
