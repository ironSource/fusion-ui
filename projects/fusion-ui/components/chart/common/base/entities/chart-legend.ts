export interface ChartLegend {
    displayName: string;
    id: number | string;
    value?: number;
    hidden?: boolean;
    displayFormat?: string; // 'currency' | 'shortCurrency' | 'number:1.0-0' | 'percent:1.2-2', etc.
    color?: string;
}
