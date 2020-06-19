const COLORS = ["black","brown","red","orange","yellow","green","blue","violet","grey","white"];  
export const decodedValue = (colorcode) => {
  return Number(`${COLORS.indexOf(colorcode[0])}` + `${COLORS.indexOf(colorcode[1])}`);
};
