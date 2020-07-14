export const parse = (phrase) => {
  let words = phrase.split(/[^a-zA-Z\']+/);
  let acronym = '';
  words.forEach(function(word){
    acronym = acronym + word.split('')[0].toUpperCase();
  });
  return acronym;
};
