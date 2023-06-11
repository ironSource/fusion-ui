import {
    Component,
    Input,
    ChangeDetectionStrategy,
    ElementRef,
    Renderer2,
    Inject,
    Optional,
    AfterViewInit,
    ViewEncapsulation,
    OnDestroy
} from '@angular/core';
import {LogService} from '@ironsource/fusion-ui/services/log';
import {SVG_OPTIONS_TOKEN} from './svg-config';
import {SvgOptions} from './svg-entities';
import {HttpClient} from '@angular/common/http';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
    selector: 'fusion-svg',
    templateUrl: './svg.component.html',
    styleUrls: ['./svg.component.scss'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgComponent implements AfterViewInit, OnDestroy {
    // inputs
    @Input() set path(value: string) {
        this.onPathChanged(value);
    }

    libVersion = 'v3';
    svgPath = '';

    private onDestroy$ = new Subject<void>();

    constructor(
        private httpClient: HttpClient,
        public elementRef: ElementRef,
        public renderer: Renderer2,
        protected logService: LogService,
        @Optional() @Inject(SVG_OPTIONS_TOKEN) public svgOptions: SvgOptions
    ) {}

    ngOnDestroy() {
        this.onDestroy$.next();
        this.onDestroy$.complete();
    }

    public getUrlPath() {
        let assetPath = '';
        if (this.svgOptions && this.svgOptions.assetsPath) {
            assetPath =
                this.svgOptions.assetsPath === 'https://fusion.ironsrc.net/assets'
                    ? `${this.svgOptions.assetsPath}/icons/`
                    : `${this.svgOptions.assetsPath}`;
        }

        if (this.svgPath === '') {
            throw new Error(`Asset path-name '${this.svgPath}' not set`);
        } else if (!this.svgPath.endsWith('.svg')) {
            // check for .svg if no, add
            this.svgPath += '.svg';
        }
        return `${assetPath}${this.svgPath}`;
    }

    ngAfterViewInit() {
        this.loadSvg();
    }

    loadSvg() {
        const svgUrl = this.getUrlPath();
        if (svgUrl) {
            this.httpClient
                .get(svgUrl)
                .pipe(takeUntil(this.onDestroy$))
                .subscribe(
                    response => {
                        this.elementRef.nativeElement.innerHTML = response;
                    },
                    err => {
                        this.logService.error(new Error(`Error Fetching Svg: ${svgUrl}, ${JSON.stringify(err)}`));
                    }
                );
        }
    }

    private onPathChanged(value: string): void {
        this.svgPath = value;
        if (this.elementRef && this.elementRef.nativeElement) {
            this.loadSvg();
        }
    }
}
