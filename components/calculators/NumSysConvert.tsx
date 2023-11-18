'use client';

import React, { useState } from 'react';

const NumSysConvert = () => {
  const [outputBase, setOutputBase] = useState('');
  const [input, setInput] = useState('');
  const [convertedNumber, setConvertedNumber] = useState('');

  const handleOutputBaseChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setOutputBase(event.target.value);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  const convertNumber = () => {
    const number = input.slice(0, input.indexOf(')'));
    const base = parseInt(input.slice(input.indexOf(')') + 1));

    const numberInDecimal = parseInt(number, base);
    const final =
      outputBase === '10'
        ? numberInDecimal.toString()
        : numberInDecimal.toString(parseInt(outputBase));

    setConvertedNumber(final);
  };

  return (
    <div className="flex items-center justify-center p-10">
      <div className="flex flex-col border-2 border-white/10 p-8 rounded-lg shadow-md">
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

{
  /* Converter with text input
LOGIC:

const [numberBase, setNumberBase] = useState('');
  const [outputBase, setOutputBase] = useState('');
  const [inputNumber, setInputNumber] = useState('');
  const [convertedNumber, setConvertedNumber] = useState('');

  const handleNumberBaseChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setNumberBase(event.target.value);
  };

  const handleOutputBaseChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setOutputBase(event.target.value);
  };

  const handleInputNumberChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setInputNumber(event.target.value);
  };

  const convertNumber = () => {
    const numberBaseInt = parseInt(numberBase);
    const outputBaseInt = parseInt(outputBase);
    const inputNumberInt = parseInt(inputNumber, numberBaseInt);
    const convertedNumberStr = inputNumberInt.toString(outputBaseInt);
    setConvertedNumber(convertedNumberStr);
  };

JSX:
    <div className="flex items-center justify-center p-10">
      <div className="flex flex-col bg-gray-900 p-8 rounded-lg shadow-md">
        <div className="grid grid-cols-5 gap-4">
          <div className="flex flex-col text-center">
            <input
              type="text"
              id="numberBase"
              value={numberBase}
              onChange={handleNumberBaseChange}
              placeholder="Input"
              className="text-center w-20 bg-gray-800 text-white border border-gray-700 rounded-md p-2 mt-1 focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="col-start-5 flex flex-col text-center">
            <input
              type="text"
              id="outputBase"
              value={outputBase}
              onChange={handleOutputBaseChange}
              placeholder="Output"
              className="text-center w-20 bg-gray-800 text-white border border-gray-700 rounded-md p-2 mt-1 focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>

        <input
          type="text"
          id="inputNumber"
          value={inputNumber}
          onChange={handleInputNumberChange}
          placeholder="Number"
          className="bg-gray-800 text-center text-white border border-gray-700 rounded-md p-2 mt-1 focus:outline-none focus:border-blue-500"
        />

        <button
          onClick={convertNumber}
          className="bg-blue-500 text-white py-2 px-4 mt-4 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
        >
          Convert
        </button>

        <div className="text-white mt-4">{convertedNumber}</div>
      </div>
    </div>
    */
}
