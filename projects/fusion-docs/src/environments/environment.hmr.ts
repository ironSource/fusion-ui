import {Environment, commonEnvironment} from './environment.common';

export const environment: Environment = {
    ...commonEnvironment,
    production: false,
    hmr: true
};
