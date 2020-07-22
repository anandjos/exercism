export const isValid = (isbn) => {
  let ISBN = isbn.replace(/[^X\d]/g,'').match(/^\d{9}[X\d]$/);
  if(ISBN == null)
    return false;
  let i = 11;
   return ISBN[0].split('').reduce(function(acc,val){
    if(val == 'X')
      val = 10;
    return val*(--i) + acc;},0)%11 == 0;
};
