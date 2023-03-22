export function fullDate(date: Date) {
  return [
    date.getDate(),
    (date.getMonth() + 1).toString().padStart(2, '0'),
    date.getFullYear(),
  ].join('/');
}

export function getTime(date: Date) {
  return [date.getHours(), date.getMinutes(), date.getSeconds()].join(':');
}
