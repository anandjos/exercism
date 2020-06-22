export const valid = (number_string) => {
  let num_array = number_string.split('');
  if(num_array.length<2)
    return false;    
  let skip = 0,digit;
  for(let i = num_array.length-1; i>=0; i--)
  {
    if(num_array[i] == ' ')
      i--;
    if(isNaN(Number(num_array[i])))
      return false;
    else if(skip == 0)
      skip = 1;
    else 
    {
      skip = 0;
      digit = Number(num_array[i]);
      digit*2>9 ? (num_array[i] = digit*2-9) : (num_array[i] = digit*2);
    }
  }
  let sum = 0;
  for(let i = 0; i< num_array.length; i++)
  {
    if(!num_array[i] == ' ')
    {
      if(isNaN(Number(num_array[i])))
        return false;
      sum = sum + Number(num_array[i]);
    }
  }
  return sum%10 == 0;
};
