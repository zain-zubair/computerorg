'use client';

import { useState } from 'react';
import { checkSign } from '@/utils/test';

const NumSysConvert = () => {
  const [outputBase, setOutputBase] = useState('');
  const [input, setInput] = useState('');
  const [convertedNumber, setConvertedNumber] = useState('');
  const [conversionType, setConversionType] = useState('');

  const handleOutputBaseChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setOutputBase(event.target.value);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  const handleConversionTypeChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setConversionType(event.target.value);
  };

  const convertNumber = () => {
    const number = input.slice(0, input.indexOf(')'));
    const base = parseInt(input.slice(input.indexOf(')') + 1));

    const numberInDecimal = parseInt(number, base);

    let final;
    switch (conversionType) {
      case '1sComplement':
        const binary1sComplement = (numberInDecimal >>> 0).toString(2);
        const invertedBinary1sComplement = binary1sComplement
          .split('')
          .map((bit) => (bit === '0' ? '1' : '0'))
          .join('');
        final = (
          parseInt(invertedBinary1sComplement, 2) * checkSign(number)
        ).toString(parseInt(outputBase));
        break;

      case '2sComplement':
        const binary2sComplement = (numberInDecimal >>> 0).toString(2);
        const invertedBinary2sComplement = binary2sComplement
          .split('')
          .map((bit) => (bit === '0' ? '1' : '0'))
          .join('');
        const twosComplement = (
          parseInt(invertedBinary2sComplement, 2) + 1
        ).toString(2);
        final = (parseInt(twosComplement, 2) * checkSign(number)).toString(
          parseInt(outputBase)
        );
        break;

      case 'signMagnitude':
        const trimmed = parseInt(number.slice(1), 2);
        final = (Math.abs(trimmed) * checkSign(number)).toString(
          parseInt(outputBase)
        );
        break;

      case 'unsigned':
      default:
        final = numberInDecimal.toString(parseInt(outputBase));
        break;
    }

    setConvertedNumber(final);
  };

  return (
    <div className="flex items-center justify-center p-10">
      <div className="flex flex-col border-[0] border-white/10 p-8 rounded-lg shadow-md">
        <div className="flex gap-4 text-sm">
          <input
            className="grow px-3 py-1 font-mono bg-black outline-none border-b-2 border-white/25 hover:border-white/40 focus:border-white/80"
            placeholder="eg. 1101)2"
            value={input}
            onChange={handleInputChange}
          />
          <input
            className="w-[4rem] text-center px-3 py-1 font-mono bg-black outline-none border-b-2 border-white/25 hover:border-white/40 focus:border-white/80"
            placeholder="Base"
            value={outputBase}
            onChange={handleOutputBaseChange}
          />
          <select
            className="px-3 py-1 font-mono bg-black outline-none border-b-2 border-white/25 hover:border-white/40 focus:border-white/80"
            value={conversionType}
            onChange={handleConversionTypeChange}
          >
            <option value="unsigned">Unsigned</option>
            <option value="1sComplement">1&apos;s Complement</option>
            <option value="2sComplement">2&apos;s Complement</option>
            <option value="signMagnitude">Sign and Magnitude</option>
          </select>
        </div>
        <button
          onClick={convertNumber}
          className="text-white/30 py-2 px-4 mt-4 rounded-md border-2 border-white/25 hover:border-white/40 hover:text-white/40 active:border-white/80"
        >
          Convert
        </button>

        <div className="text-white mt-4">{convertedNumber}</div>
      </div>
    </div>
  );
};

export default NumSysConvert;
