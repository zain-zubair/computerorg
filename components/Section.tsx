import Link from 'next/link';

const Section = ({ href, title, desc }: any) => {
  return (
    <Link
      href={href}
      className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-Slate-light hover:bg-Slate-lightest/20"
    >
      <h2 className={`mb-3 text-2xl group-hover:text-Green font-semibold`}>
        {title}{' '}
        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
          -&gt;
        </span>
      </h2>
      <p className={`max-w-[30ch] text-sm opacity-50`}>{desc}</p>
    </Link>
  );
};

export default Section;
