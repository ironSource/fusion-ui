import {tooltipConfiguration} from '@ironsource/fusion-ui/components/tooltip';

export interface ToggleButtonGroupOption {
    id: number | string;
    label?: string;
    icon?: string;
    tooltip?: string;
    tooltipConfiguration?: tooltipConfiguration;
}

export type ToggleButtonGroupSize = 'small' | 'medium' | 'large' | 'xlarge';
export type ToggleButtonGroupColor = 'default' | 'primary';
