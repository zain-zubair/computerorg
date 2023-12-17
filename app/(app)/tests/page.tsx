import Header from '@/components/Header';
import { tests } from '@/content/testCards';

export default function TestsHome() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <Header
        main="Practice Tests"
        sub="Hone your skillset with our practice tests"
      />
      <ul className="p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {tests.map((test, index) => (
          <li key={index} className="col-span-1 md:col-span-1 lg:col-span-1">
            {test}
          </li>
        ))}
      </ul>
    </main>
  );
}
