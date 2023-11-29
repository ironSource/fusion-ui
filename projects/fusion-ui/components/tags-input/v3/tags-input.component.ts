import {
    ChangeDetectionStrategy,
    Component,
    ContentChild,
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
import {BehaviorSubject, Subject} from 'rxjs';
import {ApiBase} from '@ironsource/fusion-ui/components/api-base';

@Component({
    selector: 'fusion-tags-input',
    standalone: true,
    imports: [CommonModule, InputModule, TagComponent],
    templateUrl: './tags-input.component.html',
    styleUrls: ['./tags-input.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TagsInputComponent implements OnInit, OnDestroy {
    /** Placeholder for input used for add new tag */
    @Input() inputPlaceholder = '...';
    /** Placeholder for using with drop-down */
    @Input() placeholder: string;

    /** Tags */
    @Input() set tags(value: TagComponentConfigurations[]) {
        if (Array.isArray(value)) {
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
    constructor() {}

    ngOnInit(): void {
        if (this.apiBase) {
            this.apiBase.templateRef = this.apiBaseTriggerTemplate;
            this.apiBase.selectedTypeObject = true;
        }
    }

    ngOnDestroy(): void {
        this.onDestroy$.next();
        this.onDestroy$.complete();
    }

    /** @internal */
    enterNewTag(newTag: string) {
        newTag = newTag.trim();
        if (newTag) {
            this.addNewTag.emit(newTag);
        }
        this.tagInput.clearInput();
    }

    /** @internal */
    tagRemoved(tagRemoved: TagComponentConfigurations) {
        this.removeTag.emit(tagRemoved);
    }
}
