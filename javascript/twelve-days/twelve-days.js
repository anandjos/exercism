const day = ['first','second','third','fourth','fifth','sixth','seventh','eighth','ninth','tenth','eleventh','twelfth'];
export const recite = (start,end = start) => {
  let lyrics ='';
  for(let i = start; i<=end; i++)
  {
    lyrics = lyrics + '\n';
    lyrics = lyrics + `On the ${day[i-1]} day of Christmas my true love gave to me: `;
    switch(i){
      case 12: lyrics = lyrics + 'twelve Drummers Drumming, ';
      case 11: lyrics = lyrics + 'eleven Pipers Piping, ';
      case 10: lyrics = lyrics + 'ten Lords-a-Leaping, ';
      case 9: lyrics = lyrics + 'nine Ladies Dancing, ';
      case 8: lyrics = lyrics + 'eight Maids-a-Milking, ';
      case 7: lyrics = lyrics + 'seven Swans-a-Swimming, ';
      case 6: lyrics = lyrics + 'six Geese-a-Laying, ';
      case 5: lyrics = lyrics + 'five Gold Rings, ';
      case 4: lyrics = lyrics + 'four Calling Birds, ';
      case 3: lyrics = lyrics + 'three French Hens, ';
      case 2: lyrics = lyrics + 'two Turtle Doves, and ';
      case 1: lyrics = lyrics + 'a Partridge in a Pear Tree.\n';
    }
  }
  return lyrics.trimLeft();
};
