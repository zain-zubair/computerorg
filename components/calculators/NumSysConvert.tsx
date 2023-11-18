'use client';

import { useState } from 'react';
import { checkSignBit, flipBits } from '@/utils/test';

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
    if (input.trim() === '') {
      alert('Please enter a valid input');
      return;
    }

    if (
      outputBase.trim() === '' ||
      isNaN(parseInt(outputBase)) ||
      parseInt(outputBase) < 2 ||
      parseInt(outputBase) > 36
    ) {
      alert('Please enter a valid output base');
      return;
    }

    const number = input.slice(0, input.indexOf(')'));
    const base = parseInt(input.slice(input.indexOf(')') + 1));

    const numberInDecimal = parseInt(number, base);

    let final;
    switch (conversionType) {
      case '1sComplement':
      case '2sComplement':
        const flipped = flipBits(number, conversionType);
        final = (flipped * checkSignBit(number)).toString(parseInt(outputBase));
        break;

      case 'signMagnitude':
        const trimmed = parseInt(number.slice(1), 2);
        final = (Math.abs(trimmed) * checkSignBit(number)).toString(
          parseInt(outputBase)
        );
        break;

      case 'unsigned':
      default:
        final = numberInDecimal.toString(parseInt(outputBase));
        break;
    }

    setConvertedNumber(final === 'NaN' ? 'Invalid input' : final);
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
            disabled={input.slice(input.indexOf(')') + 1) !== '2'}
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
        <div className="text-white mt-4 flex items-center justify-center">
          {convertedNumber && (
            <div className="border-2 border-white px-3 py-1 rounded-md border-white/25">
              {convertedNumber}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NumSysConvert;
