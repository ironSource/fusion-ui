import {ElementRef, Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class DragAndDropSortableService {
    getDragAfterElement(y: number, hostElement: ElementRef): HTMLElement {
        const draggableElements = [...hostElement.nativeElement.children].filter(child => !child.classList.contains('dragging'));
        return draggableElements.reduce(
            (closest, child) => {
                const box = child.getBoundingClientRect();
                const offset = y - box.top - box.height / 2;
                return offset < 0 && offset > closest.offset ? {offset, element: child} : closest;
            },
            {offset: Number.NEGATIVE_INFINITY}
        ).element;
    }

    onDragToEdgeOfScrollableContainer({
        dragElement,
        containerElement,
        elementHeight,
        scrollDistance
    }: {
        dragElement: HTMLElement;
        containerElement: HTMLElement;
        elementHeight: number;
        scrollDistance: number;
    }) {
        let pageY = 0;
        let distanceFromTopOfContainer = 0;
        if (dragElement) {
            pageY = dragElement.getBoundingClientRect().top;
            distanceFromTopOfContainer = pageY - containerElement.getBoundingClientRect().top;

            if (distanceFromTopOfContainer < 30) {
                this.scrollEntities({containerElement, action: 'scrollUp', scrollDistance});
            } else if (distanceFromTopOfContainer > containerElement.clientHeight - elementHeight) {
                this.scrollEntities({containerElement, action: 'scrollDown', scrollDistance});
            }
        }
    }

    private scrollEntities({
        containerElement,
        action,
        scrollDistance
    }: {
        containerElement: HTMLElement;
        action: string;
        scrollDistance: number;
    }) {
        if (action === 'scrollDown') {
            containerElement.scrollTop += scrollDistance;
        } else if (action === 'scrollUp') {
            containerElement.scrollTop -= scrollDistance;
        }
    }
}
