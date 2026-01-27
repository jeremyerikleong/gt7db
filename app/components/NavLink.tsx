'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NavLinkProps } from '../types';

export default function NavLink({ href, label }: NavLinkProps) {
    const pathname = usePathname();

    return (
        <Link
            href={href}
            className={`nav-link ${pathname === href ? 'active' : ''}`}>
            {label}
        </Link>
    )
}
