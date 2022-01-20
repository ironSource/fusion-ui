import {
    Component,
    ComponentFactoryResolver,
    ComponentRef,
    Input,
    ViewChild,
    ViewContainerRef,
    Type,
    OnChanges,
    OnDestroy,
    OnInit,
    ChangeDetectionStrategy,
    Renderer2,
    ElementRef,
    TemplateRef
} from '@angular/core';
import {DynamicComponentConfiguration} from './dynamic-component';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';

@Component({
    selector: 'fusion-dynamic-components',
    templateUrl: './dynamic-components.component.html',
    styleUrls: ['./dynamic-components.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DynamicComponentsComponent implements OnChanges, OnInit, OnDestroy {
    @ViewChild('dynamicContent', {read: ViewContainerRef, static: true}) dynamicData: ViewContainerRef;
    @ViewChild('elementContent', {read: ElementRef}) set elementContent(value: ElementRef) {
        this.elementContainer = value;
        this.renderNativeElement();
    }

    // deprecated
    @Input() component: Type<Component>;
    @Input() componentData: any = {};
    @Input() set element(node: Node) {
        this.nativeElement = node;
        this.renderNativeElement();
    }
    // --- instead deprecated params

    @Input() set configuration(data: DynamicComponentConfiguration) {
        if (data?.component?.type) {
            this.component = data.component.type;
            this.componentData = data.component.data;
            this.updateComponent(true);
        } else if (data?.templateRef) {
            this.templateRef = data.templateRef;
        } else if (data?.element) {
            this.nativeElement = data.element;
            this.renderNativeElement();
        } else if (data?.htmlSnippet) {
            this.htmlSnippet = this.sanitizer.bypassSecurityTrustHtml(data.htmlSnippet);
        }
    }

    htmlSnippet: SafeHtml;
    templateRef: TemplateRef<any>;

    private cmpRef: ComponentRef<Component>;
    private isViewInitialized = false;
    private nativeElement: Node;
    private elementContainer: ElementRef;

    constructor(private componentFactoryResolver: ComponentFactoryResolver, private renderer: Renderer2, private sanitizer: DomSanitizer) {}

    updateComponent(isComponentChanged?: boolean) {
        if (!this.isViewInitialized) {
            return;
        }

        if (!this.cmpRef || isComponentChanged) {
            if (isComponentChanged) {
                this.cmpRef.destroy();
            }

            const factory = this.componentFactoryResolver.resolveComponentFactory(this.component);
            this.cmpRef = this.dynamicData.createComponent(factory);
        }

        this.onComponentChanges();
    }

    ngOnChanges(changes) {
        const isComponentChanged =
            (changes.component && changes.component.previousValue !== changes.component.currentValue && !changes.component.firstChange) ||
            (changes.componentData &&
                changes.componentData.previousValue !== changes.componentData.currentValue &&
                !changes.componentData.firstChange);
        this.updateComponent(isComponentChanged);
    }

    ngOnInit() {
        if (this.component) {
            this.isViewInitialized = true;
            this.updateComponent();
        }
    }

    onComponentChanges() {
        if (this.componentData) {
            Object.keys(this.componentData).forEach(key => {
                this.cmpRef.instance[key] = this.componentData[key];
            });
        }
    }

    ngOnDestroy() {
        if (this.cmpRef) {
            this.cmpRef.destroy();
        }
        this.clearContent();
    }

    private renderNativeElement(): void {
        this.clearContent();
        if (this.nativeElement && this.elementContainer && this.elementContainer.nativeElement) {
            const parent = this.elementContainer.nativeElement;
            this.renderer.appendChild(parent, this.nativeElement);
        }
    }

    private clearContent(): void {
        const nativeElem = this.elementContainer ? this.elementContainer.nativeElement : null;
        while (nativeElem && nativeElem.firstChild) {
            this.renderer.removeChild(nativeElem, nativeElem.firstChild);
        }
    }
}
