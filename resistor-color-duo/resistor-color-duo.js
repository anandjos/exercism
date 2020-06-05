const COLORS = ["black","brown","red","orange","yellow","green","blue","violet","grey","white"];
const indexfun = (color) => {
  let index = COLORS.indexOf(color);
  if(index == -1)
    throw new RangeError("Invalid input colour");
  return index;
 };
export const decodedValue = (colorcode) => {
  return indexfun(colorcode[0])*10 + indexfun(colorcode[1]); 
};
