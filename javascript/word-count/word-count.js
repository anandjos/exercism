export const countWords = (line) => {
  let word_count = {};
  let regex = /\w+/g;
  let words = line.toLowerCase().match(regex);
  console.log(words);
  words.forEach(function(word){
    if(word_count.hasOwnProperty(word))
      word_count[word]++;
    else word_count[word] = 1;
  });
  return word_count;
};
