export class Triplet {
  constructor(num1,num2,num3) {
    this.a = num1;
    this.b = num2;
    this.c = num3;
  }

  sum() {
    return this.a + this.b + this.c;
  }

  product() {
    return this.a*this.b*this.c;
  }

  isPythagorean() {
    return this.a**2 + this.b**2 == this.c**2;
  }
  static where(conditions) {
    let triplets = []; 
    let min = 3,max = 3,sum;
    if(conditions.hasOwnProperty('minFactor'))
      min = conditions.minFactor;
    if(conditions.hasOwnProperty('sum'))
      sum = conditions.sum;
    for(let i = min; i<= conditions.maxFactor; i++)
    {
      for(let j = i+1; j<= conditions.maxFactor; j++)
      {
        for(let  k = j+1; k<=conditions.maxFactor; k++)
        {
          let triplet = new Triplet(i,j,k);
          if(sum != undefined)
            if(triplet.sum() != sum)
              continue;
          if(triplet.isPythagorean())
            triplets.push(triplet);
        }
      }
    }
    return triplets;    
  }
}
