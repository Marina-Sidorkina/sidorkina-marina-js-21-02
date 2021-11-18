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

export const getPagesArray = (itemsNumber: number, currentPage: number, itemsPerPage: number) => {
  let result: number[];

  const pagesNumber = Math.ceil(itemsNumber / itemsPerPage);

  const fullStart = [1, 2, 3, 4, 5, 6];
  const start = [1, 2, 3];
  const fullEnd = [pagesNumber - 4, pagesNumber - 3, pagesNumber - 2, pagesNumber - 1, pagesNumber];
  const end = [pagesNumber - 2, pagesNumber - 1, pagesNumber];

   if(pagesNumber <= 10) {
     result = [...Array(pagesNumber)].map((_, index) => index + 1);
   } else {
     if(currentPage <= 5) {
       result = [...fullStart, 0, ...end];
     } else if (currentPage < 3 || currentPage > (pagesNumber - 2)) {
       result = [...start, 0, ...end];
     } else if (currentPage >= (pagesNumber - 3)) {
       result = [...start, 0, ...fullEnd];
     } else {
       result = [...start, 0, currentPage -1 ,currentPage, currentPage + 1, 0, ...end];
     }
   }

   return result;
}
