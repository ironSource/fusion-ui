import {componentWrapperDecorator, Meta, moduleMetadata, StoryObj} from '@storybook/angular';
import {CommonModule} from '@angular/common';
import {FormCardComponent} from './form-card.component';
import {SvgModule} from '@ironsource/fusion-ui/components/svg';
import {environment} from '../../../../../stories/environments/environment';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {ButtonComponent} from '@ironsource/fusion-ui/components/button/v4';

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
        content: 'Any content here...'
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
        <fusion-button variant="outlined">Cancel</fusion-button>
        <fusion-button color="primary">Save</fusion-button>
    </ng-container>            
</fusion-form-card>
`
    })
};
