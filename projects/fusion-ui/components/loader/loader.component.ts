import {
    AfterViewInit,
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    HostBinding,
    Inject,
    Injector,
    Input,
    Optional,
    Renderer2,
    ViewChild
} from '@angular/core';
import {LOADER_COMPONENT_TYPE_TOKEN} from './loader-token';
import {StyleBase} from '@ironsource/fusion-ui/components/style';
import {StyleVersion} from '@ironsource/fusion-ui/services/version';
import {LoaderColor, LoaderPosition, LoaderSize} from './loader.types';
import {map} from 'rxjs/operators';

@Component({
    selector: 'fusion-loader',
    templateUrl: './loader.component.html',
    styleUrls: ['./loader.component.scss', './loader.component-v2.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoaderComponent extends StyleBase implements AfterViewInit {
    @ViewChild('customLoader', {read: ElementRef}) customLoader: ElementRef;

    @Input() height: number; // has position static, with min-height
    @Input() status: boolean;
    @Input() text: string;
    @Input() position: LoaderPosition = 'center';
    @Input() size: LoaderSize = 'large';
    @Input() color: LoaderColor = 'grey';
    @HostBinding('style.top.px') top: number; // distance from top

    public get loaderPosition() {
        return `position-${this.position}`;
    }
    selectedVersion: number;
    public loaderIconName$ = this.selectedVersion$.pipe(
        map((styleVersion: StyleVersion) => {
            this.selectedVersion = styleVersion;
            let iconProperties = {iconName: 'loading', iconVersion: 'v1'};
            if (styleVersion === StyleVersion.V2) {
                return this.size === 'inline' ? 'loading_rotate' : {iconName: 'loader-dots-v4', iconVersion: 'v2'};
            }
            return iconProperties;
        })
    );

    constructor(
        injector: Injector,
        private elementRef: ElementRef,
        private renderer: Renderer2,
        @Optional() @Inject(LOADER_COMPONENT_TYPE_TOKEN) public componentType
    ) {
        super(injector);
        this.size = this.size || 'large';
    }

    ngAfterViewInit() {
        super.ngAfterViewInit();
        const loaderEl = this.elementRef.nativeElement.querySelector('.is-loader');
        if (this.height && !!loaderEl) {
            this.renderer.setStyle(loaderEl, 'position', 'static');
            this.renderer.setStyle(loaderEl, 'min-height', this.height + 'px');
        }

        this.addCustomLoaderSizeClass();
    }

    private addCustomLoaderSizeClass() {
        if (this.customLoader?.nativeElement?.previousSibling) {
            this.renderer.addClass(this.customLoader.nativeElement.previousSibling, this.size);
        }
    }
}
