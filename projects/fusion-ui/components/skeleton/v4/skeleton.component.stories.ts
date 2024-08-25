import {componentWrapperDecorator, Meta, moduleMetadata, StoryObj} from '@storybook/angular';
import {CommonModule} from '@angular/common';
import {SkeletonComponent} from './skeleton.component';

const oneBlockStyle = `display: flex; flex-direction: column; gap:8px;`;
const labelStyle = `font-family: Inter;font-size: 14px;font-style: normal;font-weight: 500;line-height: 20px;letter-spacing: -0.084px;`;

export default {
    title: 'V4/Components/Feedback/Skeleton',
    component: SkeletonComponent,
    decorators: [
        moduleMetadata({
            declarations: [],
            imports: [CommonModule]
        }),
        componentWrapperDecorator(story => `<div>${story}</div>`)
    ],
    tags: ['autodocs'],
    parameters: {
        options: {
            showPanel: true,
            panelPosition: 'bottom'
        }
    }
} as Meta<SkeletonComponent>;

type Story = StoryObj<SkeletonComponent>;

export const Basic: Story = {};

export const Shapes: Story = {
    render: args => ({
        props: args,
        template: `
<div style="display: flex; gap:32px">
    <div style="${oneBlockStyle}">
       <fusion-skeleton shape="circle" size="40"></fusion-skeleton>
       <div style="${labelStyle}">Circle</div>
    </div>        
    
    <div style="${oneBlockStyle}">
       <fusion-skeleton shape="square" size="40"></fusion-skeleton>
       <div style="${labelStyle}">Square</div>
    </div>        
    
    <div style="${oneBlockStyle}">
       <fusion-skeleton size="40" style="width: 150px"></fusion-skeleton>
       <div style="${labelStyle}">Rectangle</div>
    </div>        
    
    <div style="${oneBlockStyle}">
       <fusion-skeleton shape="pill" size="40" style="width: 150px"></fusion-skeleton>
       <div style="${labelStyle}">Pill</div>
    </div>
</div>
        `
    })
};
