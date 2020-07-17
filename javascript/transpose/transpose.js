export const transpose = (input) => {
  let len=0;
  input.forEach(function(row){
    len = Math.max(len,row.length);
  });
  let transpose = Array.from({length:len}).map((_,i) => input.reduce(function(acc = '',row){
    return (row[i] || ' ') + acc ;},'').split('').reverse().join(''));
  if(transpose[len-1] != undefined)
    transpose[len-1] = transpose[len-1].trimEnd();
  return transpose;
};
