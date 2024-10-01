import {componentWrapperDecorator, Meta, moduleMetadata, StoryObj} from '@storybook/angular';
import {CommonModule} from '@angular/common';
import {environment} from 'stories/environments/environment';
import {SvgModule} from '@ironsource/fusion-ui/components/svg';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {DraggableItemsListComponent} from './draggable-items-list.component';
import {ItemDragAndDrop} from './draggable-items-list.entities';

const ITEMS: ItemDragAndDrop[] = [{label: 'Milk shake'}, {label: 'Cocktails'}, {label: 'Fruit salad'}, {label: 'Coffee'}];

export default {
    title: 'V4/Components/DragAndDrop/Draggable Items List',
    component: DraggableItemsListComponent,
    decorators: [
        moduleMetadata({
            declarations: [],
            imports: [CommonModule, SvgModule.forRoot({assetsPath: environment.assetsPath}), IconModule]
        }),
        componentWrapperDecorator(story => `<div style="width: 310px;">${story}</div>`)
    ],
    tags: ['autodocs'],
    parameters: {
        options: {
            showPanel: true,
            panelPosition: 'bottom'
        }
    },
    args: {
        items: ITEMS
    }
} as Meta<DraggableItemsListComponent>;

type Story = StoryObj<DraggableItemsListComponent>;

export const Basic: Story = {};
