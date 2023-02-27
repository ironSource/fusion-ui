import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TagsInputComponent} from '@ironsource/fusion-ui/components/tags-input';
import {TagComponentConfigurations} from '@ironsource/fusion-ui/components/tag';
import {DropdownDualMultiSelectModule} from '@ironsource/fusion-ui/components/dropdown-dual-multi-select';
import {DropdownOption} from '@ironsource/fusion-ui/components/dropdown-option';
import {takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs';

@Component({
    selector: 'fusion-tags-input-include-exclude-wrapper',
    standalone: true,
    imports: [CommonModule, FormsModule, ReactiveFormsModule, TagsInputComponent, DropdownDualMultiSelectModule],
    template: ` <fusion-tags-input [placeholder]="placeholder" [tags]="tags" [error]="error" [helper]="helper">
        <div class="filter-element">
            <fusion-dropdown-dual-multi-select
                [title]="title"
                [formControl]="formControl"
                [items]="items"
            ></fusion-dropdown-dual-multi-select>
        </div>
    </fusion-tags-input>`
})
export class TagsInputStoryIncludeExcludeWrapperComponent implements OnInit, OnDestroy {
    @Input() placeholder: string;
    @Input() error: string;
    @Input() helper: string;

    @Input() items: DropdownOption[];

    tags: TagComponentConfigurations[];
    formControl = new FormControl();
    title = 'Applications';

    private onDestroy$ = new Subject<void>();

    ngOnInit() {
        this.formControl.valueChanges.pipe(takeUntil(this.onDestroy$)).subscribe(selected => {
            if (Array.isArray(selected) && selected.length) {
                //check for all apps selected
                if (selected.length === this.items.length) {
                    this.tags = [];
                    this.placeholder = 'All applications';
                } else {
                    this.placeholder = '';
                    this.tags = selected.map((option: DropdownOption) => ({
                        id: option.id,
                        title: option.displayText,
                        image: option.image
                    }));
                }
            } else {
                this.placeholder = 'Select applications';
                this.tags = [];
            }
        });
    }

    ngOnDestroy(): void {
        this.onDestroy$.next();
        this.onDestroy$.complete();
    }
}
