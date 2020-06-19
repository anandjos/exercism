const adjacent_mine_count = (input,i,j) => {
  let count = 0;
  for(let k=i-1; k<i+2; k++)
    if(input[k])
    count = count + input[k].substring(j-1,j+2).split('*').length -1;
  if(count == 0)
    return ' ';
  return count;
}

export const annotate = (input) =>  {
  let row =input.length;
  if(row == 0)
    return input;
  let column = input[0].length;
  if(column == 0)
    return input;
  let output = [] ;
  for(let i=0; i<row; i++)
  {
    output.push('');
    for(let j=0; j<column;j++)
      if(input[i][j] == '*')
        output[i] = output[i].concat('*');
      else
        output[i] = output[i].concat(adjacent_mine_count(input,i,j));
  }
  return output;
}
