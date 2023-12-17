import CalculatorCard from '@/components/cards/CalculatorCard';
import conversions from '@/public/conversions.png';

export const calculators = [
  <CalculatorCard
    key={1}
    title="Numbering Systems Converter"
    image={conversions}
    description="Convert between any bases you can think of."
    link="/calculator/numberingSystems"
  />,
  <CalculatorCard
    key={2}
    title="Boolean Algebra Simplifier"
    image={conversions}
    description="To be implemented soon."
    link="/calculator/"
  />,
  <CalculatorCard
    key={3}
    title="Karnaugh Maps Solver"
    image={conversions}
    description="To be implemented soon."
    link="/calculator/"
  />,
];
