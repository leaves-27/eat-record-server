let date = new Date();
let time = {
  date : date,
  year : date.getFullYear(),
  month : date.getFullYear() + "-" + (date.getMonth() + 1),
  day : date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate(),
  minute : date.getFullYear() + "-" + (date.getMonth() + 1) + "-" +date.getDate() + " " + date.getHours() + ":" + (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes())
};

module.exports = {
  time:time
};