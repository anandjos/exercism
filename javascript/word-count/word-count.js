export const countWords = (line) => {
  let word_count = {};
  let regex = /\w+('\w+)?/g;
  let words = line.toLowerCase().match(regex);
  words.forEach(word => word_count[word]++ || (word_count[word] = 1));
  return word_count;
};
