export const isPangram = (line) => {
  let alphabets = ['a' ,'b' ,'c','d' ,'e','f' ,'g' ,'h','i' ,'j' ,'k' ,
                   'l' ,'m' ,'n' ,'o' ,'p' ,'q' ,'r' ,'s' ,'t' ,'u' ,'v' ,
                   'w' , 'x', 'y', 'z'];
  return alphabets.every( alphabet => line.toLowerCase().split('').includes(alphabet));
};
