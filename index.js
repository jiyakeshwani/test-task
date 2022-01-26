const lodash = require("lodash");
const moment = require("moment");
moment().format("MMMM Do YYYY, h:mm:ss a");
moment().format("dddd");
moment().format("MMM Do YY");
var d = moment("2016-10-19").format(dateFormat);
var date = moment(d, dateFormat);
d.isValid();
moment().add(7, "days");
moment().add(7, "months");
moment().add(7, "years");
moment().subtract(7, "days");
moment().subtract(7, "months");
moment().subtract(7, "years");
const dateB = moment("2014-11-11");
const dateC = moment("2015-09-11");

console.log("Difference is ", dateB.diff(dateC), "milliseconds");
console.log("Difference is ", dateB.diff(dateC, "days"), "days");
console.log("Difference is ", dateB.diff(dateC, "months"), "months");
const dateD = moment("2014-11-27");
const dateE = moment("2015-09-16");

console.log("Difference is ", dateD.diff(dateE), "milliseconds");
console.log("Difference is ", dateD.diff(dateE, "days"), "days");
console.log("Difference is ", dateD.diff(dateE, "months"), "months");

console.log(moment("2020-01-01").isAfter("2018-01-01"));
console.log(moment("2010-01-01").isAfter("2018-01-01"));
console.log(moment([2020]).isLeapYear());
console.log(moment([2019]).isLeapYear());
