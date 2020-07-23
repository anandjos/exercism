const words = [['','one','two','three','four','five','six','seven','eight','nine'],
  [' ten',' eleven',' twelve',' thirteen',' fourteen',' fifteen',' sixteen',' seventeen',' eighteen',' nineteen'],
  ['','',' twenty',' thirty',' forty',' fifty',' sixty',' seventy',' eighty',' ninety']];
const unit = ['',' thousand ',' million ',' billion '];
export class Say {
  inEnglish(number) {
    if(number<0 || number>999999999999)
      throw new Error("Number must be between 0 and 999,999,999,999.");
    if(number == 0)
      return 'zero';
    let num = number;
    let spellnum = '';
    for(let c=0; num != 0; c++)
    {
      let spell = '';
      let sliced = (num%1000).toString();
      let l = sliced.length,i=0;
      if(sliced.length == 3)
        spell = words[0][Number(sliced[i++])] + ' hundred';
      if(sliced.length == 1)
        spell = words[0][Number(sliced[0])];
      else
      {
        if(sliced[i] == '1')
          spell = spell + words[1][Number(sliced[++i])];
        else
        {
          spell = spell + words[2][Number(sliced[i++])] ;
          if((words[2][Number(sliced[i-1])] != '') && (words[0][Number(sliced[i])] != ''))
            spell = spell + '-';
          spell = spell + words[0][Number(sliced[i++])];
        }
      }
      if(spell != '')
        spellnum = spell + unit[c] + spellnum;
      num = Math.floor(num/1000);
    }
  return spellnum.trim();
  }
}

