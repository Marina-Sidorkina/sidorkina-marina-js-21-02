import { MONTHS } from '../constants/components';

export const processDate = (dateString: string) => {
  const months = MONTHS;
  const date = new Date(dateString);
  let day = date.getDate();
  day = day < 10 ? parseInt(`0${day}`, 10) : day;

  return day ? `${day} ${months[date.getMonth()]} ${date.getFullYear()} года` : null;
};

const getTime = (value: number) => {
  if (value < 10) return `0${value}`;
  return value;
};

export const processPostsListItemDate = (dateString: string) => {
  const months = MONTHS;
  const date = new Date(dateString);
  let day = date.getDate();
  day = day < 10 ? parseInt(`0${day}`, 10) : day;

  return day
    ? `${day} ${months[date.getMonth()]} ${getTime(date.getHours())}:${getTime(date.getMinutes())}`
    : null;
};
