import Image from 'next/image';
import { CarCardProps } from '../types';
import { BsExclamationTriangle } from 'react-icons/bs';

export default function CarCard({ regionFlag, carName, carManufacturer, carPrice, carState, onClick }: CarCardProps) {
    return (
        <li className={`flex flex-col justify-between gap-8 ${carState === 'soldout' ? 'bg-white/10 opacity-40' : 'bg-white/15'}  backdrop-blur-lg rounded-md shadow-lg border border-white/10 p-4 relative`} onClick={onClick}>
            {carState === 'soldout' &&
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="flex flex-col items-center rotate-335 opacity-70">
                        <span className="w-36 h-0.5 bg-red-500 mb-3" />
                        <span className="text-2xl font-extrabold uppercase text-red-500">
                            Sold Out
                        </span>
                        <span className="w-36 h-0.5 bg-red-500 mt-3" />
                    </div>
                </div>
            }
            <div>
                <div className="flex items-center gap-2">
                    <Image
                        src={regionFlag}
                        width={20}
                        height={20}
                        alt={carName} />

                    <h3 className="font-medium text-sm uppercase">{carManufacturer}</h3>
                </div>

                <h2 className="font-bold mt-1">{carName}</h2>
            </div>

            <div className="flex flex-col items-end">
                {carState === 'limited' && <div className="flex items-center gap-2">
                    <BsExclamationTriangle color="red" size={16} />
                    <h4 className="text-sm text-red-600 font-bold">Limited Stock</h4>
                </div>}

                <h3>
                    <span className="text-sm">Cr.</span>
                    <span className="text-xl font-bold ml-2">{carPrice}</span>
                </h3>
            </div >
        </li >
    )
}