const COLORS = ["black","brown","red","orange","yellow","green","blue","violet","grey","white"];  
export const decodedValue = (colorcode) => {
  let index1=COLORS.indexOf(colorcode[0]);
  let index2=COLORS.indexOf(colorcode[1]);
  return Number(`${index1}` + `${index2}`);
};
