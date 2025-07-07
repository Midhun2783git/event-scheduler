// src/components/Navbar.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { href: '/', label: '🏠 Home' },
    { href: '/events/view', label: '📋 All Events' },
    { href: '/events/open', label: '✅ Open Events' },
    { href: '/events/close', label: '❌ Closed Events' },
  ];

  return (
    <nav className="bg-gray-800 text-white px-6 py-4 shadow-md">
      <ul className="flex gap-6 justify-center">
        {navItems.map(({ href, label }) => (
          <li key={href}>
            <Link
              href={href}
              className={clsx(
                "hover:text-blue-300 transition font-medium",
                pathname === href && "text-blue-400 underline"
              )}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
