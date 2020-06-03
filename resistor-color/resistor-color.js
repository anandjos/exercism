export const COLORS = ["black","blue","red","orange","yellow","green","blue","violet","grey","white"];
export const colorCode = (colour) => {
  let index = COLORS.indexOf(colour);
  if(index == -1)
    throw new RangeError("Invalid colour");  
  return index;  
};
