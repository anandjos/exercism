export const valid = (number_string) => {
  let num_array = number_string.split('');
  if(num_array.length<2)
    return false;    
  let skip = 0,digit;
  let sum = 0;
  for(let i = num_array.length-1; i>=0; i--)
  {
    if(num_array[i] == ' ')
      i--;
    if(isNaN(Number(num_array[i])))
      return false;
    else 
    {
      digit = Number(num_array[i]);
      if(skip == 0)
      {
        skip = 1;
        sum = sum + digit; 
      }
      else 
      {
      skip = 0;
      digit*2>9 ? (digit = digit*2-9) : (digit = digit*2);
      sum = sum + digit;
      }
    }
  }
  return sum%10 == 0;
};
