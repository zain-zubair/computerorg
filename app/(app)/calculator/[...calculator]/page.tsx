import NumSysConvert from '@/components/calculators/NumSysConvert';

export default function Calculator({
  params,
}: {
  params: { calculator: string };
}) {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <header className="items-center flex flex-col justify-center">
        <h1 className="text-2xl ">Test</h1>
        <h2>Confirm your answers and feel at ease</h2>
      </header>

      <NumSysConvert />
    </main>
  );
}
