import Image from 'next/image';
import { SectionTitleProps } from '../types';

export default function SectionTitle({ logo, title }: SectionTitleProps) {
    return (
        <div className="flex items-center gap-3">
            <Image
                src={logo}
                width={120}
                height={80}
                alt="logo"
                className={`${title === 'Used car dealership' ? 'invert' : ''}`}
            />

            <span className="w-0.5 h-5 bg-white"></span>

            <h2 className="section-title">{title}</h2>
        </div>
    )
}