import {ContentChildren, Directive, ElementRef, EventEmitter, HostListener, Output, QueryList} from '@angular/core';
import {DragAndDropService} from './drag-and-drop.service';
import {DragAndDropListChanges} from './drag-and-drop.entities';

@Directive({
    selector: '[fusionDragAndDrop]',
    standalone: true,
    providers: [DragAndDropService]
})
export class DragAndDropDirective {
    @ContentChildren('draggableItem') set draggableListItems(value: QueryList<ElementRef>) {
        this.setDraggableAttributeToItems(value);
    }

    @Output() dragElementDrop = new EventEmitter<DragAndDropListChanges>();
    @Output() dragElementEnd = new EventEmitter<any>();
    @Output() dragElementStart = new EventEmitter<any>();

    private dragElement: HTMLElement;

    private dragChanges: DragAndDropListChanges = {element: null, fromIndex: null, toIndex: null};

    constructor(private hostElement: ElementRef, private readonly dragAndDropStableService: DragAndDropService) {}

    @HostListener('dragstart', ['$event'])
    onDragStart($event: any) {
        const draggableElement = $event?.target?.closest('[draggable]');
        $event.dataTransfer.effectAllowed = 'move';
        if (draggableElement) {
            this.dragChanges.fromIndex = this.getElementIndex(draggableElement);
            this.dragElement = draggableElement;
            this.dragElement.classList.add('dragging');
            this.dragElementStart.emit(this.dragElement);
        }
    }

    @HostListener('dragend', ['$event'])
    onDragEnd($event: any) {
        const draggableElement = $event?.target?.closest('[draggable]');
        if (draggableElement) {
            this.dragElement.classList.remove('dragging');
            this.dragElement.classList.remove('dragging-transit');
            this.dragElementEnd.emit();
        }
    }

    @HostListener('dragover', ['$event'])
    onDragOver($event: any) {
        $event.preventDefault();
        this.dragElement.classList.add('dragging-transit');
        const afterElement = this.dragAndDropStableService.getDragAfterElement($event.clientY, this.hostElement);
        if (!afterElement) {
            this.hostElement.nativeElement.appendChild(this.dragElement);
        } else {
            this.hostElement.nativeElement.insertBefore(this.dragElement, afterElement);
        }
        this.dragAndDropStableService.onDragToEdgeOfScrollableContainer({
            dragElement: this.dragElement,
            containerElement: this.hostElement.nativeElement
        });
    }

    @HostListener('drop', ['$event'])
    onDrop($event: DragEvent) {
        const draggableElement: HTMLElement = ($event?.target as HTMLElement)?.closest('[draggable]');
        if (draggableElement) {
            this.dragChanges.toIndex = this.getElementIndex(draggableElement);
            this.dragChanges.element = draggableElement;
            this.dragElement.classList.remove('dragging');
            this.dragElement.classList.remove('dragging-transit');

            if (this.dragChanges.toIndex !== this.dragChanges.fromIndex) {
                this.dragElementDrop.emit(this.dragChanges);
            }
        }
        this.dragChanges = {element: null, fromIndex: null, toIndex: null};
    }

    private getElementIndex(element: HTMLElement) {
        return Array.from(this.hostElement.nativeElement.children).findIndex(child => child === element);
    }

    private setDraggableAttributeToItems(draggableItems: QueryList<ElementRef>) {
        draggableItems.forEach(itemElement => {
            const isDraggable = itemElement.nativeElement.getAttribute('draggable');
            if (!isDraggable) {
                itemElement.nativeElement.setAttribute('draggable', true);
            }
        });
    }
}
