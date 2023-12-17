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
      <header className="flex flex-col justify-center items-center gap-3">
        <h1 className="text-4xl md:text-7xl font-semibold">
          <span className="text-Green">Computer</span>
          <span className="">Org</span>
        </h1>
        <h2 className="text-sm text-center md:text-lg font-mono">
          An interactive learning platform for Computer Organization
        </h2>
      </header>

      <div className="mb-32 grid text-center md:max-w-5xl md:w-full md:mb-0 md:grid-cols-3 md:text-left">
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
          className="hover:text-Green duration-300 transition-colors"
        >
          Designed & developed by TMU students
        </Link>
      </footer>
    </main>
  );
}
