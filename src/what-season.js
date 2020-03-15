module.exports = function getSeason(date) {

  if (date === undefined) return 'Unable to determine the time of year!';
  if (!(date instanceof Date) || Object.entries(date).length > 0) throw new Error;

  let month = date.getMonth();

  if (month === 0 || month === 1 || month === 11) return 'winter';
  if (month === 2 || month === 3 || month === 4) return 'spring';
  if (month === 5 || month === 6 || month === 7) return 'summer';
  else return 'autumn';
};