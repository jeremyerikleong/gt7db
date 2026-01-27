import { getCars } from '@/app/lib/getCars';
import CarCard from './components/CarCard';
import { UsedCarsProps } from './types';
import { indicatorDefinition } from './constants';
import IndicatorDefinition from './components/IndicatorDefinition';
import SectionTitle from './components/SectionTitle';
import type { Metadata } from 'next';
import formattedDate from './components/FormattedDate';

export const metadata: Metadata = {
  title: 'GT7 used car list | GT7DB',
  description: 'This is a fan-made, non-commercial project created for personal use to view the latest used cars available.',
};

export default async function Home() {
  const carData: {
    updatetimestamp: string | number | Date; used: UsedCarsProps
  } = await getCars();
  const { cars } = carData.used;

  const creditFormatter = new Intl.NumberFormat('en-US');

  return (
    <div className="flex min-h-screen items-center justify-center font-sans bg-background">
      <main className="flex flex-col min-h-screen w-full container-layout py-8">
        <SectionTitle logo='/auto-logo.png' title='Used car dealership' />
        <h5 className="text-sm mt-2 mb-4">Last updated on {formattedDate({ date: carData.updatetimestamp })}</h5>

        <ul className="w-full grid sm:grid-cols-2 md:grid-cols-3 gap-4 my-4">
          {cars.map(car => (
            <CarCard
              key={car.carid}
              carId={car.carid}
              regionFlag={`https://flagsapi.com/${car.region.toUpperCase()}/flat/64.png`}
              carName={car.name}
              carManufacturer={car.manufacturer}
              carPrice={creditFormatter.format(car.credits)}
              carState={car.state}
              estimateDays={car.estimatedays}
              isNew={car.new}
              isRewardCar={car.rewardcar}
              canEngineSwap={car.engineswap}
              isLotteryCar={car.lotterycar}
              isTrophyCar={car.trophycar}
            />
          ))}
        </ul>

        <div className="my-4">
          <h2 className="font-bold text-lg mb-4">Indicator Definitions</h2>

          {indicatorDefinition.map(indicator => (
            <IndicatorDefinition
              key={indicator.id}
              title={indicator.title}
              explanation={indicator.explanation}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
