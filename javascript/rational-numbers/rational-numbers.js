export class Rational {
  constructor(p,q) {
    this.p = p;
    this.q = q;
  }

  add(num) {
    return new Rational(this.p*num.q + this.q*num.p,this.q*num.q).reduce(); 
  }

  sub(num) {
    return new Rational(this.p*num.q - this.q*num.p,this.q*num.q).reduce();
  }

  mul(num) {
    return new Rational(this.p*num.p,this.q*num.q).reduce();
  }

  div(num) {
    return new Rational(this.p*num.q,this.q*num.p).reduce();
  }

  abs() {
    return new Rational(Math.abs(this.p),Math.abs(this.q));
  }

  exprational(power) {
    return new Rational(Math.pow(this.p,power),Math.pow(this.q,power));
  }

  expreal(exp) {
    return parseFloat(Math.pow(exp,this.p/this.q).toFixed(2));
  }

  reduce() {
     let p = this.p,q = this.q;
    for(let i = Math.abs(this.q); i>1; i--)
    {
      if(q%i == 0)
        if(p%i == 0)
        {
          p = p/i;
          q = q/i;
        }
    }
    if(p/q<0)
      return new Rational(-Math.abs(p),Math.abs(q));
    return new Rational(Math.abs(p),Math.abs(q));
  }
}
