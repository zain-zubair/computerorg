'use client';

import { useState } from 'react';
import { checkSignBit, flipBits, parseInput } from '@/utils/test';
import NumSysHelp from './NumSysHelp';

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

    const { number, base } = parseInput(input);

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
        final = parseInt(number, base).toString(parseInt(outputBase));
        break;
    }

    setConvertedNumber(final === 'NaN' ? 'Invalid input' : final);
  };

  return (
    <div className="flex flex-col items-center justify-center p-10">
      <div className="flex flex-col p-6 md:p-8 rounded-lg bg-Navy-light/30 shadow-md">
        <div className="flex flex-col md:flex-row gap-2 text-sm">
          <div className="flex-1">
            <input
              className="w-full px-3 py-1 font-mono bg-Navy-light outline-none rounded-md hover:ring-1 focus:ring-2 ring-Slate transition-all duration-300"
              placeholder="e.g. 1101)2"
              value={input}
              onChange={handleInputChange}
            />
          </div>
          <div className="w-full md:w-[4rem]">
            <input
              className="w-full md:text-center px-3 py-1 font-mono bg-Navy-light outline-none rounded-md hover:ring-1 focus:ring-2 ring-Slate transition-all duration-300"
              placeholder="Base"
              value={outputBase}
              onChange={handleOutputBaseChange}
            />
          </div>
        </div>

        <div className="flex flex-col gap-4 mt-2 md:mt-4 text-sm">
          <div className="relative flex">
            <select
              className="w-full px-3 py-1 font-mono bg-Navy-light outline-none rounded-md hover:ring-1 focus:ring-2 ring-Slate transition-all duration-300"
              value={conversionType}
              onChange={handleConversionTypeChange}
              disabled={input.slice(input.indexOf(')') + 1) !== '2'} // disable if input is not in binary form
            >
              <option value="unsigned">Unsigned</option>
              <option value="1sComplement">1&apos;s Complement</option>
              <option value="2sComplement">2&apos;s Complement</option>
              <option value="signMagnitude">Sign and Magnitude</option>
            </select>
          </div>

          <div className="flex flex-col md:flex-row gap-2 md:gap-0 text-sm">
            <div className="flex-1 w-full max-w-[300px] px-3 py-1 font-mono bg-Navy-lightest rounded-md md:rounded-r-none overflow-x-auto whitespace-nowrap">
              {convertedNumber || 'Output'}
            </div>
            <div className="w-full md:w-[4rem]">
              <button
                onClick={convertNumber}
                className="w-full px-3 py-1 font-mono bg-Navy-light font-semibold rounded-md md:rounded-l-none  hover:ring-1 focus:ring-2 ring-Slate transition-all duration-300"
              >
                Calc
              </button>
            </div>
          </div>
        </div>
      </div>

      <NumSysHelp />
    </div>
  );
};

export default NumSysConvert;

{
  /*
<p
  className={`${
    input.slice(input.indexOf(')') + 1) !== '2'
      ? 'md:visible md:opacity-100 absolute left-full top-0 transition-opacity ease-in duration-300'
      : 'hidden'
  } duration-300 ml-5 md:ml-0 opacity-0 font-mono invisible text-sm text-white/80`}
>
  Other conversion types only available for binary inputs.
</p>;
  */
}
