import Header from '@/components/Header';
import { calculators } from '@/content/calculatorCards';

export default function CalculatorHome() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <Header main="Calculators" sub="Confirm your answers and feel at ease" />
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
