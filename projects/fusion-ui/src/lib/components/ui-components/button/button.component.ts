import {
    Component,
    Input,
    OnInit,
    ElementRef,
    Renderer2,
    ChangeDetectionStrategy,
    Injector,
    Output,
    EventEmitter,
    HostListener
} from '@angular/core';
import {StyleBase} from '../../style/style-base';
import {takeUntil} from 'rxjs/operators';

@Component({
    // eslint-disable-next-line
    selector: 'fusion-button,[fusion-button]',
    template: `
        <span [ngClass]="{'is-icon-text': iconName && projectContent}">
            <fusion-icon
                *ngIf="iconName && !isLoading"
                class="icon"
                [name]="(selectedVersion$ | async) === 1 ? {iconName: iconName, iconVersion: 'v1'} : iconName"
            ></fusion-icon>
            <ng-container *ngIf="selectedVersion$ | async as selectedVersion">
                <fusion-icon
                    *ngIf="selectedVersion === 1 && isLoading"
                    class="icon-loading"
                    [name]="{iconName: 'loading', iconVersion: 'v1'}"
                ></fusion-icon>
                <fusion-icon *ngIf="selectedVersion === 2 && isLoading" class="icon-loading" hidden name="loader-dots-v4"></fusion-icon>
            </ng-container>
            <span><ng-content></ng-content></span>
        </span>
    `,
    styleUrls: ['./button.component.scss', './button.component-v2.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent extends StyleBase implements OnInit {
    @HostListener('click', ['$event']) onClick($event: any) {
        this.onclick.emit($event);
    }
    @Input() set icon(value: string) {
        this.iconName = value;
        this.setIconState(!!this.iconName);
    }
    @Input() set disabled(value: boolean) {
        this.isDisabled = value;
        this.setDisableState(value);
    }
    @Input() set loading(value: boolean) {
        this.isLoading = value;
        this.setLoadingState(this.isLoading);
    }

    @Output() onclick = new EventEmitter();

    projectContent: boolean;
    isLoading: boolean;
    iconName: string;
    private isDisabled: boolean;

    constructor(injector: Injector, private element: ElementRef, private renderer: Renderer2) {
        super(injector);
    }

    ngOnInit() {
        this.projectContent = !!this.element.nativeElement.innerText;
        this.setHostClass(this.projectContent, 'is-with-content');
    }

    private setHostClass(add: boolean, className: string) {
        const method = add ? 'addClass' : 'removeClass';
        this.renderer[method](this.element.nativeElement, className);
    }

    private setHostAttribute(add: boolean, attributeName: string, attributeValue: string) {
        const method = add ? 'setAttribute' : 'removeAttribute';
        this.renderer[method](this.element.nativeElement, attributeName, add ? attributeValue : null);
    }

    private setDisableState(disabling: boolean) {
        this.setHostClass(disabling, 'disabled');
        this.setHostAttribute(disabling, 'disabled', 'true');
    }

    private setLoadingState(loading: boolean) {
        this.setHostClass(loading, 'is-with-loading');
        if (!this.isDisabled) {
            this.setDisableState(loading);
        }
    }

    private setIconState(hasIcon: boolean) {
        this.setHostClass(hasIcon, 'is-iconed');
    }
}
