export interface ModalConfiguration {
    id?: string;
    width?: string;
    height?: string;
    defaultModalState?: OpenCloseType;
    error?: string;
    hasFooter?: boolean;
    footerAlignLeft?: boolean;
    footerSmall?: boolean;
    headerText?: string;
    headerInfoText?: string;
    isHeaderBorder?: boolean;
    submitButton?: {
        submitButtonClass?: string;
        submitButtonText?: string;
        submitButtonDisabled?: boolean;
    };
    cancelButton?: {
        cancelButtonText?: string;
        cancelButtonHidden?: boolean;
        cancelButtonClass?: string;
    };
}

export type OpenCloseType = 'open' | 'close';
