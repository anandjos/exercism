export const COLORS = ["black","blue","red","orange","yellow","green","blue","violet","grey","white"];
export const colorCode = (colour) => {
  console.log(COLORS);
  if(COLORS.includes(colour))
    return COLORS.indexOf(colour);
};
