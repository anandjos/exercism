export const toRna = (dna_seq) => {
  let rna_seq = '',i=0;
  while(i<dna_seq.length)
  {
    switch(dna_seq[i])
    {
      case 'G':rna_seq = rna_seq + 'C';break;
      case 'C':rna_seq = rna_seq + 'G';break;
      case 'T':rna_seq = rna_seq + 'A';break;
      case 'A':rna_seq = rna_seq + 'U';break;
      default:throw new RangeError("Invalid dna sequence");
    }
        i++;
  }
    return rna_seq;
};
