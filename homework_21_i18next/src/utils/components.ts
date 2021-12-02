import {
  DARK_THEME,
  DATE_CONTROL_VALUE, FEMALE_EN, FEMALE_RU,
  GENDER_CONTROL_VALUE,
  LOCAL_STORAGE_THEME_KEY, MALE_EN, MALE_RU, MISS_EN,
  MONTHS,
  MONTHS_EN, MR_RU, MRS_AND_MISS_RU, MRS_EN, MS_EN,
  RUSSIAN_LANGUAGE,
  RUSSIAN_YEAR_VALUE, ZERO
} from '../constants/components';

export const processDate = (dateString: string, language = RUSSIAN_LANGUAGE) => {
  const months = language === RUSSIAN_LANGUAGE ? MONTHS : MONTHS_EN;
  const year = language === RUSSIAN_LANGUAGE ? RUSSIAN_YEAR_VALUE : '';
  const date = new Date(dateString);
  let day = date.getDate();
  day = day < DATE_CONTROL_VALUE ? parseInt(`0${day}`, DATE_CONTROL_VALUE) : day;

  return day ? `${day} ${months[date.getMonth()]} ${date.getFullYear()}${year}` : '';
};

const getTime = (value: number) => {
  if (value < 10) return `${ZERO}${value}`;
  return value;
};

export const processPostsListItemDate = (dateString: string, language = RUSSIAN_LANGUAGE) => {
  const months = language === RUSSIAN_LANGUAGE ? MONTHS : MONTHS_EN;
  const date = new Date(dateString);
  let day = date.getDate();
  day = day < DATE_CONTROL_VALUE ? parseInt(`${ZERO}${day}`, DATE_CONTROL_VALUE) : day;

  return day
    ? `${day} ${months[date.getMonth()]} ${getTime(date.getHours())}:${getTime(date.getMinutes())}`
    : null;
};

export const isEmptyObject = (obj: Object) => Object.keys(obj).length === 0;

export const getDarkThemeValue = () => {
  const value = localStorage.getItem(LOCAL_STORAGE_THEME_KEY);
  return value === DARK_THEME;
};

export const getGenderFieldValue = (gender: string, language = RUSSIAN_LANGUAGE) => {
  if (language === RUSSIAN_LANGUAGE) {
    return gender === GENDER_CONTROL_VALUE ? FEMALE_RU : MALE_RU;
  }
  return gender === GENDER_CONTROL_VALUE ? FEMALE_EN : MALE_EN;
};

export const getTitleValue = (title: string, language = RUSSIAN_LANGUAGE) => {
  if (language === RUSSIAN_LANGUAGE) {
    return title === MRS_EN
    || title === MISS_EN
      || title === MS_EN
      ? MRS_AND_MISS_RU : MR_RU;
  }
  return `${title}.`;
};
