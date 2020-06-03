export const decodedValue = (colorcode) => {
  const COLORS = ["black","brown","red","orange","yellow","green","blue","violet","grey","white"];
  let index1 = COLORS.indexOf(colorcode[0]);
  let index2 = COLORS.indexOf(colorcode[1]);
  if(index1 == -1 || index2 == -1)
    throw new RangeError("Invalid input colour");
  return index1*10 + index2;  
};
