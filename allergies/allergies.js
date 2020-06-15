const allergens = ['eggs','peanuts','shellfish','strawberries','tomatoes','chocolate','pollen','cats'];
export class Allergies {
  constructor(num) {
    this.num = num%256;
    this.score = (this.num%256).toString(2).split('').reverse();
    this.allergic_items = [];
    for(let i = 0; i<this.score.length; i++)
      if(this.score[i] == 1)
        this.allergic_items.push(allergens[i]);
  }

  list() {
    return this.allergic_items;
  }

  allergicTo(allergen) {
    return this.allergic_items.includes(allergen);
  }
}
