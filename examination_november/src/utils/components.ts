import { DARK_THEME, LOCAL_STORAGE_THEME_KEY, MONTHS } from '../constants/components';

export const processDate = (dateString: string) => {
  const months = MONTHS;
  const date = new Date(dateString);
  let day = date.getDate();
  day = day < 10 ? parseInt(`0${day}`, 10) : day;

  return day ? `${day} ${months[date.getMonth()]} ${date.getFullYear()} года` : '';
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

export const isEmptyObject = (obj: Object) => Object.keys(obj).length === 0;

export const getDarkThemeValue = () => {
  const value = localStorage.getItem(LOCAL_STORAGE_THEME_KEY);
  return value === DARK_THEME;
};

export const getGenderFieldValue = (gender: string) => (
  gender === 'female' ? 'Женский' : 'Мужской'
);
