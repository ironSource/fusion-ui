import {
    AfterViewInit,
    Component,
    ContentChild,
    ElementRef,
    EventEmitter,
    Input,
    OnDestroy,
    OnInit,
    Output,
    TemplateRef,
    ViewChild
} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InputComponent, InputModule, InputOptions, InputSize} from '@ironsource/fusion-ui/components/input/v3';
import {TagComponent, TagComponentConfigurations} from '@ironsource/fusion-ui/components/tag';
import {debounceTime, distinctUntilChanged, takeUntil} from 'rxjs/operators';
import {BehaviorSubject, Subject} from 'rxjs';
import {FilterByFieldPipe} from '@ironsource/fusion-ui/pipes/collection';
import {ApiBase} from '@ironsource/fusion-ui/components/api-base';

@Component({
    selector: 'fusion-tags-input',
    standalone: true,
    imports: [CommonModule, InputModule, TagComponent],
    templateUrl: './tags-input.component.html',
    styleUrls: ['./tags-input.component.scss']
})
export class TagsInputComponent implements OnInit, AfterViewInit, OnDestroy {
    /** Placeholder for input used for add new tag */
    @Input() inputPlaceholder = 'add...';
    /** Placeholder for using with drop-down */
    @Input() placeholder: string;

    /** Tags */
    @Input() set tags(value: TagComponentConfigurations[]) {
        if (Array.isArray(value)) {
            this.allTags = value;
            this.displayedTags$.next(value);
        }
    }

    /** Error message */
    @Input() error: string;
    /** Helper message */
    @Input() helper: string;

    /** On add new tag */
    @Output() addNewTag = new EventEmitter<string>();

    /** On tag removed*/
    @Output() removeTag = new EventEmitter<TagComponentConfigurations>();

    /** @internal */
    @ContentChild(ApiBase, {static: true}) apiBase: ApiBase;
    /** @internal */
    @ViewChild('apiBaseTriggerTemplate', {static: true}) apiBaseTriggerTemplate: TemplateRef<any>;
    /** @internal */
    @ViewChild('tagInput') private tagInput: InputComponent;

    /** @internal */
    inputOptions: InputOptions = {size: InputSize.Small};
    /** @ignore */
    displayedTags$ = new BehaviorSubject<TagComponentConfigurations[]>([]);

    private onDestroy$ = new Subject();
    private allTags: TagComponentConfigurations[] = [];

    constructor(protected filterByFieldPipe: FilterByFieldPipe) {}

    ngOnInit(): void {
        if (this.apiBase) {
            this.apiBase.templateRef = this.apiBaseTriggerTemplate;
            this.apiBase.selectedTypeObject = true;
        }
    }

    ngAfterViewInit() {
        if (!this.apiBase) {
            // todo: check with Shai for search with add new - custom.
            this.tagInput.inputControl.valueChanges
                .pipe(debounceTime(1000), distinctUntilChanged(), takeUntil(this.onDestroy$))
                .subscribe(this.searchTag.bind(this));
        }
    }

    ngOnDestroy(): void {
        this.onDestroy$.next();
        this.onDestroy$.complete();
    }

    /** @internal */
    enterNewTag(newTag: string) {
        if (newTag.trim()) {
            this.addNewTag.emit(newTag);
        }
        this.tagInput.clearInput();
    }

    /** @internal */
    tagRemoved(tagRemoved: TagComponentConfigurations) {
        this.removeTag.emit(tagRemoved);
    }

    private searchTag(searchTerm: string) {
        const filtered = this.filterByFieldPipe.transform(this.allTags, ['title'], searchTerm.trim(), {caseSensitive: false});
        this.displayedTags$.next(filtered);
    }
}
