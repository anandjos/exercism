export const countWords = (line) => {
  let word_count = {};
  let regex = /([a-z]+'[a-z]+)|\w+/g;
  let words = line.toLowerCase().match(regex);
  words.forEach(function(word){
    if(word_count.hasOwnProperty(word))
      word_count[word]++;
    else word_count[word] = 1;
  });
  return word_count;
};
