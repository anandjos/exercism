const ALPHABETS = [...'abcdefghijklmnopqrstuvwxyz'];
export const isPangram = (line) => {
  return ALPHABETS.every( alphabet => line.toLowerCase().includes(alphabet));
};
