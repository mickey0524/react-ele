const dateToStamp = (date) => {
  date = new Date(date.replace(/-/g, '/'));
  return date.getTime();
}

const stampToDate = (stamp) => {
  let Y = stamp.getFullYear() + '-';
  let M = (stamp.getMonth() + 1 < 10 ? '0' + (stamp.getMonth() + 1) : stamp.getMonth() + 1) + '-';
  let D = stamp.getDate() + ' ';
  let h = stamp.getHours() + ':';
  let m = stamp.getMinutes() + ':';
  let s = stamp.getSeconds();
  return Y + M + D + h + m + s;
}

export {
  dateToStamp,
  stampToDate
}