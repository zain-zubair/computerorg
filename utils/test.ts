export function numberToCharacter(number: number): string {
  // 65 is the ASCII code for 'A'
  return String.fromCharCode(65 + number);
}

export const filler = {
  question: '',
  options: [],
  answers: [],
};

export function checkSignBit(number: string): number {
  return number.toString()[0] == '1' ? -1 : 1;
}

export function flipBits(number: string, type: string): number {
  if (number[0] === '0') {
    // if number is positive just return number
    return parseInt(number, 2);
  } else {
    // if number is negative flip bits and add 1 if 2scomp
    const toAdd = type == '2sComplement' ? 1 : 0;
    return (
      parseInt(
        number
          .split('')
          .map((bit) => (bit == '1' ? '0' : '1'))
          .join(''),
        2
      ) + toAdd
    );
  }
}
