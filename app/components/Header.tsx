import Image from 'next/image';
import Link from 'next/link';
import NavLink from './NavLink';

export default function Header() {
    return (
        <nav className="container-layout flex justify-between items-center">
            <div>
                <Image
                    src="/logo.png"
                    width={80}
                    height={100}
                    alt="logo"
                    className="invert"
                />
            </div>

            <ul className="flex gap-4">
                <li>
                    <NavLink href="/" label="used cars" />
                </li>
            </ul>
        </nav>
    )
}