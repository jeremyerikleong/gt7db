import { CarAvailabilityTextProps } from '../types';

export default function CarAvailabilityText({ estimateDays, className = '' }: CarAvailabilityTextProps) {
    let text = 'not available';
    let isUrgent = false;

    if (estimateDays > 1) {
        text = `available for ${estimateDays} more days`;
    } else if (estimateDays > 0 && estimateDays <= 1) {
        text = 'last day available';
        isUrgent = true;
    }

    return (
        <h5 className={`text-xs text-gray-400 mt-1 capitalize ${isUrgent ? 'animate-pulse' : ''} ${className}`}>
            {text}
        </h5>
    )
}
