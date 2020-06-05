export const encode = (str) => {
  let enstr='';
  for(var i=0; i<str.length; i++)
  {
    let c=1;
    while(i+1<str.length)
    {
      if(str[i] == str[i+1])
      {
        c++;
        i++;
      }
      else break;
    }
    if(c>1)
      enstr=enstr.concat(c);
    enstr=enstr.concat(str[i]);
  } 
  return enstr;
};

export const decode = (str) => {
  let destr='';
  let i=0,len=str.length;
  while(i<len)
  {
    var n=parseInt(str.substring(i),10);
    if(str[i]==' '|| isNaN(n))
    {
      destr=destr.concat(str[i]);
      i++;
    }
    else
    {
      let l=n.toString().length;
      for(var j=0; j<n; j++)
        destr=destr.concat(str[i+l]);
      i=i+l+1;  
    }
  }
  return destr;
};
