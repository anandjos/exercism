export const rows = (height) => {
  if(height == 0)
    return [];
  let pascals_triangle = [[1]];
  for(let i = 1; i<height; i++)
  {
    let row = [];
    for(let j = 0; j<=i; j++)
    {
      let previousLeft = pascals_triangle[i-1][j-1],previousRight = pascals_triangle[i-1][j];
      row.push( (previousLeft + previousRight)||1 );
    }
    pascals_triangle.push(row);
  }
  return pascals_triangle;
};
