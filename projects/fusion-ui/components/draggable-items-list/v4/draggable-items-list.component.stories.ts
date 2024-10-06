import {componentWrapperDecorator, Meta, moduleMetadata, StoryObj} from '@storybook/angular';
import {action} from '@storybook/addon-actions';
import {CommonModule} from '@angular/common';
import {environment} from 'stories/environments/environment';
import {SvgModule} from '@ironsource/fusion-ui/components/svg';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {DraggableItemsListComponent} from './draggable-items-list.component';
import {ItemDragAndDrop} from './draggable-items-list.entities';
import {dedent} from 'ts-dedent';

const actionsData = {
    orderChanged: action('orderChanged'),
    itemRemoved: action('itemRemoved')
};

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
        docs: {
            description: {
                component: dedent`
**DraggableItemsListComponent** is an interactive UI component designed to display a list of items that can be rearranged by dragging and dropping.

This component used ***DragAndDropDirective*** to handle the drag and drop functionality. You can use this directive to any element list in DOM.

#####Example directive usage:
\`\`\`html
<ul class="fu-items-wrapper"
    fusionDragAndDrop
    (dragElementDrop)="orderChanged.emit($event)"
>
    @for (item of items; track item.label; let i = $index) {
        <li #draggableItem class="fu-list-item" [attr.data-id]="item.id">
            <div class="fu-item-drag-icon">
                <fusion-icon class="fu-drag-icon" name="ph/bold/dots-six-vertical"></fusion-icon>
            </div>
            <div class="fu-item-content">
                <div class="fu-item-label">{{ item.label }}</div>
                <fusion-icon-button
                        iconName="ph/x"
                        size="extraSmall"
                        (click)="removeItem(i)"
                ></fusion-icon-button>
            </div>
        </li>
    }
</ul>
\`\`\`

here:
- ***fusionDragAndDrop***: directive selector
- ***#draggableItem***: template reference variable to get the list of items
- ***dragElementDrop***: event emitter to handle the drop event it will emit the changes ***DragAndDropListChanges*** of the list

\`\`\`typescript
interface DragAndDropListChanges {
    element: HTMLElement;
    fromIndex: number;
    toIndex: number;
}
 \`\`\`

`
            }
        },
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
