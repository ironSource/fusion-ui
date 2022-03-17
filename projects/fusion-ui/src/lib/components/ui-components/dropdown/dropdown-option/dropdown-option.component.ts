import {
    ChangeDetectionStrategy,
    Component,
    ComponentFactoryResolver,
    ComponentRef,
    Directive,
    EmbeddedViewRef,
    HostBinding,
    Injector,
    Input,
    OnChanges,
    OnDestroy,
    OnInit,
    Renderer2,
    ViewContainerRef
} from '@angular/core';
import {DropdownService} from '../dropdown.service';
import {DropdownOption} from '../entities/dropdown-option';
import {BehaviorSubject} from 'rxjs';
import {StyleBase} from '../../../style/style-base';
import {takeUntil} from 'rxjs/operators';
import {StyleVersion} from '@ironsource/fusion-ui/services';

@Directive({
    selector: '[fusionDropdownOption]'
})
export class DropdownOptionDirective implements OnInit, OnChanges {
    @Input() fusionDropdownOption: any;
    @Input() mappingOptions: any;
    @Input() dropdownType: '' | 'multi' | 'tags';
    @Input() lastSearchValue: string;
    @Input() optionRightHoverText: string;
    @Input() isMultiRawDisplay = false;
    @HostBinding('class.option') optionClass = true;
    @HostBinding('class.is-hidden') isOptionHidden = false;

    private optionComponentRef: ComponentRef<DropdownOptionComponent>;

    constructor(
        public viewContainerRef: ViewContainerRef,
        private componentFactoryResolver: ComponentFactoryResolver,
        private renderer: Renderer2
    ) {}

    ngOnInit() {
        this.isOptionHidden = this.fusionDropdownOption.checked;
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(DropdownOptionComponent);
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
    }
}

@Component({
    selector: 'fusion-dropdown-option',
    templateUrl: './dropdown-option.component.html',
    styleUrls: ['./dropdown-option.component.scss', './dropdown-option.component-v2.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DropdownOptionComponent extends StyleBase implements OnInit, OnDestroy {
    @Input() option: DropdownOption;
    @Input() mappingOptions: any;
    @Input() dropdownType: '' | 'multi' | 'tags';
    @Input() lastSearchValue: string;
    @Input() optionRightHoverText: string;
    @Input() set isMultiRawDisplay(value: boolean) {
        this.isMultiRawDisplay$.next(value);
    }

    @HostBinding('class.multi-raw-display') get shouldDisplayMultiRaw(): boolean {
        return this.isMultiRawDisplay$.getValue();
    }
    @HostBinding('class.is-has-children') get hasChildren(): boolean {
        return Array.isArray(this.option.childOptions);
    }
    @HostBinding('class.is-open') get isOpen(): boolean {
        return this.option.isOpen;
    }

    isMultiRawDisplay$ = new BehaviorSubject<boolean>(false);
    settings: any;
    optionToStringFunc = this.dropdownService.optionToString.bind(this.dropdownService);

    dropdownArrowIconName$ = new BehaviorSubject<string | {iconName: string; iconVersion?: string}>({
        iconName: 'arrow-dropdown',
        iconVersion: 'v1'
    });

    constructor(injector: Injector, public dropdownService: DropdownService) {
        super(injector);
    }

    ngOnInit() {
        this.settings = {
            dropdownType: this.dropdownType,
            lastSearchValue: this.lastSearchValue
        };

        this.selectedVersion$.pipe(takeUntil(this.onDestroy$)).subscribe(styleVersion => {
            this.dropdownArrowIconName$.next(
                styleVersion === StyleVersion.V2 ? 'arrow-down' : {iconName: 'arrow-dropdown', iconVersion: 'v1'}
            );
        });
    }

    ngOnDestroy(): void {
        super.ngOnDestroy();
    }
}
