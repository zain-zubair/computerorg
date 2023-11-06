import TestCard from '@/components/TestCard';
import conversions from '@/public/conversions.png';

export const tests = [
  <TestCard
    key={1}
    title="Numbering Systems"
    image={conversions}
    description="Work your way through demical, binary, octal, and hex."
    link="/tests/numberingSystems"
  />,
  <TestCard
    key={2}
    title="Boolean Algebra"
    image={conversions}
    description="Practice simplifying boolean expressions."
    link="/tests/booleanAlgebra"
  />,
  <TestCard
    key={3}
    title="Karnaugh Maps"
    image={conversions}
    description="Get comfortable with Kmaps."
    link="/"
  />,
  <TestCard
    key={4}
    title="Coming soon"
    image={conversions}
    description=""
    link="/"
  />,
];
