export const COLORS = ["black","blue","red","orange","yellow","green","blue","violet","grey","white"];
export const colorCode = (colour) => {
  console.log(COLORS);
  var index = COLORS.indexOf(colour);
  if(index == -1)
    return "Invalid colour";
  return index;  
};
