import { BasicTableWithEditStore, BriefRecordType } from './base';

export interface AdsorptionParams {
    freundlich: {
        k: number;
        nth: number;
    };
    kinetics: {
        filmDiffusion: {
            correlation: boolean;
            value?: number; // cm/s, ignored when correlation === true
        };
        surfaceDiffusion: {
            correlation: boolean;
            value?: number; // cm^2/s
        };
        poreDiffusion: {
            correlation: boolean;
            value?: number; // cm^2/s
        };
        spdfr: number;
        tortuosity: number;
    };
}

export class AdsorptionStore extends BasicTableWithEditStore<AdsorptionParams> {
    public DEFAULT_STORE: BriefRecordType<AdsorptionParams> = {
        name: '',
        description: '',
        freundlich: {
            k: 0,
            nth: 0
        },
        kinetics: {
            filmDiffusion: {
                correlation: false,
                value: 0
            },
            surfaceDiffusion: {
                correlation: false,
                value: 0
            },
            poreDiffusion: {
                correlation: false,
                value: 0
            },
            spdfr: 1,
            tortuosity: 0
        }
    };

    public STORE_NAME = 'AdsorptionStore';

    constructor() {
        super(['database', 'adsorption']);
    }
}