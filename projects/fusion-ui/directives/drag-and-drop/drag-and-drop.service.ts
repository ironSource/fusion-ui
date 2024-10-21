import {ElementRef, Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class DragAndDropService {
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

    onDragToEdgeOfScrollableContainer({dragElement, containerElement}: {dragElement: HTMLElement; containerElement: HTMLElement}) {
        let pageY = 0;
        let distanceFromTopOfContainer = 0;
        if (dragElement) {
            pageY = dragElement.getBoundingClientRect().top;
            distanceFromTopOfContainer = pageY - containerElement.getBoundingClientRect().top;

            if (distanceFromTopOfContainer < 30) {
                this.scrollEntities({containerElement, action: 'scrollUp'});
            } else if (distanceFromTopOfContainer > containerElement.clientHeight - 30) {
                this.scrollEntities({containerElement, action: 'scrollDown'});
            }
        }
    }

    private scrollEntities({containerElement, action}: {containerElement: HTMLElement; action: string}) {
        if (action === 'scrollDown') {
            containerElement.scrollTop += 10;
        } else if (action === 'scrollUp') {
            containerElement.scrollTop -= 10;
        }
    }
}
