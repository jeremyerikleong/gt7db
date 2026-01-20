import { getCars } from '@/app/lib/getCars';
import CarCard from './components/CarCard';
import { UsedCarsProps } from './types';
import { indicatorDefinition } from './constants';
import IndicatorDefinition from './components/IndicatorDefinition';

export default async function Home() {
  const carData: {
    updatetimestamp: string | number | Date; used: UsedCarsProps
  } = await getCars();
  const { cars } = carData.used;

  const formattedDate = new Date(carData.updatetimestamp).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });

  const creditFormatter = new Intl.NumberFormat('en-US');

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-col min-h-screen w-full container-layout py-8">
        <h5>Last updated on {formattedDate}</h5>

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
