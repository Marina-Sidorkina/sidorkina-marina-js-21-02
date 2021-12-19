import {
  FEMALE_EN, FEMALE_RU,
  GENDER_CONTROL_VALUE, MALE_EN, MALE_RU, MISS_EN,
  MR_RU, MRS_AND_MISS_RU, MRS_EN, MS_EN,
  RUSSIAN_LANGUAGE
} from '../constants/components';

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
