import Image from 'next/image';
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

                <li>
                    <NavLink href="/legendary" label="legendary cars" />
                </li>
            </ul>
        </nav>
    )
}