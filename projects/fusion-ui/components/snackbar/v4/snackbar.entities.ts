import {ButtonColor, ButtonSize, ButtonVariant} from '@ironsource/fusion-ui/components/button/v4';

export type SnackbarType = 'default' | 'error' | 'success' | 'warning';
export type SnackbarLocation = 'top-right' | 'top-left' | 'top-center' | 'bottom-right' | 'bottom-left' | 'bottom-center';

export const SnackbarIconByType: Record<SnackbarType, string> = {
    default: 'ph/fill/info',
    error: 'ph/fill/warning-octagon',
    success: 'ph/fill/check-circle',
    warning: 'ph/fill/warning'
};

export interface SnackbarEntity {
    title?: string;
    message?: string;
    type?: SnackbarType;
    duration?: number;
    location?: SnackbarLocation;
    actionButtons?: SnackActionButton[];
}

export interface SnackActionButton {
    label: string;
    color?: ButtonColor;
    variant?: ButtonVariant;
    size?: ButtonSize;
    startIcon?: string;
    disabled?: boolean;
    endIcon?: string;
    onClick: Function;
}
