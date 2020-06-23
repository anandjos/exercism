export const square = (square_no) => {
  if(square_no<1 || square_no>64)
    throw new Error('square must be between 1 and 64');
  return BigInt(Math.pow(2,square_no - 1));
};

export const total = () => {
  return BigInt(Math.pow(2,64)) -BigInt(1);
};
