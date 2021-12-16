// common interface
export interface Environment {
    production?: boolean;
    assetsPath?: string;
    developersReference?: string;
    hmr?: boolean;
}

// common configurations
export const commonEnvironment: Environment = {
    developersReference: 'http://developers.supersonic.com',
    assetsPath: 'https://fusion.ironsrc.net/assets',
    hmr: false
};
