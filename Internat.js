// Date Formatting , number Formatting and Currency .

var l1EN = new Intl.DateTimeFormat("en-US")
var l1DE = new Intl.DateTimeFormat("de-DE")
console.log(
l1EN.format(new Date("2015-01-02")),
l1DE.format(new Date("2015-01-02")) === "2.1.2015")

//    Number Formatting   and currency 

var l1 = new Intl.NumberFormat("en-US")
var l2 = new Intl.NumberFormat("en-US" ,{ style: "currency" , currency :"USD"})
console.log(l1.format(123456789))
console.log(l2.format(123456))