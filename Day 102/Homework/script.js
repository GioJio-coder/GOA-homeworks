
function randomDecimal() { return Math.random() }
function rollDice() { return Math.floor(Math.random()*3)+5 }
function flipCoin() { return Math.random()<0.5?"Heads":"Tails" }
function randomBool() { return Math.random()<0.5 }

let today=new Date()
let todayDate=today.getDate()
let birthday=new Date(today.getFullYear(),5,10).getDate()
let isFirstDay=todayDate===1

let weekday=today.getDay()
let birthdayWeekday=new Date(today.getFullYear(),15,20).getDay()
let isSunday=weekday===0

let year=today.getFullYear()
let birthdayYear=new Date(2005,5,15).getFullYear()
let is2025=year===2025

let hour=today.getHours()
function getHour(d){return d.getHours()}
let isMorning=hour<12

let minute=today.getMinutes()
function getMinute(d){return d.getMinutes()}
let isZeroMinute=minute===0

let seconds=new Date().getSeconds()
alert(new Date().getSeconds())
function getSeconds(d){return d.getSeconds()}
let d1=new Date(),d2=new Date("2025-01-01")
let compareSecs=d1.getSeconds()===d2.getSeconds()
setInterval(()=>console.log(new Date().getSeconds()),1000)

let month=new Date().getMonth()
alert(new Date().getMonth())
function getMonth(d){return d.getMonth()}
let m1=new Date(),m2=new Date("2025-12-25")
let compareMonths=m1.getMonth()===m2.getMonth()

