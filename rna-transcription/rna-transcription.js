const dna_to_rna = { G: 'C', C: 'G', T: 'A', A: 'U' };
export const toRna = (dna_seq) => {
  let dna = dna_seq.split('');
  const rna = dna.map(function(nucleotide){
    return dna_to_rna[nucleotide];
  });
    return rna.join('');
};
