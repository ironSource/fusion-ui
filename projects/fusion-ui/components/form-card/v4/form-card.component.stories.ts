import {componentWrapperDecorator, Meta, moduleMetadata, StoryObj} from '@storybook/angular';
import {action} from '@storybook/addon-actions';
import {CommonModule} from '@angular/common';
import {FormCardComponent} from './form-card.component';
import {SvgModule} from '@ironsource/fusion-ui/components/svg';
import {environment} from '../../../../../stories/environments/environment';
import {ButtonComponent} from '@ironsource/fusion-ui/components/button/v4';
import {LinkComponent} from '@ironsource/fusion-ui/components/link';
import {SkeletonComponent} from '@ironsource/fusion-ui/components/skeleton';

const actionsData = {
    onActionButtonClicked: action('onActionButtonClicked')
};

export default {
    title: 'V4/Components/Inputs/FormCard',
    component: FormCardComponent,
    decorators: [
        moduleMetadata({
            declarations: [],
            imports: [
                CommonModule,
                SvgModule.forRoot({assetsPath: environment.assetsPath}),
                ButtonComponent,
                LinkComponent,
                SkeletonComponent
            ]
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

export const SurfaceFullyLoaded: Story = {
    render: args => ({
        props: {...args, subtitle: 'Lorem ipsum dolor sit amet consectetur. Consectetur massa sed in urna.'},
        template: `
<fusion-form-card>
    <ng-container slot="form-card-title">{{ title }}</ng-container>
    <ng-container slot="form-card-subtitle">{{ subtitle }}</ng-container>
    <ng-container slot="form-card-header-actions">
        <fusion-link href="#" target="_blank" onclick="return false;">Link</fusion-link>
    </ng-container>
    
    <ng-container slot="form-card-content">{{ content }}</ng-container>
    
    <ng-container slot="form-card-actions">
        <fusion-button variant="outlined" (click)="onActionButtonClicked('cancel')">Cancel</fusion-button>
        <fusion-button color="primary"  (click)="onActionButtonClicked('save')">Save</fusion-button>
    </ng-container>            
</fusion-form-card>
`
    })
};

export const SaveLoading: Story = {
    render: args => ({
        props: {...args},
        template: `
<fusion-form-card>
    <ng-container slot="form-card-title">{{ title }}</ng-container>
    <ng-container slot="form-card-content">{{ content }}</ng-container>
    <ng-container slot="form-card-actions">
        <fusion-button variant="outlined" disabled="true" (click)="onActionButtonClicked('cancel')">Cancel</fusion-button>
        <fusion-button color="primary" loading="true"  (click)="onActionButtonClicked('save')">Save</fusion-button>
    </ng-container>            
</fusion-form-card>
`
    })
};

export const NoButtons: Story = {
    render: args => ({
        props: {...args},
        template: `
<fusion-form-card>
    <ng-container slot="form-card-title">{{ title }}</ng-container>
    <ng-container slot="form-card-content">{{ content }}</ng-container>
</fusion-form-card>
`
    })
};

export const Skeleton: Story = {
    render: args => ({
        props: {...args},
        template: `
<fusion-form-card>
    <ng-container slot="form-card-title">
        <fusion-skeleton style="width: 220px;--fu-skeleton-height: 20px;"></fusion-skeleton>
    </ng-container>
    <ng-container slot="form-card-content">
        <div style="display: flex; flex-direction: column; gap: 24px">
            <fusion-skeleton style="width: 100%;"></fusion-skeleton>
            <fusion-skeleton style="width: 50%;"></fusion-skeleton>
            <fusion-skeleton style="width: 50%;"></fusion-skeleton>
        </div>        
    </ng-container>
</fusion-form-card>
`
    })
};
