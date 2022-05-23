import {Injectable} from '@angular/core';
import {isNullOrUndefined} from '@ironsource/fusion-ui/utils';
import {ChartData as ChartJsData, ChartDataset as ChartJsDataSets} from 'chart.js';
import {ChartData} from './entities/chart-data';
import {ChartLegend} from './entities/chart-legend';
import {ERROR_MESSAGES} from './error-messages';
import {ChartType} from './entities/chart-type.enum';

@Injectable()
export class ChartDataService {
    parseChartData(data: ChartData, type: ChartType): ChartJsData {
        let parsed: ChartJsData = void 0; // void 0 returns undefined and can not be overwritten while undefined can be overwritten.
        switch (type) {
            case ChartType.Line:
                parsed = {
                    labels: this.getLegends(data),
                    datasets: this.getDataSet(data)
                };
                break;
            case ChartType.Bar:
                parsed = this.getTotals(data);
                break;
            case ChartType.Doughnut:
            case ChartType.Pie:
                parsed = this.getPieData(data);
                break;
        }

        if (!parsed) {
            throw new Error(`${ERROR_MESSAGES.configuration_not_valid} ${type}`);
        }
        return parsed;
    }

    setLastDotted(dataset: ChartJsDataSets[]): ChartJsDataSets[] {
        const dottedOption = {borderDash: [3, 5]};
        // duplicate dataset with dotted option
        return dataset.reduce((acc, item) => {
            const count = item.data.length;
            if (count > 2) {
                const data1 = [...item.data];
                const data2 = [...item.data];

                data1.pop();
                data2.fill(null, 0, count - 2);
                acc.push({...item, ...{data: data1}}, {...item, ...{data: data2}, ...dottedOption});
            } else {
                // just update with "doted"
                acc.push({...item, ...dottedOption});
            }
            return acc;
        }, []);
    }

    private getDataSet(data: ChartData): ChartJsDataSets[] {
        const dataset: ChartJsDataSets[] = [];
        const dataKeys = Object.keys(data.data);
        data.legends.forEach((label: ChartLegend, idx) => {
            const dataValues: number[] = [];
            dataKeys.forEach(key => {
                dataValues.push(data.data[key][idx]);
            });
            dataset.push(
                Object.assign(
                    {
                        id: label.id,
                        label: label.displayName,
                        data: dataValues,
                        displayFormat: !isNullOrUndefined(label.displayFormat) ? label.displayFormat : null
                    },
                    !isNullOrUndefined(label.hidden) ? {hidden: label.hidden} : {}
                )
            );
        });
        return dataset;
    }

    private getLegends(data: ChartData): string[] {
        return Object.keys(data.data);
    }

    private getTotals(data: ChartData): ChartJsData /*{labels: string[], datasets: {data: number[]}[]}*/ {
        const legends: Array<string> = [];
        const dataset: Array<number> = [];
        data.legends.forEach((label: ChartLegend, idx) => {
            legends.push(label.displayName);
            if (!isNullOrUndefined(label.value)) {
                dataset.push(label.value);
            } else if (!isNullOrUndefined(data.data)) {
                const dataKeys = Object.keys(data.data);
                dataset.push(
                    Number(
                        dataKeys
                            .reduce((sum: number, key: string) => {
                                sum += data.data[key][idx];
                                return sum;
                            }, 0)
                            .toFixed(2)
                    )
                );
            } else {
                throw new Error(ERROR_MESSAGES.data_parse_exception);
            }
        });

        return {
            labels: legends,
            datasets: [
                {
                    data: dataset
                }
            ]
        };
    }

    private getPieData(data: ChartData): ChartJsData /*{labels: string[], datasets: {data: number[]}}*/ {
        const legends: Array<string> = [];
        const dataset: Array<number> = [];
        if (Array.isArray(data.data)) {
            data.data
                .sort((a, b) => b.value - a.value)
                .forEach(item => {
                    legends.push(item.displayText);
                    dataset.push(item.value);
                });
        } else {
            Object.keys(data.data)
                .map(key => [key, data.data[key]] as any)
                .sort((a, b) => b[1] - a[1])
                .forEach(item => {
                    legends.push(item[0]);
                    dataset.push(item[1]);
                });
        }

        return {
            labels: legends,
            datasets: [
                {
                    data: dataset,
                    legends
                } as any
            ]
        };
    }
}
