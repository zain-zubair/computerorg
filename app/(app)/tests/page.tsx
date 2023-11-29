import { tests } from '@/content/testCards';

export default function TestsHome() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <header className="items-center flex flex-col justify-center">
        <h1 className="text-2xl ">Practice Tests</h1>
        <h2>Hone your skillset with our practice tests</h2>
        <h2 className="text-center">
          Please note, these tests are just place holders at the moment. <br />
          The real tests will be implemented soon!
        </h2>
      </header>
      <ul className="p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {tests.map((test) => (
          <li key={1} className="col-span-1 md:col-span-1 lg:col-span-1">
            {test}
          </li>
        ))}
      </ul>
    </main>
  );
}
