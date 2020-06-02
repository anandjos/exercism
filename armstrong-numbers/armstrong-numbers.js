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
