import {
    Component,
    Input,
    ChangeDetectionStrategy,
    ComponentFactoryResolver,
    ViewChild,
    ViewContainerRef,
    AfterViewInit,
    ComponentRef,
    ChangeDetectorRef,
    Inject,
    OnDestroy,
    ElementRef,
    Injector,
    EventEmitter,
    Renderer2,
    Output,
    Type
} from '@angular/core';
import {FormControl, ControlValueAccessor} from '@angular/forms';
import {takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs';
import {WRAPPER_TOKEN, WrapperToken} from './wrapper-entities';
import {WrapperService} from './wrapper.service';
import {isString, isUndefined} from '@ironsource/fusion-ui/utils';

export const CONTROL_VALUE_NAME = 'controlValue';

@Component({
    selector: 'fusion-wrapper',
    templateUrl: './wrapper.component.html',
    styleUrls: ['./wrapper.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class WrapperComponent implements AfterViewInit, OnDestroy {
    @ViewChild('viewContainer', {read: ViewContainerRef})
    viewContainer: ViewContainerRef;
    @ViewChild('contentWrapper', {read: ElementRef})
    contentWrapper: ElementRef;

    @Input() name: string;

    @Input() set config(value: any) {
        this.configuration = this.parseConfigValue(value);
        this.setComponentData();
    }

    @Output() controlValueChange = new EventEmitter<any>();

    inputFormControl = new FormControl();
    configuration: any = {};
    changeDetectorRef: ChangeDetectorRef;
    private componentRef: ComponentRef<any>;
    private onDestroy$ = new Subject();
    private mutationObserver: MutationObserver;
    private mutationAfterViewInitObserver: MutationObserver;

    constructor(
        private cfr: ComponentFactoryResolver,
        private elementRef: ElementRef,
        private injector: Injector,
        private renderer: Renderer2,
        private wrapperService: WrapperService,
        @Inject(WRAPPER_TOKEN) public wrapperToken: WrapperToken
    ) {}

    ngOnDestroy() {
        this.onDestroy$.next();
        this.onDestroy$.complete();
        if (this.mutationObserver) {
            this.mutationObserver.disconnect();
        }
        if (this.mutationAfterViewInitObserver) {
            this.mutationAfterViewInitObserver.disconnect();
        }
    }

    ngAfterViewInit() {
        this.wrapperService.setShadowRoot(this.elementRef.nativeElement);

        if (this.contentWrapper.nativeElement && this.contentWrapper.nativeElement.children.length) {
            this.renderComponentWithProjectNodes(this.contentWrapper.nativeElement.children);
        } else {
            const factory = this.cfr.resolveComponentFactory(this.wrapperToken.component);
            this.componentRef = this.viewContainer.createComponent(factory);
            this.afterComponentRenderer();

            this.mutationObserver = new MutationObserver(this.mutationObserverCallback.bind(this));
            this.mutationObserver.observe(this.elementRef.nativeElement, {
                childList: true,
                subtree: false
            });
        }
    }

    private mutationObserverCallback(value: MutationRecord[]): void {
        if (value[0] && value[0].addedNodes && value[0].addedNodes.length) {
            this.renderComponentWithProjectNodes([value[0].addedNodes[0]]);
            this.mutationObserver.disconnect();
            this.mutationObserver = null;
        }
    }

    private renderComponentWithProjectNodes(node: Node[]): void {
        const nodesElement = [].slice.call(node).map(nodeElement => [nodeElement]);
        const factory = this.cfr.resolveComponentFactory(this.wrapperToken.component);
        if (this.componentRef) {
            this.componentRef.destroy();
        }
        this.componentRef = this.viewContainer.createComponent(factory, 0, this.injector, nodesElement);
        this.afterComponentRenderer();
    }

    private afterComponentRenderer(): void {
        this.onDestroy$.next();
        this.initChangeDetectorRef();
        this.registerControlValueAccessorFunction();
        const {[CONTROL_VALUE_NAME]: controlValue} = this.configuration;
        delete this.configuration[CONTROL_VALUE_NAME];
        this.setComponentData(false);
        this.registerToOutputEvents();
        this.handleOnInit();
        this.handleControlValue(controlValue);
        this.handleAfterViewInit();
        this.changeDetectorRef.detectChanges();
    }

    private initChangeDetectorRef(): void {
        this.changeDetectorRef = this.componentRef.injector.get(ChangeDetectorRef as Type<any>);
    }

    private setComponentData(triggerChangeDetection = true): void {
        if (this.componentRef) {
            Object.keys(this.configuration).forEach(key => {
                if (key !== CONTROL_VALUE_NAME) {
                    this.componentRef.instance[key] = this.configuration[key];
                }
            });
            this.handleControlValue(this.configuration[CONTROL_VALUE_NAME]);
            if (this.configuration.class && typeof this.configuration.class === 'string') {
                this.configuration.class.split(' ').forEach(className => {
                    className = className.trim();
                    if (className.length) {
                        this.renderer.addClass(this.componentRef.location.nativeElement, className);
                    }
                });
            }
            if (triggerChangeDetection) {
                this.changeDetectorRef.detectChanges();
            }
        }
    }

    private handleControlValue(value: any): void {
        if (!isUndefined(value)) {
            this.registerOnChange(value);
            this.onFormValueChanged(value, false);
        }
    }

    private registerControlValueAccessorFunction(): void {
        try {
            const controlValueAccessor: ControlValueAccessor = this.componentRef.instance as ControlValueAccessor;
            if (typeof controlValueAccessor.registerOnChange === 'function') {
                controlValueAccessor.registerOnChange(this.registerOnChange.bind(this));
            }
            this.inputFormControl.valueChanges.pipe(takeUntil(this.onDestroy$)).subscribe(this.onFormValueChanged.bind(this));
        } catch (ex) {}
    }

    private registerOnChange(value: any): void {
        let currValue = value;
        if (typeof value === 'object') {
            try {
                currValue = JSON.stringify(value);
            } catch (ex) {}
        }
        this.controlValueChange.emit(value);
        this.inputFormControl.setValue(currValue, {emitEvent: false});
    }

    private onFormValueChanged(value: any, triggerChangeDetection = true): void {
        let currValue = value;
        if (isString(value) && !value.match(/^-{0,1}\d+$/) && !value.match(/^\d+\.\d+$/) && !this.wrapperToken.avoidJsonParse) {
            try {
                currValue = JSON.parse(value);
            } catch (ex) {}
        }
        (this.componentRef.instance as ControlValueAccessor).writeValue(currValue);
        if (triggerChangeDetection) {
            this.changeDetectorRef.detectChanges();
        }
    }

    private registerToOutputEvents(): void {
        Object.entries(this.componentRef.instance).forEach(([key, value]) => {
            if (value instanceof EventEmitter) {
                this.componentRef.instance[key]
                    .asObservable()
                    .pipe(takeUntil(this.onDestroy$))
                    .subscribe(data => {
                        const event = new CustomEvent(key, {detail: data});
                        this.elementRef.nativeElement.dispatchEvent(event);
                    });
            }
        });
    }

    private parseConfigValue(value: any): any {
        if (typeof value === 'string') {
            try {
                return JSON.parse(value);
            } catch (ex) {}
        }
        if (this.wrapperToken.transformer && typeof this.wrapperToken.transformer.transform === 'function') {
            return this.wrapperToken.transformer.transform(value);
        }
        return value;
    }

    private handleOnInit(): void {
        let isAlreadyInvoke = false;
        if (typeof this.componentRef.instance.ngOnInit === 'function') {
            const func = this.componentRef.instance.ngOnInit.bind(this.componentRef.instance);
            this.componentRef.instance.ngOnInit = () => {
                if (!isAlreadyInvoke) {
                    func();
                    isAlreadyInvoke = true;
                }
            };
            this.componentRef.instance.ngOnInit();
        }
    }

    private handleAfterViewInit(): void {
        if (this.componentRef.instance.ngAfterViewInit) {
            this.mutationAfterViewInitObserver = new MutationObserver(this.mutationObserverAfterViewInitCallback.bind(this));
            this.mutationAfterViewInitObserver.observe(this.componentRef.location.nativeElement, {
                childList: true,
                subtree: true
            });
        }
    }

    private mutationObserverAfterViewInitCallback(value: MutationRecord[]): void {
        this.componentRef.instance.ngAfterViewInit();
        this.mutationAfterViewInitObserver.disconnect();
        this.mutationAfterViewInitObserver = null;
    }
}
