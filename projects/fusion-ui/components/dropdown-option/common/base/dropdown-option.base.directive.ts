import {
    ComponentFactoryResolver,
    ComponentRef,
    Directive,
    EmbeddedViewRef,
    HostBinding,
    Input,
    OnChanges,
    OnInit,
    Renderer2,
    ViewContainerRef
} from '@angular/core';

@Directive()
export abstract class DropdownOptionBaseDirective implements OnInit, OnChanges {
    @Input() fusionDropdownOption: any;
    @Input() mappingOptions: any;
    @Input() dropdownType: '' | 'multi' | 'tags';
    @Input() lastSearchValue: string;
    @Input() optionRightHoverText: string;
    @Input() isMultiRawDisplay = false;
    @Input() optionCloseIcon: boolean;

    @HostBinding('class.option') optionClass = true;
    @HostBinding('class.is-hidden') isOptionHidden = false;

    // protected optionComponentRef: ComponentRef<DropdownOptionBaseComponent>;
    protected dropdownOptionComponentType;
    protected optionComponentRef;

    constructor(
        public viewContainerRef: ViewContainerRef,
        private componentFactoryResolver: ComponentFactoryResolver,
        private renderer: Renderer2
    ) {}

    ngOnInit() {
        this.isOptionHidden = this.fusionDropdownOption.checked;
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.dropdownOptionComponentType);
        this.optionComponentRef = this.viewContainerRef.createComponent(componentFactory);
        this.updateData();
        const loaderViewRef = this.optionComponentRef.hostView as EmbeddedViewRef<any>;
        this.renderer.appendChild(this.viewContainerRef.element.nativeElement, loaderViewRef.rootNodes[0]);
    }

    ngOnChanges(changes) {
        this.isOptionHidden = this.fusionDropdownOption.checked;
        if (this.optionComponentRef && this.optionComponentRef.instance) {
            this.updateData();
        }
    }

    updateData(): void {
        this.optionComponentRef.instance.option = this.fusionDropdownOption;
        this.optionComponentRef.instance.mappingOptions = this.mappingOptions;
        this.optionComponentRef.instance.dropdownType = this.dropdownType;
        this.optionComponentRef.instance.lastSearchValue = this.lastSearchValue;
        this.optionComponentRef.instance.optionRightHoverText = this.optionRightHoverText;
        this.optionComponentRef.instance.isMultiRawDisplay = this.isMultiRawDisplay;
        this.optionComponentRef.instance.optionCloseIcon = this.optionCloseIcon;
    }
}
