export interface ChartLegend {
    displayName: string | string[];
    id: number | string;
    value?: number;
    hidden?: boolean;
    icon?: string;
    imageUrl?: string;
    displayFormat?: string; // 'currency' | 'shortCurrency' | 'number:1.0-0' | 'percent:1.2-2', etc.
    color?: string;
}
