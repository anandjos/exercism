export const hey = (message) => {
  if(message.match(/^\s*$/) != null)
    return 'Fine. Be that way!'; 
  if(message.match(/^([A-Z]\s*)+\?\s*$/) != null)
    return 'Calm down, I know what I\'m doing!';
  if(message.match(/\?\s*$/) != null)
    return 'Sure.';
  if(message.match(/^[^a-z]*[A-Z]+[^a-z]*\s*$/) != null)
    return 'Whoa, chill out!';
  return 'Whatever.';
};
