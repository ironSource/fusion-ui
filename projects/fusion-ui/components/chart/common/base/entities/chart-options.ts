/*
 * Created on 2020.4.4 By Andy Kononenko (andyk@ironsrc.com)
 */

export interface ChartBaseDatasetOptions {
    colorSettings: string[];
    fillOpacity: number; // in %
    seriesToShow: number;
    dateFormat?: string; // default MMM dd, yyyy
    lineOptions: ChartLineOptions;
    barOptions: ChartBarOptions;
    pieOptions: ChartPieOptions;
}
interface ChartLineOptions {
    fill: boolean;
    hidden: boolean;
    pointBorderColor?: string;
    pointBackgroundColor?: string;
}
interface ChartBarOptions {
    borderRadius?: number;
    borderWidth: number;
    backgroundColor: string[];
    borderColor: string[];
}

interface ChartPieOptions {
    borderWidth?: number;
    hoverBorderWidth?: number;
    backgroundColor: string[];
}
