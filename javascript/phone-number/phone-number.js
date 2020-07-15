export const clean = (phonenumber) => {
  let phone_number_cleaned = phonenumber.split(/\D/).join('');
  let len = phone_number_cleaned.length;
  if(len < 11 && phonenumber.match(/[:@!]/) != null)
    throw new Error("Punctuations not permitted");
  if(phonenumber.match(/[a-zA-Z]/) != null)
    throw new Error("Letters not permitted");
  if(len > 11)
    throw new Error("More than 11 digits");
  if(len < 10)
    throw new Error("Incorrect number of digits");
  if(len == 11)
  {
    if(phone_number_cleaned.match(/^\+?1/) == null)
      throw new Error("11 digits must start with 1");
    phone_number_cleaned = phone_number_cleaned.slice(1,11);
  }
  if(phone_number_cleaned.match(/^0/) != null)
    throw new Error("Area code cannot start with zero");
  if(phone_number_cleaned.match(/^1/) != null)
    throw new Error("Area code cannot start with one");
  if(phone_number_cleaned.match(/^\d{3}0/) != null)
    throw new Error("Exchange code cannot start with zero");
  if(phone_number_cleaned.match(/^\d{3}1/) != null)
    throw new Error("Exchange code cannot start with one");
  return phone_number_cleaned; 
};
