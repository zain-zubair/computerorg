export function numberToCharacter(number: number): string {
  // 65 is the ASCII code for 'A'
  return String.fromCharCode(65 + number);
}

export const filler = {
  question: '',
  options: [],
  answers: [],
};

export function checkSign(number: string): number {
  return number.toString()[0] == '1' ? -1 : 1;
}
