export const rows = (height) => {
  let pascals_triangle = [];;
  for(let i = 0; i<height; i++)
  {
    let row = [];
    for(let j = 0; j<=i; j++)
      if(pascals_triangle[i-1] != undefined)
        row.push( (pascals_triangle[i-1][j-1] + pascals_triangle[i-1][j])||1 );
      else 
        row.push(1);
    pascals_triangle.push(row);
  }
  return pascals_triangle;
};
