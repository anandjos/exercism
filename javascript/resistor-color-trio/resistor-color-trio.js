const COLORS = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white'];
export class ResistorColorTrio {
  constructor(colors) {
    this.color1_value = COLORS.indexOf(colors[0]);
    this.color2_value = COLORS.indexOf(colors[1]);
    this.color3_value = COLORS.indexOf(colors[2]);
    if(this.color1_value == -1|| this.color2_value == -1 || this.color3_value == -1)
      throw new Error("invalid color");
  }

  get label() {
    let res_val = (this.color1_value*10 + this.color2_value)*Math.pow(10,this.color3_value);
    if(res_val/1000 > 1)
      return `Resistor value: ${res_val/1000} kiloohms`;
    return `Resistor value: ${res_val} ohms`;
  }
}
