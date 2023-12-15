import Link from 'next/link';
import Section from '@/components/Section';

export default function Home() {
  const sections = [
    {
      href: '/learn',
      title: 'Learn',
      desc: 'Learn key computer organization concepts with interactive lessons.',
    },
    {
      href: '/tests',
      title: 'Tests',
      desc: ' Test your computer organization knowledge in any topic, any time.',
    },
    {
      href: '/calculator',
      title: 'Calculator',
      desc: 'Get simplified boolean expressions with steps, Kmap visuals, and more.',
    },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-6 py-10 md:p-24">
      <h1 className="text-4xl md:text-7xl font-semibold">ComputerOrg</h1>
      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        {}
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-left">
        {sections.map((section, index) => (
          <Section
            key={index}
            href={section.href}
            title={section.title}
            desc={section.desc}
          />
        ))}
      </div>

      <footer className="absolute bottom-0 py-3 text-center font-mono text-xs">
        <Link
          href="https://github.com/zain-zubair/computerorg"
          rel="noopener noreferrer"
          target="_blank"
          className="text-white text-opacity-30 hover:text-opacity-90 duration-300"
        >
          Designed and developed by TMU students
        </Link>
      </footer>
    </main>
  );
}
