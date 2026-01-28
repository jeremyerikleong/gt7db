'use client';

import { LegendaryCarsProps } from '../types';
import Image from 'next/image';
import CarAvailabilityText from './CarAvailabilityText';
import SoldOutOverlay from './SoldOutOverlay';

export default function LegendaryCarCard({ carid, region, name, manufacturer, state, credits, estimatedays, new: isNew }: LegendaryCarsProps) {
    const creditFormatter = new Intl.NumberFormat('en-US');

    function viewCar() {
        const query = encodeURIComponent(`${name} site:gran-turismo.fandom.com`);
        window.open(
            `https://www.google.com/search?tbm=isch&q=${query}`,
            '_blank'
        );
    }

    return (
        <div className={`legendary-card group ${state === 'soldout' ? 'bg-white/10 opacity-40' : ''} group`}>
            <SoldOutOverlay visible={state === 'soldout'} label={'sold out'} />

            <Image
                src="/hagerty-stripe.png"
                width={32}
                height={32}
                alt="Hagerty logo stripe"
                className="absolute top-0 right-1/4 translate-x-1/4"
            />

            <span className="absolute top-0 left-0 w-2 h-2 border-t border-l border-gray-400 rounded-tl-sm" />
            <span className="absolute top-0 right-0 w-2 h-2 border-t border-r border-gray-400 rounded-tr-sm" />
            <span className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-gray-400 rounded-bl-sm" />
            <span className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-gray-400 rounded-br-sm" />

            <div className="mt-8">
                <div className="flex justify-center mb-4">
                    <Image
                        src={region}
                        width={36}
                        height={36}
                        alt={region} />
                </div>

                <h3 className="text-sm text-gray-400">{manufacturer}</h3>

                <h2 className="font-bold">{name}</h2>

                <div className="legendary-card-divider"></div>

                <div className="flex justify-between items-center">
                    <h3>
                        <span className="text-sm">Cr.</span>
                        <span className="text-lg md:text-xl font-bold ml-2">{creditFormatter.format(credits)}</span>
                    </h3>
                    {isNew && <>
                        <h4 className="border border-gray-400 p-1 text-gray-400 text-xs rounded w-max">New</h4>
                    </>}
                </div>

                <CarAvailabilityText estimateDays={estimatedays} />

                <button className="btn-view" onClick={viewCar}>
                    View Car
                </button>
            </div>
        </div>
    )
}