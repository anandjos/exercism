const find_num = (input,i,j) => {
  let r = input.length;
  let c = input[0].length;
  let x1=0,y1=0,x2=r-1,y2=c-1;
  let count = 0;
  if(i > 0)
    x1 = i-1;
  if( i < r-1)
    x2 =i+1;
  if(j > 0)
    y1 = j-1;
  if(j < c-1)
    y2 = j+1;
  for(let i = x1; i <= x2; i++)
    for(let j = y1; j <= y2; j++)
      if(input[i][j] == '*')
        count++;
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
        output[i] = output[i].concat(find_num(input,i,j));
  }
  return output;
}
