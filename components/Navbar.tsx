import Link from 'next/link';

export default function Navbar() {
  const navItems = [
    { label: 'Learn', href: '/learn' },
    { label: 'Tests', href: '/tests' },
    { label: 'Calculator', href: '/calculator' },
  ];

  return (
    <nav className="flex justify-between items-center p-4">
      <div>
        <Link href="/" className="text-lg font-semibold">
          ComputerOrg
        </Link>
      </div>
      <ul className="flex">
        {navItems.map((link, index) => (
          <li key={index}>
            <Link href={link.href} className="mx-4 nav">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
