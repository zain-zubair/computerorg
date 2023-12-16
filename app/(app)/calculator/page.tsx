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
            className="bg-Navy-light rounded-lg shadow-lg overflow-hidden group col-span-1 md:col-span-1 lg:col-span-1"
          >
            {calculator}
          </li>
        ))}
      </ul>
    </main>
  );
}
