export class Squares {
  constructor(limit) {
    this.limit = limit;
  }

  get sumOfSquares() {
    let result = 0;
    for(let i = 1; i<=this.limit; i++)
      result += i*i;
    return result;
  }

  get squareOfSum() {
    let result = 0;
      result = Math.pow(this.limit*(this.limit+1)/2,2);
    return result;
  }

  get difference() {
    return this.squareOfSum-this.sumOfSquares;
  }
}
