import { ReactNode } from 'react';

export interface CarProps {
    carid: string;
    name: string;
    credits: number;
    region: string;
    state: 'available' | 'soldout' | 'limited';
    manufacturer: string;
    estimatedays: number;
    new: boolean;
    rewardcar: boolean;
    engineswap: boolean;
    lotterycar: boolean;
    trophycar: boolean;
}

export interface CarCardProps {
    carId: string;
    regionFlag: string;
    carName: string;
    carManufacturer: string;
    carState: 'available' | 'soldout' | 'limited';
    carPrice: string;
    estimateDays: number;
    isNew: boolean;
    isRewardCar: boolean;
    canEngineSwap: boolean;
    isLotteryCar: boolean;
    isTrophyCar: boolean;
    onClick?: () => void;
}

export interface UsedCarsProps {
    cars: CarProps[];
}

export type IndicatorProps = {
    title: string
    icon: ReactNode;
    active: boolean;
}

export type IndicatorDefinitionProps = {
    title: string;
    explanation: string;
}

export type NavLinkProps = {
    href: string;
    label: string;
}

export type SectionTitleProps = {
    logo: string;
    title: string;
}

export type FormattedDateProps = {
    date: string | number | Date;
}

export interface LegendaryCarsProps {
    carid: string;
    region: string;
    name: string;
    manufacturer: string;
    state: 'normal' | 'soldout' | 'limited';
    credits: number;
    estimatedays: number;
    new: boolean;
    onClick?: () => void;
}

export interface LegendaryCarListProps {
    cars: LegendaryCarsProps[];
}