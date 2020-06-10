const Day = {
  0:'Sunday',1:'Monday',2:'Tuesday',3:'Wednesday',4:'Thursday',5:'Friday',6:'Saturday'
}

const find_day_val = day => {
  for(let i=0; i<7; i++)
  {
    if(Day[i] == day)
      return i;
  }
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
    case 'last':date = 22;break;
  }
  let day_val = find_day_val(day);
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
