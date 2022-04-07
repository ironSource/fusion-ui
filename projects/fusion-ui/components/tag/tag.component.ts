import {ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Injector, Input, OnInit, Output, Renderer2} from '@angular/core';
import {StyleBase, StyleVersion} from '@ironsource/fusion-ui/components/style';
import {BehaviorSubject, fromEvent} from 'rxjs';
import {TagComponentConfigurations} from './tag-component-configurations';
import {takeUntil} from 'rxjs/operators';

@Component({
    selector: 'fusion-tag',
    templateUrl: './tag.component.html',
    styleUrls: ['./tag.component.scss', './tag.component-v2.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TagComponent extends StyleBase implements OnInit {
    closeIconName$ = new BehaviorSubject<string | {iconName: string; iconVersion?: any}>({
        iconName: 'clear-full-circle',
        iconVersion: 'v1'
    });
    width: number;
    tooltipWidth: number;
    _selected: boolean;
    _disabled: boolean;
    _close: boolean;

    @Input() set configuration(value: TagComponentConfigurations) {
        if (!!value) {
            this.id = value.id;
            this.icon = value.icon;
            this.flag = value.flag;
            this.title = value.title;
            this.close = value.close;
            this.disabled = value.disabled;
            this.role = value.role;
            this.selected = value.selected;
            this.tooltipContent = value.tooltipContent;
            this.tooltipWidth = value.tooltipWidth;
        }
    }

    // deprecated inputs
    @Input() id: number | string;
    @Input() icon: string | {iconName: string; iconVersion: string};
    @Input() flag: string;
    @Input() title: string;
    @Input() tooltipContent: string;
    // when using tags inside an isClickOutside directive,
    // the click from the onremove will cause isClickOutside to trigger as an outside click
    // due to the tag being already removed from the DOM tree when the click reaches isClickOutside
    // in which case we want to set suppressClickOnRemove as true
    @Input() suppressClickOnRemove = false;

    @Input() set role(role: 'filter') {
        this.changeHostClass('tag-filter', role === 'filter');
    }

    @Input() set close(close: boolean) {
        this._close = close;
        this.changeHostClass('with-closed-icon', close);
    }

    get close(): boolean {
        return this._close;
    }

    @Input() set disabled(disabled: boolean) {
        this._disabled = disabled;
        this.changeHostClass('disabled', disabled);
    }

    get disabled(): boolean {
        return this._disabled;
    }

    @Input()
    set selected(selected: boolean) {
        this.changeHostClass('selected', selected);
        this._selected = selected;
    }

    get selected(): boolean {
        return this._selected;
    }

    // eslint-disable-next-line
    @Output() onRemove = new EventEmitter();
    // eslint-disable-next-line
    @Output() onSelectedChange = new EventEmitter<any>();

    constructor(injector: Injector, private element: ElementRef, private renderer: Renderer2) {
        super(injector);
    }

    ngOnInit() {
        this.width = this.element.nativeElement.offsetWidth;
        this.selectedVersion$.subscribe(styleVersion => {
            this.closeIconName$.next(styleVersion === StyleVersion.V2 ? 'close' : {iconName: 'clear-full-circle', iconVersion: 'v1'});
        });

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
