const MONTHS_RU = ['Января', 'Февраля', 'Марта',
  'Апреля', 'Мая', 'Июня', 'Июля', 'Августа',
  'Сентября', 'Октября', 'Ноября', 'Декабря'
];

const MONTHS_EN = ['of January', 'of February', 'of March',
  'of April', 'of May', 'of June', 'of July', 'of August',
  'of September', 'of October', 'of November', 'of December'
];

const CONTROL_VALUE = 10;
const PREFIX = '0';
const YEAR = 'года';

const getValue = (value) => {
  if (value < CONTROL_VALUE) return `${PREFIX}${value}`;
  return value;
};

const parseDate = (isoDate) => {
  const date = new Date(isoDate);
  const time = `${getValue(date.getHours())}:${getValue(date.getMinutes())}`;
  return {
    enDate: `${date.getDate()} ${MONTHS_EN[date.getMonth()]} ${date.getFullYear()}`,
    ruDate: `${date.getDate()} ${MONTHS_RU[date.getMonth()]} ${date.getFullYear()} ${YEAR}`,
    enDateAndTime: `${date.getDate()} ${MONTHS_EN[date.getMonth()]} ${time}`,
    ruDateAndTime: `${date.getDate()} ${MONTHS_RU[date.getMonth()]} ${time}`
  }
}

module.exports = parseDate;
