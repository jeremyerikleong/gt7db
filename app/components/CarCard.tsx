'use client';

import Image from 'next/image';
import { CarCardProps } from '../types';
import Indicator from './Indicator';
import { BsExclamationTriangle } from 'react-icons/bs';
import { FiAward } from 'react-icons/fi';
import { PiEngine } from 'react-icons/pi';
import { IoTicketOutline } from 'react-icons/io5';
import { IoTrophyOutline } from 'react-icons/io5';

export default function CarCard({ regionFlag, carName, carManufacturer, carPrice, carState, estimateDays, isNew, isRewardCar, canEngineSwap, isLotteryCar, isTrophyCar }: CarCardProps) {
    const indicators = [
        {
            title: 'reward car',
            icon: FiAward,
            active: isRewardCar,
        },
        {
            title: 'engine swap',
            icon: PiEngine,
            active: canEngineSwap,
        },
        {
            title: 'ticket reward',
            icon: IoTicketOutline,
            active: isLotteryCar,
        },
        {
            title: 'trophy car',
            icon: IoTrophyOutline,
            active: isTrophyCar,
        },
    ];

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
        <li className={`flex flex-col justify-between gap-8 ${carState === 'soldout' ? 'bg-white/10 opacity-40' : 'bg-white/15'}  backdrop-blur-lg rounded-md shadow-lg border border-white/10 p-3 sm:p-4 relative`}>
            {carState === 'soldout' &&
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="flex items-center -rotate-25 opacity-70 border-2 border-red-500 p-2">
                        <span className="text-2xl font-extrabold uppercase text-red-500">
                            Sold Out
                        </span>
                    </div>
                </div>
            }

            <div className="flex justify-between">
                <div>
                    <div className="flex items-center gap-2">
                        <Image
                            src={regionFlag}
                            width={20}
                            height={20}
                            alt={carName} />

                        <h3 className="font-medium text-sm uppercase">{carManufacturer}</h3>
                    </div>

                    <h2
                        className="font-bold mt-1 cursor-pointer"
                        onClick={handleClick}>
                        {carName}
                    </h2>
                </div>

                {isNew && <div><h4 className="border border-amber-400 p-1 text-amber-400 text-xs rounded">New</h4></div>}
            </div>

            <div className="flex justify-between items-end">
                <div className="flex items-center gap-4">
                    {indicators.map(({ title, icon: Icon, active }) => (
                        <Indicator
                            key={title}
                            title={title}
                            active={active}
                            icon={
                                <Icon
                                    size={20}
                                    className={active === null ? 'opacity-25' : ''}
                                />
                            }
                        />
                    ))}
                </div>


                <div className="flex flex-col items-end">
                    {carState === 'limited' && <div className="flex items-center gap-2">
                        <BsExclamationTriangle color="red" size={16} />
                        <h4 className="text-sm text-red-600 font-bold">Limited Stock</h4>
                    </div>}

                    <h3>
                        <span className="text-sm">Cr.</span>
                        <span className="text-lg md:text-xl font-bold ml-2">{carPrice}</span>
                    </h3>

                    <h5 className={`text-xs text-gray-400 mt-1 capitalize ${estimateDays === 1 && 'animate-pulse'}`}>
                        {carAvailabilityTextDisplay(estimateDays)}
                    </h5>
                </div>
            </div>
        </li >
    )
}