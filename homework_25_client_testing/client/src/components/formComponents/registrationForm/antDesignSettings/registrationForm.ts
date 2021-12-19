interface ISettings {
  name: string;
  gender: string;
  dateOfBirth: string;
  dateError: string;
  dateFormat: string;
  email: string;
  emailFormat: string;
  tel: string;
  minTel: string;
  maxTel: string;
}

const SETTINGS_RU = {
  name: 'Минимум по 2, максимум по 50 зн.',
  gender: 'Укажите пол',
  dateOfBirth: 'Укажите дату рождения',
  dateError: 'Невалидная дата',
  dateFormat: 'Формат: ММ.ДД.ГГГГ',
  email: 'Укажите email',
  emailFormat: 'Буквы и числа@буквы.буквы',
  tel: 'Укажите телефон',
  minTel: 'Минимум 5',
  maxTel: 'Максимум 20'
};

const SETTINGS_EN = {
  name: 'Min 2, max 50 symbols each',
  gender: 'Gender is required',
  dateOfBirth: 'Date of birth is required',
  dateError: 'Invalid date',
  dateFormat: 'MM.DD.YYYY',
  email: 'Email is required',
  emailFormat: 'Letters and numbers',
  tel: 'Phone is required',
  minTel: 'Minimum 5',
  maxTel: 'Maximum 20'
};

const getRules = (settings: ISettings) => ({
  name: [
    {
      validator(rule: any, value: string) {
        let check;
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
    { required: true, message: settings.gender }
  ],
  date: [
    { required: true, message: settings.dateOfBirth },
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
  email: [
    { required: true, message: settings.email },
    {
      pattern: /^[a-z0-9]+[a-z-_0-9]+[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/,
      message: settings.emailFormat
    }
  ],
  tel: [
    { required: true, message: settings.tel },
    { min: 5, message: settings.minTel },
    { max: 20, message: settings.maxTel }
  ]
});

export const RULES = getRules(SETTINGS_RU);

export const RULES_EN = getRules(SETTINGS_EN);
