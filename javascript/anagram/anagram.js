export const findAnagrams = (word,list) => {
  let anagrams = [];
  list.forEach(function(candidate){
    if(candidate.toLowerCase().split('').sort().join('') == word.toLowerCase().split('').sort().join('') 
      && word.toLowerCase()!=candidate.toLowerCase())
      anagrams.push(candidate);
  });
  return anagrams;
}
