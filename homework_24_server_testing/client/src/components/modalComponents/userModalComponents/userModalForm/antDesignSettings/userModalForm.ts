interface ISettings {
  name: string;
  genderFemale: string;
  genderMale: string;
  genderError: string;
  dateFormat: string;
  dateError: string;
  telMin: string;
  telMax: string;
}

const SETTINGS_RU = {
  name: 'Мин. по 2, макс. по 50 зн.',
  genderFemale: 'Женский',
  genderMale: 'Мужской',
  genderError: 'Мужской/Женский',
  dateFormat: 'Формат: ММ.ДД.ГГГГ',
  dateError: 'Невалидная дата',
  telMin: 'Минимум 5',
  telMax: 'Максимум 20'
};

const SETTINGS_EN = {
  name: 'Min 2, max 50 symbols each',
  genderFemale: 'Женский',
  genderMale: 'Мужской',
  genderError: 'Мужской/Женский',
  dateFormat: 'MM.DD.YYYY',
  dateError: 'Invalid date',
  telMin: 'Minimum 5',
  telMax: 'Maximum 20'
};

const getRules = (settings: ISettings) => ({
  name: [
    {
      validator(rule: any, value: string) {
        let check = true;
        if (value) {
          const values = value.split(' ');
          check = values[1] ? values[0].length >= 2 && values[1].length >= 2
            && values[0].length <= 50 && values[1].length <= 50 : false;
        }
        if (!check) return Promise.reject(new Error(settings.name));

        return Promise.resolve();
      }
    }
  ],
  gender: [
    {
      validator(rule: any, value: string) {
        let check = true;
        if (value) {
          check = value === settings.genderFemale || value === settings.genderMale;
        }
        if (!check) return Promise.reject(new Error(settings.genderError));

        return Promise.resolve();
      }
    }
  ],
  birthDate: [
    {
      pattern: /^(0[1-9]|1[012])[.](0[1-9]|[12][0-9]|3[01])[.](19|20)\d\d$/,
      message: settings.dateFormat
    },
    {
      validator(rule: any, value: any) {
        const today = new Date();
        const dateArray = value ? value.split('.').map((item: string) => parseInt(item, 10)) : null;
        const check = value ? new Date(dateArray[2], dateArray[0] - 1, dateArray[1]) : null;

        if (check && check > today) return Promise.reject(new Error(settings.dateError));

        return Promise.resolve();
      }
    }
  ],
  phone: [
    { min: 5, message: settings.telMin },
    { max: 20, message: settings.telMax }
  ]
});

export const RULES = getRules(SETTINGS_RU);

export const RULES_EN = getRules(SETTINGS_EN);

export const BTN_DARK_STYLE = {
  backgroundColor: '#161b22',
  border: '1px solid #c9d1d9',
  display: 'flex',
  alignItems: 'center'
};
