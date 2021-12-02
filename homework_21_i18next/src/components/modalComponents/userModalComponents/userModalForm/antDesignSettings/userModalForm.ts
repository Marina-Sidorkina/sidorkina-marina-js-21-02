export const RULES = {
  name: [
    {
      validator(rule: any, value: string) {
        let check = true;
        if (value) {
          const values = value.split(' ');
          check = values[1] ? values[0].length >= 2 && values[1].length >= 2
            && values[0].length <= 50 && values[1].length <= 50 : false;
        }
        if (!check) return Promise.reject(new Error('Мин. по 2, макс. по 50 зн.'));

        return Promise.resolve();
      }
    }
  ],
  gender: [
    {
      validator(rule: any, value: string) {
        let check = true;
        if (value) {
          check = value === 'Женский' || value === 'Мужской';
        }
        if (!check) return Promise.reject(new Error('Мужской/Женский'));

        return Promise.resolve();
      }
    }
  ],
  birthDate: [
    {
      pattern: /^(0[1-9]|1[012])[.](0[1-9]|[12][0-9]|3[01])[.](19|20)\d\d$/,
      message: 'Формат: ММ.ДД.ГГГГ'
    },
    {
      validator(rule: any, value: any) {
        const today = new Date();
        const dateArray = value ? value.split('.').map((item: string) => parseInt(item, 10)) : null;
        const check = value ? new Date(dateArray[2], dateArray[0] - 1, dateArray[1]) : null;

        if (check && check > today) return Promise.reject(new Error('Invalid date'));

        return Promise.resolve();
      }
    }
  ],
  phone: [
    { min: 5, message: 'Минимум 5' },
    { max: 20, message: 'Максимум 20' }
  ]
};

export const RULES_EN = {
  name: [
    {
      validator(rule: any, value: string) {
        let check = true;
        if (value) {
          const values = value.split(' ');
          check = values[1] ? values[0].length >= 2 && values[1].length >= 2
            && values[0].length <= 50 && values[1].length <= 50 : false;
        }
        if (!check) return Promise.reject(new Error('Min 2, max 50 symbols each'));

        return Promise.resolve();
      }
    }
  ],
  gender: [
    {
      validator(rule: any, value: string) {
        let check = true;
        if (value) {
          check = value === 'Женский' || value === 'Мужской';
        }
        if (!check) return Promise.reject(new Error('Мужской/Женский'));

        return Promise.resolve();
      }
    }
  ],
  birthDate: [
    {
      pattern: /^(0[1-9]|1[012])[.](0[1-9]|[12][0-9]|3[01])[.](19|20)\d\d$/,
      message: 'MM.DD.YYYY'
    },
    {
      validator(rule: any, value: any) {
        const today = new Date();
        const dateArray = value ? value.split('.').map((item: string) => parseInt(item, 10)) : null;
        const check = value ? new Date(dateArray[2], dateArray[0] - 1, dateArray[1]) : null;

        if (check && check > today) return Promise.reject(new Error('Invalid date'));

        return Promise.resolve();
      }
    }
  ],
  phone: [
    { min: 5, message: 'Minimum 5' },
    { max: 20, message: 'Maximum 20' }
  ]
};

export const BTN_DARK_STYLE = {
  backgroundColor: '#161b22',
  border: '1px solid #c9d1d9',
  display: 'flex',
  alignItems: 'center'
};
