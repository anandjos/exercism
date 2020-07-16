export const transpose = (input) => {
  let i,len=0;
  let transpose = [];
  let str = '';
  input.forEach(function(row){
    len = Math.max(len,row.length);
  });
  for(i = 0; i<len; i++)
  {
    str = '';
    input.forEach(function(row){
      if(row[i] != undefined)
        str = str + row[i];
      else str = str + ' ';
    });
    transpose.push(str);
  }
  let last = transpose.pop();
  if(last != undefined)
    transpose.push(last.trimEnd());
  return transpose;
};
