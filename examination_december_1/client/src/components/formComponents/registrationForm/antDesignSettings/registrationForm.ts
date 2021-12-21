export const RULES = {
  name: [
    {
      validator(rule: any, value: string) {
        let check;
        if (value) {
          const values = value.split(' ');
          check = values[1] ? values[0].length >= 2 && values[1].length >= 2
            && values[0].length <= 50 && values[1].length <= 50 : false;
        }
        if (!check) return Promise.reject(new Error('Минимум по 2, максимум по 50 зн.'));

        return Promise.resolve();
      }
    }
  ],
  gender: [
    { required: true, message: 'Укажите пол' }
  ],
  date: [
    { required: true, message: 'Укажите дату рождения' },
    {
      pattern: /^(0[1-9]|1[012])[.](0[1-9]|[12][0-9]|3[01])[.](19|20)\d\d$/,
      message: 'Формат: ММ.ДД.ГГГГ'
    },
    {
      validator(rule: any, value: any) {
        const today = new Date();
        const dateArray = value ? value.split('.').map((item: string) => parseInt(item, 10)) : null;
        const check = value ? new Date(dateArray[2], dateArray[0] - 1, dateArray[1]) : null;

        if (check && check > today) return Promise.reject(new Error('Невалидная дата'));

        return Promise.resolve();
      }
    }
  ],
  email: [
    { required: true, message: ' Укажите email' },
    {
      pattern: /^[a-z0-9]+[a-z-_0-9]+[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/,
      message: 'Буквы и числа@буквы.буквы'
    }
  ],
  tel: [
    { required: true, message: 'Укажите телефон' },
    { min: 5, message: 'Минимум 5' },
    { max: 20, message: 'Максимум 20' }
  ]
};

export const RULES_EN = {
  name: [
    {
      validator(rule: any, value: string) {
        let check;
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
    { required: true, message: 'Gender is required' }
  ],
  date: [
    { required: true, message: 'Date of birth is required' },
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
  email: [
    { required: true, message: 'Email is required' },
    {
      pattern: /^[a-z0-9]+[a-z-_0-9]+[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/,
      message: 'Letters and numbers'
    }
  ],
  tel: [
    { required: true, message: 'Phone is required' },
    { min: 5, message: 'Minimum 5' },
    { max: 20, message: 'Maximum 20' }
  ]
};
