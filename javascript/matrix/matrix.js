export class Matrix {
  constructor(matrix) {
    this.row = [];
    this.column = [];
    let rows = matrix.split('\n');
    let r = rows.length,c = rows[0].split(' ').length;
    let i = 0;
    for(i =0; i<r; i++)
      this.row.push(rows[i].split(' ').map(element => Number(element)));
    for(i =0; i<c; i++)
      {
        let row = [];
        for(let j =0; j<r; j++)
        {
          row.push(this.row[j][i]);
        }
        this.column.push(row);
      }
  }

  get rows() {
    return this.row;
  }

  get columns() {
    return this.column;
  }
}
