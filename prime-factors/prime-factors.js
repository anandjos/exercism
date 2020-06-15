export const primeFactors = (num) => {
  let prime_factors = [];
  let divisor = 2;
  while(num != 1)
  {
    if(num%divisor == 0)
    {
      num = Math.floor(num/divisor);
      prime_factors.push(divisor);
    }
    else  divisor++;
  }
  return prime_factors;
};
