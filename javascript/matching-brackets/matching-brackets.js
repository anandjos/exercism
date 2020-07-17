const brackets = {'[':']', '{':'}', '(':')'};
export const isPaired = (combination) => {
  let stack = [];
  let extract_brackets = combination.replace(/[^[\]{}()]/g,'');
  for(let bracket of extract_brackets) 
  {
    if(brackets.hasOwnProperty(bracket))
      stack.push(bracket);
    else if(stack.length == 0 || brackets[stack.pop()] != bracket )
      return false;
  }
  return stack.length == 0;
};
