import {Directive, HostListener, Input, OnInit} from '@angular/core';
import {ScrollToService} from './scroll-to.service';

@Directive({
    selector: '[fusionScrollTo]'
})
export class ScrollToDirective implements OnInit {
    @Input() fusionScrollTo: string;
    @Input() scrollDuration: number;
    @Input() scrollOffset: number;
    @Input() scrollMainView: string;

    constructor(private scrollToService: ScrollToService) {}

    ngOnInit(): void {
        this.scrollDuration = !this.scrollDuration ? 500 : this.scrollDuration;
        this.scrollOffset = !this.scrollOffset ? 0 : this.scrollOffset;
    }

    @HostListener('mouseup')
    onMouseClick() {
        if (this.fusionScrollTo) {
            this.scrollToService.scrollTo({
                element: this.fusionScrollTo,
                duration: this.scrollDuration,
                offset: this.scrollOffset,
                mainView: this.scrollMainView
            });
        }
    }
}
