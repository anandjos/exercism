export const isIsogram = (phrase) => {
  let characters = {};
  let total_letters = 0;
  phrase.split('').forEach(function(ch) {
    if(!(ch == ' ' || ch == '_' || ch == '-'))
    {
      total_letters++;
      characters[`${ch.toLowerCase()}`] = 1;
    }
  });
  return total_letters == Object.keys(characters).length;
};
