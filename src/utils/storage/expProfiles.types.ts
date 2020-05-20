import { DataStorage, FullRecordType, QuantityValue, StorageInitOptions } from './storage';

export interface WaterInputParams {
    pressure: QuantityValue; // atm
    temperature: QuantityValue; // ℃
    useDensity: boolean; // g/cm^3
    useViscosity: boolean; // g/cm.s
}

export interface PsdmInputParams {
    totalRunTime: QuantityValue; // d
    firstPointDisplayed: QuantityValue; // d
    timeStep: QuantityValue; // d
    numOfAxialElms: number;
    axialCollocatPts: number;
    radialCollocatPts: number;
}

export interface BedInputParams {
    adsorbent: string | null;
    length: QuantityValue; // cm
    diameter: QuantityValue; // cm
    mass: QuantityValue; // g
    flowrate: QuantityValue; // mL/min
    ebct: QuantityValue; // min
}

export interface CorrelationOrInput extends QuantityValue {
    correlation: boolean;
    // value is ignored when correlation === true
}

export interface AdsorptionInputParams {
    contaminant: string | null;
    initConcent: QuantityValue; // ug/L
    freundlich: {
        k: QuantityValue;
        nth: QuantityValue;
    };
    kinetics: {
        filmDiffusion: CorrelationOrInput; // cm/s,
        surfaceDiffusion: CorrelationOrInput; // cm^2/s
        poreDiffusion: CorrelationOrInput; // cm^2/s
        spdfr: QuantityValue;
        tortuosity: QuantityValue;
    };
}

export interface ExpProfileParams {
    water: WaterInputParams;
    psdm: PsdmInputParams;
    bed: BedInputParams;
    adsorption: AdsorptionInputParams;
}

export type ProfileData = FullRecordType<ExpProfileParams>;
