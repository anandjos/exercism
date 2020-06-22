export const classify = (num) => {
  if(num<1)
    throw new Error("Classification is only possible for natural numbers.");
  let sum = 0;
  for(let i = 1; i<Math.floor(num); i++)
    if(num%i == 0)
      sum += i;
  return (sum<num ? "deficient" : (sum==num ? "perfect" : "abundant"));
};
