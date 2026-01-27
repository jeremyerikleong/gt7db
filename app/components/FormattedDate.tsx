import type { FormattedDateProps } from '../types';

export default function formattedDate({ date }: FormattedDateProps): string {
    return new Date(date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric"
    });
}