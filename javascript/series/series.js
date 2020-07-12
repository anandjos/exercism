export class Series {
  constructor(series) {
    this.series = series;
  }

  get digits() {
    return this.series.split('').map(element => Number(element));
  }

  slices(series_size) {
    if(series_size > this.series.length)
      throw new Error("Slice size is too big.");
    return Array.from({ length:this.series.length - series_size + 1}).map((_,index1) =>
      Array.from({ length:series_size}).map((_,index2) => this.digits[index1+index2]));
  }
}
