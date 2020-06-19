let giga_milli_value = Math.pow(10,12);
export const gigasecond = (date) => {
  return new Date(date.getTime() + giga_milli_value);
};
