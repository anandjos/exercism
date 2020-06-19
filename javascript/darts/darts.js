export const score = (x,y) => {
  var sum = Math.pow(x,2)+Math.pow(y,2);
  if(sum<=1)
    return 10;
  else if(sum<=25)
    return 5;
  else if(sum<=100)
    return 1;
  return 0;  
};
