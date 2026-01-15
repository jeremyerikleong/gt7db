import { IndicatorProps } from '../types';

export default function Indicator({ icon, title, active }: IndicatorProps) {
    return (
        <li className={`flex flex-col flex-wrap w-4 gap-2 mr-3 ${!active && 'hidden'}`}>
            <h4 className="text-[8px] uppercase">{title}</h4>
            {icon}
        </li>
    )
}