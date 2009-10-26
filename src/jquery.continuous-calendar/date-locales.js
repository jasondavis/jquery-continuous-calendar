var DATE_LOCALE_FI = {
  init: function() {
    Date.monthNames = [
      "tammikuu",
      "helmikuu",
      "maaliskuu",
      "huhtikuu",
      "toukokuu",
      "kesäkuu",
      "heinäkuu",
      "elokuu",
      "syyskuu",
      "lokakuu",
      "marraskuu",
      "joulukuu"];
    Date.dayNames = ['Su','Ma','Ti','Ke','To','Pe','La'];
    Date.daysLabel = "Päivää";
    Date.hoursLabel = "tuntia";
  },
  shortDateFormat: "j.n.Y",
  weekDateFormat: "D j.n.Y",
  dateTimeFormat: "D j.n.Y k\\lo G:i"
};
var DATE_LOCALE_EN = {
  init: function() {
    Date.monthNames = ["January",
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
      "December"];
    Date.dayNames = ["Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"];
    Date.daysLabel = "Days";
    Date.hoursLabel = "hours";
  },
  shortDateFormat: "n/j/Y",
  weekDateFormat: "D n/j/Y",
  dateTimeFormat: "D n/j/Y G:i"
};