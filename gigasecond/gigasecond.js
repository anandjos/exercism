export const gigasecond = (date) => {
  let date_value_milli = date.valueOf() + Math.pow(10,12);
  let new_date = new Date(date_value_milli);
  return (new_date);
};
