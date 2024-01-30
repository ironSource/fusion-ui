import {ContentChildren, Directive, ElementRef, EventEmitter, HostListener, Input, Output, QueryList} from '@angular/core';
import {DragAndDropSortableService} from './drag-and-drop-sortable.service';
import {DragAndDropConfiguration} from '@ironsource/fusion-ui/directives/drag-and-drop-sortable/common/drag-and-drop-sortable.entities';

@Directive({
    selector: '[isDragAndDropSortable]',
    standalone: true,
    providers: [DragAndDropSortableService]
})
export class DragAndDropSortableDirective {
    @ContentChildren('listItem') set draggableListItems(value: QueryList<ElementRef>) {
        this.listItems = value;
        this.setDraggableAttributeToItems(this.listItems);
    }

    @Input() sortableModal: any[];
    @Input() dragAndDropConfiguration: DragAndDropConfiguration;

    @Output() sortableModalChange = new EventEmitter<any[]>();
    @Output() onDragElementDrop = new EventEmitter<any>();
    @Output() onDragElementEnd = new EventEmitter<any>();
    @Output() onDragElementStart = new EventEmitter<any>();

    private dragElement: HTMLElement;
    private listItems: QueryList<ElementRef>;

    constructor(private hostElement: ElementRef, private readonly dragAndDropStableService: DragAndDropSortableService) {}

    @HostListener('dragstart', ['$event'])
    onDragStart($event: any) {
        $event.stopPropagation();
        const draggableElement = $event?.target?.closest('[draggable]');
        if (draggableElement) {
            this.dragElement = draggableElement;
            this.dragElement.classList.add('dragging');
            this.onDragElementStart.emit(this.dragElement);
        }
    }

    @HostListener('dragend', ['$event'])
    onDragEnd($event: any) {
        const draggableElement = $event?.target?.closest('[draggable]');
        if (draggableElement) {
            this.dragElement.classList.remove('dragging');
            this.dragElement.classList.remove('dragging-transit');
            this.onDragElementEnd.emit();
        }
    }

    @HostListener('dragover', ['$event'])
    onDragOver($event: any) {
        $event.preventDefault();
        $event.stopPropagation();
        this.dragElement.classList.add('dragging-transit');
        const afterElement = this.dragAndDropStableService.getDragAfterElement($event.clientY, this.hostElement);
        if (!afterElement) {
            this.hostElement.nativeElement.appendChild(this.dragElement);
        } else {
            this.hostElement.nativeElement.insertBefore(this.dragElement, afterElement);
        }
        this.dragAndDropStableService.onDragToEdgeOfScrollableContainer({
            dragElement: this.dragElement,
            containerElement: this.hostElement.nativeElement,
            elementHeight: this.dragAndDropConfiguration.itemHeight || 30,
            scrollDistance: this.dragAndDropConfiguration.autoScrollingDistance || 10
        });
        this.sortableModal = [...this.hostElement.nativeElement.children].map(childEl => childEl.id);
    }

    @HostListener('drop', ['$event'])
    onDrop($event: any) {
        const draggableElement = $event?.target?.closest('[draggable]');
        if (draggableElement) {
            this.dragElement.classList.remove('dragging');
            this.dragElement.classList.remove('dragging-transit');
            this.sortableModalChange.emit(this.sortableModal);
            this.onDragElementDrop.emit(this.dragElement);
        }
    }

    private setDraggableAttributeToItems(listItems: QueryList<ElementRef>) {
        listItems.forEach(e => {
            const isDraggable = e.nativeElement.getAttribute('draggable');
            if (!isDraggable) {
                e.nativeElement.setAttribute('draggable', true);
            }
        });
    }
}
