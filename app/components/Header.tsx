import Image from 'next/image';

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

            <ul className="flex gap-6">

            </ul>
        </nav>
    )
}