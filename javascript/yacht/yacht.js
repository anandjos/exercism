export const score = (result,combination) => {
  switch(combination)
  {
    case 'ones': return result.reduce(function(acc,ele){ 
      if(ele == 1) 
        return acc+ele;
      return acc;},0);

    case 'twos': return result.reduce(function(acc,ele){ 
      if(ele == 2) 
        return acc+ele;
      return acc;},0);

    case 'threes': return result.reduce(function(acc,ele){ 
      if(ele == 3) 
        return acc+ele;
      return acc;},0);

    case 'fours': return result.reduce(function(acc,ele){ 
      if(ele == 4) 
        return acc+ele;
      return acc;},0);

    case 'fives': return result.reduce(function(acc,ele){ 
      if(ele == 5) 
        return acc+ele;
      return acc;},0);

    case 'sixes': return result.reduce(function(acc,ele){ 
      if(ele == 6) 
        return acc+ele;
      return acc;},0);

    case 'full house':
      let arr = new Array(6).fill(0);
      let sum = 0;
      for(let ele of result)
      {
        arr[ele-1]++;
        sum = sum + ele;
      }
      for(let ele of arr)
        if(ele != 0 && ele != 2)
          if(ele != 3)
            return 0;
      return sum;

    case 'four of a kind':result.sort();
      let arr2 = new Array(6).fill(0);
      for(let ele of result)
        arr2[ele-1]++;
      for(let ele of arr2)
        if(ele > 1)
          if(ele < 4)
            return 0;
          else return 4*(arr2.indexOf(ele)+1);

    case 'little straight':result.sort();
      for(let i = 0; i<5; i++)
        if(result[i] != i+1)
          return 0;
      return 30;

    case 'big straight':result.sort();
      for(let i = 0; i<5; i++)
        if(result[i] != i+2)
          return 0;
      return 30;

    case 'choice':
      return result.reduce((acc,ele) => acc + ele);

    case 'yacht':
      for(let ele of result)
        if(ele != result[0])
          return 0;
      return 50;
  }
};
