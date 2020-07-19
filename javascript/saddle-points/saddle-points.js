const saddle_point = {
  row : 0,
  column : 0
};
export const saddlePoints = (array) => {
  let saddle_points = [];
  for(let r = 0; r<array.length; r++)
  {
    let row = array[r];
    for(let i = 0; i<row.length; i++)
    {
      if(row[i] == Math.max(...row))
      {
        if(row[i] == array.reduce(function(acc = 99,ro){ return Math.min(acc,ro[i]);},99))
        {
          let point = Object.create(saddle_point);
          point.row = r+1;
          point.column = i+1;
          saddle_points.push(point);
        }
      }
    }
  }
  return saddle_points;
};
