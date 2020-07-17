export const recite = (initialBottlesCount, takeDownCount) => {
  let lyrics = [];
  for(let i = initialBottlesCount; i>initialBottlesCount-takeDownCount; i--)
  {
    if(i > 1)
    {
      lyrics.push(`${i} bottles of beer on the wall, ${i} bottles of beer.`);
      if(i > 2)
        lyrics.push(`Take one down and pass it around, ${i-1} bottles of beer on the wall.`);
      else lyrics.push(`Take one down and pass it around, 1 bottle of beer on the wall.`);
    }
    else if(i == 1)
      lyrics.push('1 bottle of beer on the wall, 1 bottle of beer.',
        'Take it down and pass it around, no more bottles of beer on the wall.');
    else lyrics.push('No more bottles of beer on the wall, no more bottles of beer.', 
        'Go to the store and buy some more, 99 bottles of beer on the wall.');
    lyrics.push('');
  }
  lyrics.pop();
  return lyrics;
};
