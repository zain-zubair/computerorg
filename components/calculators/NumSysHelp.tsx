'use client';

import { useState } from 'react';

export default function NumSysHelp() {
  const [help, toggleHelp] = useState(false);
  const handleToggle = () => {
    toggleHelp(!help);
  };
  return (
    <section className="max-w-md mx-auto mt-8">
      <h2 className="text-sm text-center font-mono opacity-40 hover:opacity-80">
        <button onClick={handleToggle} className="underline">
          How To Use
        </button>
      </h2>
      {help && (
        <div className="flex flex-col gap-4">
          <div className="flex flex-col">
            <input
              className="w-full px-3 py-1 font-mono text-sm bg-black outline-none border-b-2 border-white/25 hover:border-white/40 focus:border-white/80"
              placeholder="eg. 1101)2"
            />
            <p className="mt-1 mb-5 text-sm">
              Enter a number followed by a &quot;)x&quot;, where x is indicating
              the base of the input. For example, 1101)2 is a binary input (base
              2).
            </p>
          </div>

          <div className="flex flex-col">
            <input
              className="text-sm px-3 py-1 font-mono bg-black outline-none border-b-2 border-white/25 hover:border-white/40 focus:border-white/80"
              placeholder="Base"
            />
            <p className="mt-1 mb-5 text-sm">
              Enter the base which you want your input to convert to. Note that
              numbers outside the range of 2-36 are invalid.
            </p>
          </div>

          <div className="flex flex-col">
            <select className="w-full text-sm peer px-3 py-1 font-mono bg-black outline-none border-b-2 border-white/25 hover:border-white/40 focus:border-white/80">
              <option value="unsigned">Unsigned</option>
              <option value="1sComplement">1&apos;s Complement</option>
              <option value="2sComplement">2&apos;s Complement</option>
              <option value="signMagnitude">Sign and Magnitude</option>
            </select>
            <p className="mt-1 text-sm">
              Select whether the input is unsigned, 1&apos;s/2&apos;s
              complement, or sign and magnitude. All conversion types other than
              unsigned are only available for binary.
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
