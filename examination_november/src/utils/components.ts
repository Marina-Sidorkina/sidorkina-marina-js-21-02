export const processDate = (dateString: string) => {
  const months = ['Января',
    'Февраля',
    'Марта',
    'Апреля',
    'Мая',
    'Июня',
    'Июля',
    'Августа',
    'Сентября',
    'Октября',
    'Ноября',
    'Декабря'
  ];
  const date = new Date(dateString);
  let day = date.getDate();
  day = day < 10 ? parseInt(`0${day}`, 10) : day;

  return day ? `${day} ${months[date.getMonth()]} ${date.getFullYear()} года` : null;
};
