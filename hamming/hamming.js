export const compute = (strand1,strand2) => {
  let hamming_dis = 0;
  let l1 =strand1.length,l2 = strand2.length;
  if(l1==l2 && l1==0)
    return hamming_dis;
  if(l1==0)
    throw new Error("left strand must not be empty");
  if(l2==0)
    throw new Error("right strand must not be empty");
  if(l1!=l2)
    throw new Error("left and right strands must be of equal length");
  for(let i=0; i<l1; i++)
  {
    if(strand1[i] != strand2[i])
      hamming_dis += 1;
  }
  return hamming_dis;
}
