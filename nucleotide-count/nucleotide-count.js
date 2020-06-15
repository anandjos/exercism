export class NucleotideCounts {
  static parse(dna) {
    let count = '';
    let nucleotide_count = { A: 0,C: 0,G: 0,T: 0 };
    dna.split('').forEach(function(nucleotide){
      if(!nucleotide_count.hasOwnProperty(nucleotide))
        throw new RangeError("Invalid nucleotide in strand");
      nucleotide_count[nucleotide]++;
    });
    for(let [key,value] of Object.entries(nucleotide_count))
      count = count + ' ' + String(value);
    return count.trim();
  }
}
