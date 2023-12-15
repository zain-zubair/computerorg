import NumSysConvert from '@/components/calculators/NumSysConvert';
import Question from '@/types/question';

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

export function parseInput(input: string): { number: string; base: number } {
  const number = input.slice(0, input.indexOf(')'));
  const base = parseInt(input.slice(input.indexOf(')') + 1));

  return { number, base };
}

export function randomizeQuestions(array: Question[]) {
  return array.sort(() => Math.random() - 0.5);
}

export function getItemsFromSlug(name: string) {
  const names: {
    [key: string]: { test: string; title: string; calc: JSX.Element };
  } = {
    numberingSystems: {
      test: 'Numbering Systems',
      title: 'Base Converter',
      calc: <NumSysConvert />,
    },
    booleanAlgebra: { test: '', title: 'Logic Simplifier', calc: <></> },
  };

  return names[name] || false;
}
