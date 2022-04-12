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
import {StyleBase} from '@ironsource/fusion-ui/components/style';
import {IconData} from '@ironsource/fusion-ui/components/icon';

@Component({
    // eslint-disable-next-line
    selector: 'fusion-button,[fusion-button]',
    template: `
        <span [ngClass]="{'is-icon-text': iconName && projectContent}">
            <fusion-icon *ngIf="iconName && !isLoading" class="icon" [name]="iconData"></fusion-icon>
            <ng-container *ngIf="selectedVersion$ | async as selectedVersion">
                <fusion-icon
                    *ngIf="isLoading"
                    class="icon-loading"
                    [name]="
                        selectedVersion === 1 ? {iconName: 'loading', iconVersion: 'v1'} : {iconName: 'loader-dots-v4', iconVersion: 'v2'}
                    "
                ></fusion-icon>
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
    @Input() set icon(value: IconData) {
        this.iconData = value;
        this.iconName = typeof this.iconData === 'string' ? this.iconData : this.iconData.iconName;
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
    iconData: string | IconData;
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
