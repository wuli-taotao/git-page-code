function dateToString(time){
  //将 date对象 转化为 日期String
  let date = new Date(time)
  let year = date.getFullYear()
  let month = date.getMonth()
  if (month < 10) {
    month = '0' + month
  }
  let day = date.getDate()
  if (day < 10) {
    day = '0' + day
  }

  let dateText = year + '-' + month + '-' + day
  return dateText
}

function timeToString(time){
  //将 date对象 转化为 时间String
  let date = new Date(time)
  let hour = date.getHours()
  if (hour < 10) {
    hour = '0' + hour
  }
  let min = date.getMinutes()
  if (min < 10) {
    min = '0' + min
  }
  let sec = date.getSeconds()
  if (sec < 10) {
    sec = '0' + sec
  }

  let dateText = hour + ':' + min + ':' + sec
  return dateText
}

export default {
  dateToString: dateToString,
  timeToString: timeToString
}
