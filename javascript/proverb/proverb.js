export const proverb = (...list) => {
  let result = '',i;
  for( i=0; i<list.length-2; i++)
    result = result + `For want of a ${list[i]} the ${list[i+1]} was lost.\n`;
  let last = ' ' + (list[list.length-1].qualifier||'');
  if(last.trimEnd() == '')
    result += `For want of a ${list[i]} the ${list[i+1]} was lost.\n`;
  return result + `And all for the want of a${last.trimEnd()} ${list[0]}.`
};
