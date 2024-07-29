import {Meta, moduleMetadata, StoryObj} from '@storybook/angular';
import {CommonModule} from '@angular/common';
import {SvgModule} from '@ironsource/fusion-ui/components/svg';
import {environment} from '../../../../../stories/environments/environment';
import {InputSignal} from '@angular/core';
import {IconData, IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {ChipComponent} from './chip.component';

// todo: as for signal.inputs check this: https://stackoverflow.com/questions/78379300/how-do-i-use-angular-input-signals-with-storybook

export default {
    title: 'V4/Components/DataDisplay/Chip',
    component: ChipComponent,
    decorators: [
        moduleMetadata({
            declarations: [],
            imports: [CommonModule, SvgModule.forRoot({assetsPath: environment.assetsPath}), IconModule]
        })
    ],
    tags: ['autodocs'],
    parameters: {
        options: {
            showPanel: true,
            panelPosition: 'bottom'
        }
    },
    args: {
        label: 'Label' as unknown as InputSignal<string>
    },
    argTypes: {
        label: {control: {type: 'text'}},
        iconName: {control: {type: 'text'}},
        removeIconName: {control: {type: 'text'}},
        removable: {control: {type: 'boolean'}},
        // theme: {control: {type: 'select', options: ['default', 'primary', 'info', 'error', 'success', 'warning', 'dark']}},
        // size: {control: {type: 'radio', options: ['small', 'medium']}},
        // variant: {control: {type: 'radio', options: ['filled', 'outlined']}},
        // shape: {control: {type: 'radio', options: ['square', 'round']}},
        selected: {control: {type: 'boolean'}},
        disabled: {control: {type: 'boolean'}}
    }
} as Meta<ChipComponent>;

type Story = StoryObj<ChipComponent>;

export const Basic: Story = {};

export const Size: Story = {
    render: args => ({
        props: args,
        template: `
<div style="display: flex; align-items: center; gap:14px">
    <fusion-chip label="Small"></fusion-chip>
    <fusion-chip label="Medium" size="medium"></fusion-chip>
</div>
        `
    })
};

export const Themes: Story = {
    render: args => ({
        props: args,
        template: `
<div style="display: flex; align-items: center; gap:14px">
    <fusion-chip label="Default"></fusion-chip>
    <fusion-chip label="Primary" theme="primary"></fusion-chip>
    <fusion-chip label="Info" theme="info"></fusion-chip>
    <fusion-chip label="Error" theme="error"></fusion-chip>
    <fusion-chip label="Warn" theme="warning"></fusion-chip>
    <fusion-chip label="Success" theme="success"></fusion-chip>
    <fusion-chip label="Dark" theme="dark"></fusion-chip>
    <fusion-chip label="Disabled" [disabled]="true"></fusion-chip>
    <fusion-chip label="Selected" [selected]="true"></fusion-chip>
</div>
        `
    })
};

export const Variant: Story = {
    render: args => ({
        props: args,
        template: `
<div style="display: flex; align-items: center; gap:14px">
    <fusion-chip label="Filled"></fusion-chip>
    <fusion-chip label="Outlined" variant="outlined"></fusion-chip>
</div>
        `
    })
};

export const Style: Story = {
    render: args => ({
        props: args,
        template: `
<div style="display: flex; align-items: center; gap:14px">
    <fusion-chip label="Square"></fusion-chip>
    <fusion-chip label="Round" shape="round"></fusion-chip>
</div>
        `
    })
};

export const WithRemoveAction: Story = {};
WithRemoveAction.args = {
    label: 'Clickable removable chip' as unknown as InputSignal<string>,
    shape: 'round' as unknown as InputSignal<'square' | 'round'>,
    removable: true as unknown as InputSignal<boolean>
};

export const WithIcon: Story = {};
WithIcon.args = {
    label: 'With icon' as unknown as InputSignal<string>,
    shape: 'round' as unknown as InputSignal<'square' | 'round'>,
    iconName: 'ph/placeholder' as unknown as InputSignal<IconData>
};
