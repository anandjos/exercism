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

  static where({maxFactor,minFactor = 3,sum}) {
    let triplets = []; 
    for(let i = minFactor; i<= maxFactor; i++)
    {
      for(let j = i+1; j<= maxFactor; j++)
      {
        for(let  k = j+1; k<= maxFactor; k++)
        {
          if(sum != undefined)
            if(i+j+k != sum)
              continue;
          if(i**2 + j**2 == k**2)
            triplets.push(new Triplet(i,j,k));
        }
      }
    }
    return triplets;    
  }
}
