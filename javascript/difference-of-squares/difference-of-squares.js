export class Squares {
  constructor(limit) {
    this.limit = limit;
    this.sumofsq = 0;
    this.sqofsum = 0;
  }

  get sumOfSquares() {
    for(let i = 1; i<=this.limit; i++)
      this.sumofsq += i*i;
    return this.sumofsq;
  }

  get squareOfSum() {
      this.sqofsum = Math.pow(this.limit*(this.limit+1)/2,2);
    return this.sqofsum;
  }

  get difference() {
    return this.sqofsum-this.sumofsq;
  }
}
