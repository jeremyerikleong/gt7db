export interface CarProps {
    carid: string;
    name: string;
    credits: number;
    region: string;
    state: 'available' | 'soldout' | 'limited';
    manufacturer: string;
    estimatedays: number;
}

export interface CarCardProps {
    regionFlag: string;
    carName: string;
    carManufacturer: string;
    carState: 'available' | 'soldout' | 'limited';
    carPrice: string;
    estimateDays: number;
    onClick?: () => void;
}

export interface UsedCarsProps {
    cars: CarProps[];
}