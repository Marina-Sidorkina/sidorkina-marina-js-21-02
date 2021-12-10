const parseDate = (isoDate) => {
  const date = new Date(isoDate);
  return {
    day: date.getDate(),
    month: date.getMonth(),
    year: date.getFullYear(),
    hours: date.getHours(),
    minutes: date.getMinutes()
  }
}

module.exports = parseDate;
