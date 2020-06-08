export const gigasecond = (date) => {
  return new Date(date.valueOf() + Math.pow(10,12));
};
