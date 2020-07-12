export class Matrix {
  constructor(matrix) {
    const rows = matrix.split('\n');
    const r = rows.length,c = rows[0].length;
    this.row = Array.from({ length: r}).map((_,index) => rows[index].split(' ').map(element => Number(element)) );
    this.column = Array.from({ length: c}).map((_,index) => Array.from({ length: r}).map((_,ind) => this.row[ind][index]));
  }

  get rows() {
    return this.row;
  }

  get columns() {
    return this.column;
  }
}
