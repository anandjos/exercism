export class ComplexNumber {
  constructor(real,imaginary) {
    this.real_part = real;
    this.imag_part = imaginary;
  }

  get real() {
    return this.real_part;
  }

  get imag() {
    return this.imag_part;
  }

  add(complex_num) {
    return new ComplexNumber(this.real + complex_num.real,this.imag + complex_num.imag);    
  }

  sub(complex_num) {
    return new ComplexNumber(this.real - complex_num.real,this.imag - complex_num.imag);    
  }

  div(complex_num) {
    let denom = Math.pow(complex_num.real,2) + Math.pow(complex_num.imag,2);
    let real = (this.real*complex_num.real + this.imag*complex_num.imag)/denom;
    let imag = (this.imag*complex_num.real - this.real*complex_num.imag)/denom;
    return new ComplexNumber(real,imag);
  }

  mul(complex_num) {
    let real = (this.real*complex_num.real - this.imag*complex_num.imag);
    let imag = (this.imag*complex_num.real + this.real*complex_num.imag);
    return new ComplexNumber(real,imag);
    
  }

  get abs() {
    return Math.sqrt(Math.pow(this.real,2) + Math.pow(this.imag,2));
  }

  get conj() {
    return new ComplexNumber(this.real,0-this.imag);
  }

  get exp() {
    let real = Math.pow(Math.E,this.real)*Math.cos(this.imag);
    let imag = Math.pow(Math.E,this.real)*Math.sin(this.imag);
    return new ComplexNumber(real,imag);
  }
}
