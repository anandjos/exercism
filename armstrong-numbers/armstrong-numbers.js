//
// This is only a SKELETON file for the 'Armstrong Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isArmstrongNumber = (num) => {
var n=num,sum=0;
var d=num.toString().length;
while(n>0)
{
  var dig=n%10;
  sum=sum+Math.pow(dig,d);
  n=n/10;
}
return sum==num
};
