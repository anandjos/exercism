export const recite = (initialBottlesCount, takeDownCount) => {
  let lyrics = [];
  for(let i = initialBottlesCount; i>initialBottlesCount-takeDownCount; i--)
  {
    if(i >= 1)
    {
      lyrics.push(`${i} bottle${i>1? 's' :''} of beer on the wall, ${i} bottle${i>1? 's' :''} of beer.`);
      lyrics.push(`Take ${i>1?'one':'it'} down and pass it around, ${i-1>0? `${i-1}` :'no more'} bottle${i-1!=1? 's' :''} of beer on the wall.`);
    }
    else lyrics.push('No more bottles of beer on the wall, no more bottles of beer.', 
        'Go to the store and buy some more, 99 bottles of beer on the wall.');
    lyrics.push('');
  }
  lyrics.pop();
  return lyrics;
};
