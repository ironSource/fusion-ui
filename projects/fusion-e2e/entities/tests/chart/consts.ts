import {ChartLabelTestIdModifiers} from '@ironsource/fusion-ui/entities/test-ids-modifiers';
import {getTestId, getTestIdSelector} from '../../global/utils';

export const chartStoryId = 'v4-components-datavisualization-charts-barchart--basic';
export const defaultTestId = 'charts-default';

export const labelTestId = getTestId(defaultTestId, ChartLabelTestIdModifiers.LABEL);

export const loadedPageSelector = getTestIdSelector(labelTestId);
