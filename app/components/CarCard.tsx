'use client';

import Image from 'next/image';
import { CarCardProps } from '../types';
import { BsExclamationTriangle } from 'react-icons/bs';


export default function CarCard({ regionFlag, carName, carManufacturer, carPrice, carState, estimateDays }: CarCardProps) {
    function carAvailabilityTextDisplay(estimateDays: number): string {
        if (estimateDays > 1) {
            return `available for ${estimateDays} more days`
        }

        if (estimateDays > 0 && estimateDays <= 1) {
            return 'last day available'
        }

        return 'not available'
    }

    function handleClick() {
        const query = encodeURIComponent(`${carName} site:gran-turismo.fandom.com`);
        window.open(
            `https://www.google.com/search?tbm=isch&q=${query}`,
            '_blank'
        );
    }

    return (
        <li className={`flex flex-col justify-between gap-8 ${carState === 'soldout' ? 'bg-white/10 opacity-40' : 'bg-white/15'}  backdrop-blur-lg rounded-md shadow-lg border border-white/10 p-4 relative cursor-pointer`}
            onClick={handleClick}>
            {carState === 'soldout' &&
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="flex items-center -rotate-45 opacity-70 border-2 border-red-500 p-2">
                        <span className="text-2xl font-extrabold uppercase text-red-500">
                            Sold Out
                        </span>
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

                <h5 className={`text-xs text-gray-400 mt-1 capitalize ${estimateDays === 1 && 'animate-pulse'}`}>
                    {carAvailabilityTextDisplay(estimateDays)}
                </h5>
            </div >
        </li >
    )
}