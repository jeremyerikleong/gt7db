import { IndicatorDefinitionProps } from '../types';

export default function IndicatorDefinition({ title, explanation }: IndicatorDefinitionProps) {
    return (
        <div className="flex flex-col my-3 md:flex-row md:gap-4 md:my-2 text-sm">
            <h4 className="mb-0.5 md:mb-0 md:w-40 md:shrink-0 capitalize font-bold">{title}: </h4>
            <span className="flex-1">{explanation}</span>
        </div>
    )
}