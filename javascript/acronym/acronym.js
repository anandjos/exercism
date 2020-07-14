export const parse = (phrase) => {
  return phrase.split(/[^a-zA-Z\']+/).map(word => word[0].toUpperCase()).join('');
};
