export const steps = (n) => {
  let count=0;
  if(n<=0)
    throw new RangeError("Only positive numbers are allowed");
  while(n!=1)
  {
    count++;
    if(n%2==0)
      n=n/2;
    else
      n=3*n+1;
  }
  return count;
};
