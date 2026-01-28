import SectionTitle from '../components/SectionTitle';
import type { Metadata } from 'next';
import type { LegendaryCarListProps } from '../types';
import { getCars } from '../lib/getCars';
import formattedDate from '../components/FormattedDate';
import LegendaryCarCard from '../components/LegendaryCarCard';
import IndicatorDefinition from '../components/IndicatorDefinition';
import { indicatorDefinitionForLegendaryCars } from '../constants';

export const metadata: Metadata = {
    title: 'Legendary Cars | GT7DB',
    description: 'This is a fan-made, non-commercial project created for personal use to view the latest legendary cars available.',
}

export default async function LegendaryPage() {
    const carData: {
        updatetimestamp: string | number | Date; legend: LegendaryCarListProps;
    } = await getCars();
    const { cars } = carData.legend;

    return (
        <div className="container-wrapper">
            <main className="container-layout main-container-layout">
                <SectionTitle logo={'/hagerty-logo.png'} title='collections' />
                <h5 className="text-sm mt-2 mb-4">Last updated on {formattedDate({ date: carData.updatetimestamp })}</h5>

                <ul className="w-full grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-4">
                    {cars.map((car, index) => (
                        <li key={`${car.carid}-${index}`}>
                            <LegendaryCarCard
                                carid={car.carid}
                                region={`https://flagsapi.com/${car.region.toUpperCase()}/flat/64.png`}
                                name={car.name}
                                manufacturer={car.manufacturer}
                                state={car.state}
                                credits={car.credits}
                                estimatedays={car.estimatedays}
                                new={car.new}
                            />
                        </li>
                    ))}
                </ul>

                <div className="my-4">
                    <h2 className="font-bold text-lg mb-4">Indicator Definitions</h2>

                    {indicatorDefinitionForLegendaryCars.map(indicator => (
                        <IndicatorDefinition
                            key={indicator.id}
                            title={indicator.title}
                            explanation={indicator.explanation}
                        />
                    ))}
                </div>
            </main>
        </div>
    )
}