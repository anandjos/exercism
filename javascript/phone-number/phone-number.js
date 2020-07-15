export const clean = (phonenumber) => {
  let phonenumber_cleaned = phonenumber.split(/\D/).join('');
  if(phonenumber.match(/[a-zA-Z]/) != null)
    throw new Error("Letters not permitted");
  if(phonenumber.match(/[^0-9-+() \.]/) != null)
    throw new Error("Punctuations not permitted");
  if(phonenumber_cleaned.length > 11)
    throw new Error("More than 11 digits");
  if(phonenumber_cleaned.length < 10)
    throw new Error("Incorrect number of digits");
  if(phonenumber_cleaned.length == 11)
  {
    if(!phonenumber_cleaned.match(/^\+?1/))
      throw new Error("11 digits must start with 1");
    phonenumber_cleaned = phonenumber_cleaned.slice(1);
  }
  if(phonenumber_cleaned[0] == 0)
    throw new Error("Area code cannot start with zero");
  if(phonenumber_cleaned[0] == 1)
    throw new Error("Area code cannot start with one");
  if(phonenumber_cleaned[3] == 0)
    throw new Error("Exchange code cannot start with zero");
  if(phonenumber_cleaned[3] == 1)
    throw new Error("Exchange code cannot start with one");
  return phonenumber_cleaned; 
};
