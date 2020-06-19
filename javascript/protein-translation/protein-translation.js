export const translate = (str) => {
  let protein = [];
  if(str == null)
    return protein;
  for(var i=0; i < str.length; i=i+3) 
  {
  switch(str.substring(i,i+3))
  {
    case 'UAA':
    case 'UAG':
    case 'UGA':return protein;
    case 'AUG':protein.push("Methionine");break;
    case 'UUU':
    case 'UUC':protein.push("Phenylalanine");break;
    case 'UUA':
    case 'UUG':protein.push("Leucine");break;
    case 'UCU':
    case 'UCC':
    case 'UCA':
    case 'UCG':protein.push("Serine");break;
    case 'UAU':
    case 'UAC':protein.push("Tyrosine");break;
    case 'UGU':
    case 'UGC':protein.push("Cysteine");break;
    case 'UGG':protein.push("Tryptophan");break;
    default: throw new RangeError("Invalid codon");
  }
  }
  return protein;
};
