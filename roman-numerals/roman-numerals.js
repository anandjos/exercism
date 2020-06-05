const convert = (rom,d,l)=> {
  switch(l)
  {
    case 1:
      var o='I',f='V',t='X';break;
    case 2:
      var o='X',f='L',t='C';break;
    case 3:
      var o='C',f='D',t='M';break;
    case 4:
      var o='M',f='',t='';break;
  }
  if(d<=3)
    for(var i=0; i<d; i++)
      rom=rom.concat(o);
  else if(d==4)
    rom=rom.concat(o,f);
  else if(d<=8)
  {
    rom=rom.concat(f);
    for(var i=0; i<d-5; i++)
    rom=rom.concat(o);
  }
  else
    rom=rom.concat(o,t);
  return rom;  
};    
export const toRoman = (num) => {
  if(num>3999)
    throw new RangeError("Out of range");  
  let str=num.toString();
  let l= str.length;
  let rom='';
  let i=0;
  while(i<str.length)
  {
  rom=convert(rom,parseInt(str[i]),l);
  l--;
  i++;
  }
  return rom;
};
