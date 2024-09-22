import {componentWrapperDecorator, Meta, moduleMetadata, StoryObj} from '@storybook/angular';
import {action} from '@storybook/addon-actions';
import {CommonModule} from '@angular/common';
import {FormCardComponent} from './form-card.component';
import {SvgModule} from '@ironsource/fusion-ui/components/svg';
import {environment} from '../../../../../stories/environments/environment';
import {ButtonComponent} from '@ironsource/fusion-ui/components/button/v4';

const actionsData = {
    onActionButtonClicked: action('onActionButtonClicked')
};

export default {
    title: 'V4/Components/Inputs/FormCard',
    component: FormCardComponent,
    decorators: [
        moduleMetadata({
            declarations: [],
            imports: [CommonModule, SvgModule.forRoot({assetsPath: environment.assetsPath}), ButtonComponent]
        }),
        componentWrapperDecorator(story => `<div style="width: 800px;">${story}</div>`)
    ],
    tags: ['autodocs'],
    parameters: {
        options: {
            showPanel: true,
            panelPosition: 'bottom'
        }
    },
    args: {
        title: 'Description card title',
        content: 'Any content here...',
        onActionButtonClicked: actionsData.onActionButtonClicked
    }
} as Meta<FormCardComponent>;

type Story = StoryObj<FormCardComponent>;

export const Basic: Story = {
    render: args => ({
        props: {...args},
        template: `
<fusion-form-card>
    <ng-container slot="form-card-title">{{ title }}</ng-container>
    <ng-container slot="form-card-content">{{ content }}</ng-container>
    <ng-container slot="form-card-actions">
        <fusion-button variant="outlined" (click)="onActionButtonClicked('cancel')">Cancel</fusion-button>
        <fusion-button color="primary"  (click)="onActionButtonClicked('save')">Save</fusion-button>
    </ng-container>            
</fusion-form-card>
`
    })
};
