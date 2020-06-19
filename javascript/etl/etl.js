export const transform = (old) => {
  let new_format = {};
  for (let [key, values] of Object.entries(old))
    values.forEach(value =>
      new_format[value.toLowerCase()] = Number(key));
  return new_format;
};
