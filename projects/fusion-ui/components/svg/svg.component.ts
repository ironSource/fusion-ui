import {Component, Input, ChangeDetectionStrategy, ElementRef, Renderer2, Inject, Optional, AfterViewInit, OnDestroy} from '@angular/core';
import {LogService} from '@ironsource/fusion-ui/services/log';
import {SVG_OPTIONS_TOKEN} from './svg-config';
import {SvgOptions} from './svg-entities';
import {HttpClient} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import {finalize, publishReplay, refCount, takeUntil, tap} from 'rxjs/operators';
import {StorageService, StorageType} from '@ironsource/fusion-ui/services/stogare';

@Component({
    selector: 'fusion-svg',
    templateUrl: './svg.component.html',
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

    static cache: {[key: string]: Observable<any>} = {};

    constructor(
        private httpClient: HttpClient,
        public elementRef: ElementRef,
        public renderer: Renderer2,
        protected logService: LogService,
        protected storageService: StorageService,
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
            const cachedData = this.storageService.get(StorageType.SessionStorage, `${svgUrl}`);
            if (!!cachedData) {
                this.elementRef.nativeElement.innerHTML = cachedData;
            } else {
                this.getSvgData(svgUrl).subscribe(
                    response => {
                        this.storageService.set(StorageType.SessionStorage, `${svgUrl}`, response);
                        this.elementRef.nativeElement.innerHTML = response;
                    },
                    err => {
                        this.logService.error(new Error(`Error Fetching Svg: ${svgUrl}, ${JSON.stringify(err)}`));
                    }
                );
            }
        }
    }

    private getSvgData(svgUrl: string): Observable<any> {
        if (!SvgComponent.cache[svgUrl]) {
            SvgComponent.cache[svgUrl] = this.httpClient.get(svgUrl, {responseType: 'text'}).pipe(
                takeUntil(this.onDestroy$),
                tap(data => {
                    console.log('SvgComponent: getSvgData', data);
                }),
                publishReplay(1),
                refCount(),
                finalize(() => {
                    delete SvgComponent.cache[svgUrl];
                })
            );
        }
        return SvgComponent.cache[svgUrl];
    }

    private onPathChanged(value: string): void {
        this.svgPath = value;
        if (this.elementRef?.nativeElement) {
            this.loadSvg();
        }
    }
}
