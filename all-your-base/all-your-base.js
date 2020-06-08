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
  let dec = 0,i = 0,valid = 0;
  for(i = 0; i < l; i++)
  {
    valid = 1;
    let powval = Math.pow(a,l-i-1);
    if( num[i] >= a || num[i] < 0 )
      throw new Error("Input has wrong format");
    dec = dec + num[i]*powval;
  }
  if(dec == 0 && valid == 1)
  {
    num_b = num_b.concat(dec);
    return num_b;
  }  
  while(dec!=0)
  {
    num_b.unshift(dec%b);
    dec = Math.floor(dec/b);
  }
  return num_b;
};
