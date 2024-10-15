import {Meta, moduleMetadata, StoryObj} from '@storybook/angular';
import {CommonModule} from '@angular/common';
import {environment} from '../../../../../stories/environments/environment';
import {SvgModule} from '@ironsource/fusion-ui/components/svg';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {LinkComponent} from './link.component';

export default {
    title: 'V4/Components/Buttons/Link',
    component: LinkComponent,
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
        testId: 'link-test',
        content: 'Read more',
        color: 'primary',
        disabled: false,
        target: '_self',
        underline: false
    },
    argTypes: {
        endIconName: {
            type: 'string',
            options: [null, 'ph/regular/arrow-right'],
            control: {
                type: 'select',
                labels: {
                    null: 'no icon',
                    frame: 'arrow-right'
                }
            }
        },
        externalIconName: {
            type: 'string',
            options: [null, 'ph/regular/arrow-square-up-right'],
            control: {
                type: 'select',
                labels: {
                    null: 'no icon',
                    frame: 'arrow-square-up-right'
                }
            }
        }
    }
} as Meta<LinkComponent>;

type Story = StoryObj<LinkComponent>;

const templateCommon: string = `<fusion-link 
    [href]="href"
    [target]="target"
    [variant]="variant"
    [color]="color"
    [disabled]="disabled"
    [underline]="underline"
    [startIconColor]="startIconColor"
    [startIconName]="startIconName"
    [endIconColor]="endIconColor"
    [endIconName]="endIconName"    
>{{content}}</fusion-link>`;

const oneBlockStyle = `display: flex; flex-direction: column; gap:8px;`;
const labelStyle = `font-family: Inter;font-size: 14px;font-style: normal;font-weight: 500;line-height: 20px;letter-spacing: -0.084px;`;

export const Basic: Story = {
    render: args => ({
        props: args,
        template: templateCommon
    })
};

export const Variants: Story = {
    render: args => ({
        props: args,
        template: `
<div style="display: flex; gap:32px">
<div style="${oneBlockStyle}">
   <div style="${labelStyle}">body1</div>
   <fusion-link 
    variant="body1"
    [color]="color"
>{{content}}</fusion-link>
</div>        

<div style="${oneBlockStyle}">
   <div style="${labelStyle}">body2</div>
   <fusion-link 
    variant="body2"
    [color]="color"
>{{content}}</fusion-link>
</div>        

<div style="${oneBlockStyle}">
   <div style="${labelStyle}">subtitle1</div>
   <fusion-link 
    variant="subtitle1"
    [color]="color"
   >{{content}}</fusion-link>
</div>        

<div style="${oneBlockStyle}">
   <div style="${labelStyle}">subtitle2</div>
   <fusion-link 
    variant="subtitle2"
    [color]="color"
   >{{content}}</fusion-link>
</div>

<div style="${oneBlockStyle}">
   <div style="${labelStyle}">button</div>
   <fusion-link 
    variant="button"
    [color]="color"
   >{{content}}</fusion-link>
</div>        
</div>
        `
    })
};

export const Colors: Story = {
    render: args => ({
        props: args,
        template: `
<div style="display: flex; gap:32px">
<div style="${oneBlockStyle}">
   <div style="${labelStyle}">Primary</div>
   <fusion-link 
    [variant]="variant"
    color="primary"
>{{content}}</fusion-link>
</div>        

<div style="${oneBlockStyle}">
   <div style="${labelStyle}">Default</div>
   <fusion-link 
    [variant]="variant"
>{{content}}</fusion-link>
</div>             
</div>
        `
    })
};

export const Disabled: Story = {
    render: args => ({
        props: args,
        template: `
<div style="display: flex; gap:32px">
<div style="${oneBlockStyle}">
   <div style="${labelStyle}">Primary</div>
   <fusion-link 
    [variant]="variant"
    color="primary"
    [disabled]="true"
>{{content}}</fusion-link>
</div>        

<div style="${oneBlockStyle}">
   <div style="${labelStyle}">Default</div>
   <fusion-link 
    [variant]="variant"
    [disabled]="true"
    target="_blank"
>{{content}}</fusion-link>
</div>             
</div>
        `
    })
};

export const Icons: Story = {
    render: args => ({
        props: args,
        template: `
<div style="display: flex; gap:32px">
<div style="${oneBlockStyle}">
   <div style="${labelStyle}">Open in new tab</div>
   <fusion-link 
    [variant]="variant"
    color="primary"
    target="_blank"
>{{content}}</fusion-link>
</div>        

<div style="${oneBlockStyle}">
   <div style="${labelStyle}">ArrowRight</div>
   <fusion-link 
    [variant]="variant"
    color="primary"
    endIconName="ph/regular/arrow-right"
>{{content}}</fusion-link>
</div>             
</div>
        `
    })
};
