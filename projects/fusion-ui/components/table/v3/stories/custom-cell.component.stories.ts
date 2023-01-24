import {Story, Meta} from '@storybook/angular';
import {moduleMetadata} from '@storybook/angular';
import {dedent} from 'ts-dedent';
import {CommonModule} from '@angular/common';
import {SvgModule} from '@ironsource/fusion-ui/components/svg';
import {environment} from '../../../../../../stories/environments/environment';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {CustomCellEditComponent} from './custom-cell-edit/custom-cell-edit.component';

export default {
    title: 'Components/Table/Column Custom/Custom Cell Component',
    component: CustomCellEditComponent,
    decorators: [
        moduleMetadata({
            declarations: [],
            imports: [CommonModule, SvgModule.forRoot({assetsPath: environment.assetsPath}), IconModule]
        })
    ],
    parameters: {
        docs: {
            description: {
                component: dedent`**Custom table cell component** Used in example for table custom editable cell`
            }
        }
    }
} as Meta<CustomCellEditComponent>;

const CustomCellTemplate: Story<CustomCellEditComponent> = (args: CustomCellEditComponent) => ({
    props: {...args}
});

// region Default
export const Default = CustomCellTemplate.bind({});
Default.args = {
    data: 250
};
// endregion
