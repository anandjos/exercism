export const convert = (num,a=-1,b=-1) => {
  if( a < 2 || !Number.isInteger(a) )
    throw new Error("Wrong input base");
  if( b < 2 || !Number.isInteger(b) )
    throw new Error("Wrong output base");
  let l = num.length;
  if( l == 0 )
    throw new Error("Input has wrong format");
  if( l > 1 && num[0] == 0 )
    throw new Error("Input has wrong format");
  let num_b = [];
  let i,dec = 0;
  for(i = 0; i < l; i++)
  {
    let powval = Math.pow(a,l-i-1);
    if( num[i] >= a || num[i] < 0 )
      throw new Error("Input has wrong format");
    dec = dec + num[i]*powval;
  }
  while(dec!=0)
  {
    num_b.unshift(dec%b);
    dec = Math.floor(dec/b);
  } 
  if( num[0] == 0 )
    num_b = num_b.concat(0);
  return num_b;
};
