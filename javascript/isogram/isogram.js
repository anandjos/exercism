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
  for(let prop in characters)
    total_letters--;  
  return total_letters == 0;
};
