import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4">
      <div>
        <Link href="/" className="text-lg font-semibold">
          ComputerOrg
        </Link>
      </div>
      <div className="">
        <Link href="/" className="mx-4 hover:font-semibold duration-300">
          Learn
        </Link>
        <Link href="/about" className="mx-4 hover:font-semibold duration-300">
          Tests
        </Link>
        <Link href="/contact" className="mx-4 hover:font-semibold duration-300">
          Calculator
        </Link>
      </div>
    </nav>
  );
}
