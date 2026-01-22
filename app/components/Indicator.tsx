import { IndicatorProps } from '../types';

export default function Indicator({ icon, title, active }: IndicatorProps) {
    return (
        <li className={`flex flex-wrap items-center gap-2 mr-2 ${!active && 'hidden'}`}>
            {icon}
            <h4 className="text-[10px] uppercase">{title}</h4>
        </li>
    )
}