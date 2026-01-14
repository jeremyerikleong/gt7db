export interface CarProps {
    carid: string;
    name: string;
    credits: number;
    region: string;
    state: string;
    manufacturer: string;
    estimatedays: number;
}

export interface CarCardProps {
    regionFlag: string;
    carName: string;
    carManufacturer: string;
    carState: string;
    carPrice: string;
    estimateDays: number;
    onClick?: () => void;
}

export interface UsedCarsProps {
    cars: CarProps[];
}