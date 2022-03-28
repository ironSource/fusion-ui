/**
 * Base SVG asset file loader
 *
 * Created by andyk on 01/06/2017.
 */

import {
    Component,
    Input,
    ChangeDetectionStrategy,
    ElementRef,
    Renderer2,
    Inject,
    Optional,
    AfterViewInit,
    ViewEncapsulation
} from '@angular/core';
import {ApiService, LogService, CacheType, ApiResponseType} from '@ironsource/fusion-ui/services';
import {SVG_OPTIONS_TOKEN} from './svg-config';
import {SvgOptions} from './svg-entities';

@Component({
    selector: 'fusion-svg',
    templateUrl: './svg.component.html',
    styleUrls: ['./svg.component.scss'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgComponent implements AfterViewInit {
    // inputs
    @Input() set path(value: string) {
        this.onPathChanged(value);
    }

    libVersion = 'v2';
    svgPath = '';

    // class constructor
    constructor(
        public apiService: ApiService,
        public elementRef: ElementRef,
        public renderer: Renderer2,
        protected logService: LogService,
        @Optional() @Inject(SVG_OPTIONS_TOKEN) public svgOptions: SvgOptions
    ) {}

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
            this.apiService
                .get(svgUrl, {
                    cache: CacheType.SessionStorage,
                    noAuthHeader: true,
                    responseType: ApiResponseType.Text,
                    retryStrategy: {maxRetryAttempts: 0}
                })
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
