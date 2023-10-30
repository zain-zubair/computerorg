import TestCard from '@/components/TestCard';

export default function TestsHome() {
  const test = [
    <TestCard
      key={1}
      title="Conversions"
      image=""
      description="Work your way through demical, binary, octal, and hex."
      link="link"
    />,
    <TestCard
      key={2}
      title="Boolean Algebra"
      image=""
      description=""
      link="link"
    />,
    <TestCard key={3} title="title" image="" description="" link="link" />,
    <TestCard key={4} title="title" image="" description="" link="link" />,
  ];
  return (
    <main className="flex min-h-screen flex-col p-6">
      <header className="items-center flex flex-col justify-center">
        <h1 className="text-2xl ">Practice Tests</h1>
        <h2>Hone your skillset with our practice tests</h2>
      </header>
      <div className="p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-center">
        {test.map((t) => (
          <div key={1} className="col-span-1 md:col-span-1 lg:col-span-1">
            {t}
          </div>
        ))}
      </div>
    </main>
  );
}
