function getMonthOfTheYear(date) {
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July ",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let monthOfTheYear = months[date.getMonth()];
  return monthOfTheYear;
}

console.log(getMonthOfTheYear("2024-12-25T16:15:00.000Z"));
