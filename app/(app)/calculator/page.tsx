import { calculators } from '@/content/calculatorCards';

export default function CalculatorHome() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <header className="items-center flex flex-col justify-center">
        <h1 className="text-2xl ">Calculators</h1>
        <h2>Confirm your answers and feel at ease</h2>
      </header>
      <ul className="p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {calculators.map((calculator) => (
          <li
            key={1}
            className="bg-white/10 rounded-lg shadow-lg overflow-hidden group col-span-1 md:col-span-1 lg:col-span-1"
          >
            {calculator}
          </li>
        ))}
      </ul>
    </main>
  );
}

{
  /* Calculator for converting between bases
  const [decimalValue, setDecimalValue] = useState('');
  const [binaryValue, setBinaryValue] = useState('');
  const [octalValue, setOctalValue] = useState('');
  const [hexadecimalValue, setHexadecimalValue] = useState('');

  const handleDecimalChange = (event: { target: { value: any } }) => {
    const value = event.target.value;
    setDecimalValue(value);

    // Convert to other bases
    if (!isNaN(value)) {
      setBinaryValue(parseInt(value, 10).toString(2));
      setOctalValue(parseInt(value, 10).toString(8));
      setHexadecimalValue(parseInt(value, 10).toString(16).toUpperCase());
      // Handle invalid input
      setBinaryValue('Invalid input');
      setOctalValue('Invalid input');
      setHexadecimalValue('Invalid input');
    }
  };
  */
}

/*
{
  <div className="">
    <h2>Base Converter</h2>
    <label>
      Decimal:
      <input
        className="text-black"
        type="text"
        value={decimalValue}
        onChange={handleDecimalChange}
      />
    </label>
    <p>Binary: {binaryValue}</p>
    <p>Octal: {octalValue}</p>
    <p>Hexadecimal: {hexadecimalValue}</p>
  </div>;
}
*/
