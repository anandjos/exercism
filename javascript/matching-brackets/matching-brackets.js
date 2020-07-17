const open_brackets = ['[','{','('];
const closed_brackets = [']','}',')'];
export const isPaired = (combination) => {
  let str = [],len = combination.length;
  let last = -1;
  for(let i=0; i<len; i++)
  {
    if(open_brackets.includes(combination[i]))
      str.push(combination[i]);
    else if(closed_brackets.includes(combination[i]))
    {
      last = str.pop();
      if(last == undefined || closed_brackets.indexOf(combination[i]) != open_brackets.indexOf(last))
        return false;
    }
  }
  return str.length == 0;
};
