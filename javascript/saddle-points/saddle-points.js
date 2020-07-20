export const saddlePoints = (matrix) => {
  let saddle_points = [];
  for(let r = 0; r < matrix.length; r++)
  {
    let ROW = matrix[r];
    for(let c = 0; c < ROW.length; c++)
      if(ROW[c] == Math.max(...ROW))
        if(ROW[c] == matrix.reduce( function(acc,row){ return Math.min(acc,row[c]); },Number.MAX_SAFE_INTEGER ))
          saddle_points.push({column:c+1, row:r+1});
  }
  return saddle_points;
};
