import { addons } from '@storybook/addons';
import theme from './theme';

addons.setConfig({
    theme,
    showPanel: true,
    panelPosition: 'bottom'
});
