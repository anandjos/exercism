const Day = {
  0:'Sunday',1:'Monday',2:'Tuesday',3:'Wednesday',4:'Thursday',5:'Friday',6:'Saturday'
}
export const meetup = (year,month,descriptor,day) =>  {
  let date = 1;
  switch(descriptor)
  {
    case 'first':break;
    case 'second':date = 8;break;
    case 'third':date = 15;break;
    case 'fourth':date = 22;break;
    case 'teenth':date = 13;break;
  }
  let day_val,i=0;
  //console.log(Day[i]);
  while(i<7)
  {
    if(Day[i] == day)
    {
      day_val = i;
      break;
    }
    i++;
  }
  let new_date = new Date(year,month-1,date);
  while(new_date.getDay() != day_val)
  {
    date++;
    new_date = new Date(year,month-1,date);
  }
  return new_date;
}
