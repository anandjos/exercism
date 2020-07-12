export const largestProduct = (number,span) => {
  if(span<0)
    throw new Error('Span must be greater than zero');
  if(number.length<span)
    throw new Error('Span must be smaller than string length');
  if(isNaN(Number(number)))
    throw new Error('Digits input must only contain digits');
  let digits = number.split('').map(value => Number(value));
  let products = Array.from({ length:digits.length-span+1}).map((_,index) =>
    digits.slice(index,index+span).reduce((a,b) => a*b,1));
  return Math.max(...products);
};
