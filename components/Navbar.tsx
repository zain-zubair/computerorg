'use client';

import { useState } from 'react';
import Link from 'next/link';
import { redirect } from 'next/dist/server/api-utils';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [
    { label: 'Learn', href: '/learn' },
    { label: 'Tests', href: '/tests' },
    { label: 'Calculator', href: '/calculator' },
  ];

  return (
    <nav className="p-3 sm:p-4 z-50 sticky top-0 left-0 right-0 bg-Navy flex flex-wrap items-center justify-between shadow-sm">
      <div className="group mr-6 z-40 flex items-center flex-shrink-0">
        <Link href="/" className="text-lg font-semibold">
          <span className="group-hover:text-Green duration-300 transition-colors">
            Computer
          </span>
          Org
        </Link>
      </div>
      <div className="block sm:hidden z-40">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="px-3 py-2 border border-Slate rounded-md"
        >
          <svg
            className="fill-Slate h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div
        className={`${
          isOpen ? 'fixed' : 'hidden'
        } w-full h-full top-0 left-0 z-10 bg-Navy opacity-90 sm:hidden`}
      >
        <div className="flex items-center justify-center h-full">
          <ul className="text-lg">
            {navItems.map((link, index) => (
              <li key={index} className="mb-4">
                <Link
                  href={link.href}
                  className="nav"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="hidden sm:flex gap-8">
        {navItems.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className="font-mono hover:text-Green duration-300 transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
