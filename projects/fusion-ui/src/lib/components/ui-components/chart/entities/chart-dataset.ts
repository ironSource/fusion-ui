export interface ChartDataset {
    id: string | number;
    data: number[];
    label: string;
    legends?: string[];
    displayFormat?: string;
    backgroundColor?: string;
    borderColor?: string;
    pointBorderColor?: string;
    pointBackgroundColor?: string;
    fill?: boolean;
    hidden?: boolean;
}
