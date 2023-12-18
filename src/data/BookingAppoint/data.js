var TodayDate=new Date().getDate()
var Hours = new Date().getHours()
var Minutes = new Date().getMinutes()
var TodayDay=new Date().getDay()
var TodayMonth=new Date().getMonth()
var weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const dates=[
    { day: TodayDate === TodayDate ? 'Today' : weekdays[(TodayDay + 0) % 7], date: TodayDate + 0, month: months[TodayMonth] },
    { day: TodayDate + 1 === TodayDate ? 'Today' : weekdays[(TodayDay + 1) % 7], date: TodayDate + 1, month: months[TodayMonth] },
    { day: TodayDate + 2 === TodayDate ? 'Today' : weekdays[(TodayDay + 2) % 7], date: TodayDate + 2, month: months[TodayMonth] },
    { day: TodayDate + 3 === TodayDate ? 'Today' : weekdays[(TodayDay + 3) % 7], date: TodayDate + 3, month: months[TodayMonth] },
    { day: TodayDate + 4 === TodayDate ? 'Today' : weekdays[(TodayDay + 4) % 7], date: TodayDate + 4, month: months[TodayMonth] },
    { day: TodayDate + 5 === TodayDate ? 'Today' : weekdays[(TodayDay + 5) % 7], date: TodayDate + 5, month: months[TodayMonth] },
    { day: TodayDate + 6 === TodayDate ? 'Today' : weekdays[(TodayDay + 6) % 7], date: TodayDate + 6, month: months[TodayMonth] },
    { day: TodayDate + 7 === TodayDate ? 'Today' : weekdays[(TodayDay + 7) % 7], date: TodayDate + 7, month: months[TodayMonth] },
    { day: TodayDate + 8 === TodayDate ? 'Today' : weekdays[(TodayDay + 8) % 7], date: TodayDate + 8, month: months[TodayMonth] },
    { day: TodayDate + 9 === TodayDate ? 'Today' : weekdays[(TodayDay + 9) % 7], date: TodayDate + 9, month: months[TodayMonth] },
    { day: TodayDate + 10 === TodayDate ? 'Today' : weekdays[(TodayDay + 10) % 7], date: TodayDate + 10, month: months[TodayMonth] }
  ];




export {dates,weekdays,months};