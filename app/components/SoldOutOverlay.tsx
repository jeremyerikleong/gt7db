import { SoldOutOverlayProps } from '../types';

export default function SoldOutOverlay({ visible, label }: SoldOutOverlayProps) {
    if (!visible) return null;

    return (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className={`flex items-center -rotate-25 opacity-70 border-2 border-red-500 p-2`} >
                <span className="text-2xl font-extrabold uppercase text-red-500">
                    {label}
                </span>
            </div>
        </div>
    )
}