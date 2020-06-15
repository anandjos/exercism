const score = { 1: 128,2: 64, 3: 32,4: 16,5: 8,6: 4,7: 2,8: 1};
const items = { 128: 'cats',64: 'pollen',32: 'chocolate',16: 'tomatoes',8: 'strawberries',4: 'shellfish',2: 'peanuts',1: 'eggs' }; 
export class Allergies {
  constructor(num) {
    this.score = num;
    this.allergic_items = [];
    for(let [key,value] of Object.entries(score))
    {
      if(this.score>=value)
      {
        this.score =this.score%value;
        this.allergic_items.unshift(items[value]);
        if(this.score == 0)
          break;
      }
    }
  }

  list() {
    return this.allergic_items;
  }

  allergicTo(item) {
    return this.allergic_items.includes(item);
  }
}
