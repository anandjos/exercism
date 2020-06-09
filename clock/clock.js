export class Clock {
  constructor(hour=0,min=0) {
    this.hour = hour;
    this.min = min;
    this.time = '';
  }

  toString() {
    this.hour = this.hour + Math.floor(this.min/60);
    this.hour = this.hour%24;
    this.min = this.min%60;
    if(this.min<0)
      this.min=60+this.min;
    if(this.hour<0)
      this.hour = 24+this.hour;
    this.time = `${this.hour}` + ':';
    if(this.hour.toString().length==1)
      this.time = '0' + this.time;
    if(this.min.toString().length==1)
      this.time = this.time + '0'; 
    this.time = this.time + `${this.min}`;
    return this.time;
  }

  plus(min) {
    let clock = new Clock(this.hour,this.min);
    clock.min = clock.min + min;
    return clock;
  }

  minus(min) {
    let clock = new Clock(this.hour,this.min);
    clock.min = clock.min - min;
    return clock;
  }

  equals(clock2) {
    clock2.toString();
    let clock1 = new Clock(this.hour,this.min);
    clock1.toString();
    return (clock1.hour == clock2.hour && clock1.min == clock2.min);
  }
}
