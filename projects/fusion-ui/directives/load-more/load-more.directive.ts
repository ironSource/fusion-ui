import {Directive, Input, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';
import {isNullOrUndefined} from '@ironsource/fusion-ui/utils';
import {BehaviorSubject, combineLatest, Observable} from 'rxjs';
import {map, tap} from 'rxjs/operators';

@Directive({
    selector: '[fusionLoadMore]',
    standalone: false
})
export class LoadMoreDirective implements OnInit {
    @Input() fusionLoadMoreChunkSize = 10;
    @Input() set fusionLoadMoreOf(value: any[]) {
        if (!isNullOrUndefined(value)) {
            this.options$.next(value);
            this.loadMore$.next(1);
        }
    }

    private options$ = new BehaviorSubject<any[]>([]);
    private loadMore$ = new BehaviorSubject<number>(1);
    private hasMore$ = new BehaviorSubject<boolean>(false);

    constructor(private templateRef: TemplateRef<any>, private vcr: ViewContainerRef) {}

    ngOnInit() {
        this.vcr.createEmbeddedView(this.templateRef, {
            $implicit: this.buildImplicitObservable(),
            hasMore$: this.hasMore$.asObservable(),
            loadMore: this.loadMore.bind(this)
        });
    }

    private buildImplicitObservable(): Observable<any[]> {
        return combineLatest([this.options$.asObservable(), this.loadMore$.asObservable()]).pipe(
            tap(([options, index]) => this.hasMore$.next(options.length > this.fusionLoadMoreChunkSize * index)),
            map(([options, index]) => options.slice(0, this.fusionLoadMoreChunkSize * index))
        );
    }

    private loadMore() {
        this.loadMore$.next(this.loadMore$.getValue() + 1);
    }
}
