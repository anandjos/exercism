export class Triangle {
  constructor(a,b,c) {
    this.side1 = a;
    this.side2 = b;
    this.side3 = c;
    this.test = !(a+b<=c||b+c<=a||a+c<=b);
  }
  isEquilateral() {
    return (this.test && (this.side1 == this.side2) && (this.side2 == this.side3));
  }

  isIsosceles() {
    return (this.test && (this.side1 == this.side2||this.side2 == this.side3||this.side1 == this.side3));
  }
  isScalene() {
    return (this.test && !(this.side1 == this.side2||this.side2 == this.side3||this.side1 == this.side3)); 
  }
}
