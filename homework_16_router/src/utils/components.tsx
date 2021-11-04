export const processDate = (dateString: string) => {
  const months = ["January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  const date = new Date(dateString);
  let day = date.getDate();
  day = day < 10 ? parseInt("0" + day, 10) : day;

  return day ? `${day} ${months[date.getMonth()]} ${date.getFullYear()}` : null;
}
