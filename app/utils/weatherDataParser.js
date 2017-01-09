var daysMap = {
  "0":"Sunday",
  "1":"Monday",
  "2":"Tuesday",
  "3":"Wednesday",
  "4":"Thursday",
  "5":"Friday",
  "6":"Saturday"
};

var monthsMap = {
  "0":"Jan",
  "1":"Feb",
  "2":"Mar",
  "3":"Apr",
  "4":"May",
  "5":"June",
  "6":"July",
  "7":"Aug",
  "8":"Sept",
  "9":"Oct",
  "10":"Nov",
  "11":"Dec"
};

export const WeatherDateParser = (rawData) => {
  var date = new Date(rawData * 1000);
  var day = daysMap[date.getDay()];
  var month = monthsMap[date.getMonth()] + ' ' + date.getDate();
  return [day, month];
};

export const WeatherTimeParser = (rawData) => {
  var date = new Date(rawData * 1000);
  var hour = date.getHours().toString();
  var minutes = date.getMinutes().toString();

  if(hour.length == 1) hour = "0" + hour;
  if(minutes.length == 1) minutes = "0" + minutes;

  return hour + ":" + minutes;
};

export const UpperCaseFirst = (text) => text.charAt(0).toUpperCase() + text.substr(1);
