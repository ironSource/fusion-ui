import {ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Injector, Input, OnInit, Output, Renderer2} from '@angular/core';
import {StyleBase} from '@ironsource/fusion-ui/components/style';
import {BehaviorSubject, fromEvent} from 'rxjs';
import {StyleVersion} from '@ironsource/fusion-ui/services/version';
import {ChipFilterComponentConfigurations, ChipType, ChipTypeToClass} from './chip-filter-component-configurations';
import {takeUntil} from 'rxjs/operators';
import {IconData} from '@ironsource/fusion-ui/components';

@Component({
    selector: 'fusion-chip-filter',
    templateUrl: './chip-filter.component.html',
    styleUrls: ['./chip-filter.component-v3.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChipFilterComponent extends StyleBase implements OnInit {
    id: number | string;
    width: number;
    tooltipWidth: number;
    tooltipContent: string;

    private _selected: boolean;
    private _disabled: boolean;
    private _close: boolean;

    @Input() set configuration(value: ChipFilterComponentConfigurations) {
        if (!!value) {
            this.id = value.id;
            this.close = value.close;
            this.disabled = value.disabled;
            this.selected = value.selected;
            this.type = value.type;
            this.tooltipContent = value.tooltipContent;
            this.tooltipWidth = value.tooltipWidth;
        }
    }
    @Input() suppressClickOnRemove = false;

    @Input() set close(close: boolean) {
        this._close = close;
        this.changeHostClass('with-closed-icon', close);
    }

    get close(): boolean {
        return this._close;
    }

    @Input() set disabled(disabled: boolean) {
        this._disabled = disabled;
        this.changeHostClass('fu-disabled', disabled);
    }

    get disabled(): boolean {
        return this._disabled;
    }

    @Input()
    set type(chipType: ChipType) {
        this.changeHostClass(ChipTypeToClass[chipType], !!chipType);
    }

    @Input()
    set selected(selected: boolean) {
        this.changeHostClass('fu-selected', selected);
        this._selected = selected;
    }

    get selected(): boolean {
        return this._selected;
    }

    @Output() onRemove = new EventEmitter();
    @Output() onSelectedChange = new EventEmitter<any>();

    constructor(injector: Injector, private element: ElementRef, private renderer: Renderer2) {
        super(injector);
    }

    ngOnInit() {
        this.width = this.element.nativeElement.offsetWidth;
        if (!this.close && !this.disabled) {
            this.setClickListener();
        }
    }

    closeClicked($event) {
        this.renderer.removeChild(this.renderer.parentNode(this.element.nativeElement), this.element.nativeElement);
        this.onRemove.emit();
        if (this.suppressClickOnRemove) {
            $event.stopPropagation();
        }
    }

    setClickListener(): void {
        this.onDestroy$.next();
        fromEvent(this.element.nativeElement, 'click')
            .pipe(takeUntil(this.onDestroy$))
            .subscribe(_ => {
                this.selected = !this.selected;
                this.onSelectedChange.emit({
                    id: this.id,
                    selected: this.selected
                });
            });
    }

    changeHostClass(className: string, add: boolean): void {
        const classAction = add ? 'addClass' : 'removeClass';
        this.renderer[classAction](this.element.nativeElement, className);
    }
}
