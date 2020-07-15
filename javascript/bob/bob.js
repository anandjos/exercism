const replies = [ 'Sure.', 'Whoa, chill out!', 'Calm down, I know what I\'m doing!', 'Fine. Be that way!','Whatever.' ];
export const hey = (message) => {
  if(message.match(/^\s*$/) != null)
    return replies[3];
  if(message.match(/^([A-Z]\s?)+\?\s*$/) != null)
    return replies[2];
  if(message.match(/\?\s*$/) != null)
    return replies[0];
  if(message.match(/^[^a-z]*[A-Z]+[^a-z]*\s*$/) != null)
    return replies[1];
  return replies[4];
};
