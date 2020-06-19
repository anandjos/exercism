const Day = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

export const meetup = (year,month,descriptor,day) =>  {
  let date = 1;
  switch(descriptor)
  {
    case 'first' : break;
    case 'second': date = 8;  break;
    case 'third' : date = 15; break;
    case 'fourth': date = 22; break;
    case 'teenth': date = 13; break;
    case 'last'  : date = 22; break;
  /*22 is the minimum value possible for the
   * last occurance of a day in a month */
  }
  let day_val = Day.indexOf(day);
  let new_date = new Date(year,month-1,date);
  while(new_date.getDay() != day_val)
  {
    date++;
    new_date = new Date(year,month-1,date);
  }
  if(descriptor == 'last')
  {
    new_date = new Date(year,month-1,date+7);
    if(date > new_date.getDate())
      new_date = new Date(year,month-1,date);
  }
  return new_date;
}
