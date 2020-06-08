export const encode = (str) => {
  let enstr='';
  for(var i=0; i<str.length; i++)
  {
    let count = 1;
    while(i+1<str.length)
    {
      if(str[i] == str[i+1])
      {
        count++; i++;
      }
      else break;
    }
    if(count > 1)
      enstr=enstr.concat(count);
    enstr=enstr.concat(str[i]);
  } 
  return enstr;
};

export const decode = (str) => {
  let destr='';
  let i=0,len=str.length;
  while(i<len)
  {
    var n=parseInt(str.substring(i));
    if(str[i]==' '|| isNaN(n))
    {
      destr=destr.concat(str[i]);
      i++;
    }
    else
    {
      let num_len = n.toString().length;
      for(var j=0; j<n; j++)
        destr=destr.concat(str[i + num_len]);
      i = i+num_len+1;  
    }
  }
  return destr;
};
