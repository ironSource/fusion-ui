import {StoryFn, Meta} from '@storybook/angular';
import {moduleMetadata} from '@storybook/angular';
import {dedent} from 'ts-dedent';
import {CommonModule} from '@angular/common';
import {SvgModule} from '@ironsource/fusion-ui/components/svg';
import {environment} from '../../../../../../../stories/environments/environment';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {CustomCellEditComponent} from './custom-cell-edit.component';

export default {
    title: 'V3/Components/Table/Column Custom Edit/Custom Cell Component',
    component: CustomCellEditComponent,
    decorators: [
        moduleMetadata({
            declarations: [],
            imports: [CommonModule, SvgModule.forRoot({assetsPath: environment.assetsPath}), IconModule]
        })
    ],
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component: dedent`**Custom table cell component** Used in example for table custom editable cell`
            }
        }
    }
} as Meta<CustomCellEditComponent>;

const CustomCellTemplate: StoryFn<CustomCellEditComponent> = (args: CustomCellEditComponent) => ({
    props: {...args}
});

export const Default = {
    render: CustomCellTemplate,

    args: {
        data: 250,
        remaining: 50
    }
};

export const Unlimited = {
    render: CustomCellTemplate,

    args: {
        data: null
    }
};

export const NoRemaining = {
    render: CustomCellTemplate,

    args: {
        data: 250
    }
};

export const ZeroRemaining = {
    render: CustomCellTemplate,

    args: {
        data: 50,
        remaining: 0
    }
};
