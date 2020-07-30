export class SpiralMatrix {
  static ofSize(size) {
    let i=0,j=0,r1=0,c1=0,r2=0,c2=0,s=1;
    let spiral_matrix = new Array(size).fill(0).map(_ => new Array(size).fill(0));
    while(s <= size*size)
    {
      for(i=c2; i<size-c1; i++)
        spiral_matrix[j][i] = s++;

        i--; r1++;

      for(j=r1; j<size-r2 ;j++)
        spiral_matrix[j][i] = s++;

        j--; c1++;

      for(i=size-c1-1; i>=c2; i--)
        spiral_matrix[j][i] = s++;

        i++; r2++;

      for(j=size-r2-1; j>=r1; j--)
        spiral_matrix[j][i] = s++;

        j++; c2++;
   }
      return spiral_matrix;
  }
}
