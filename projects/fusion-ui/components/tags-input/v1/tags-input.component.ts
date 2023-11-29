import {Component, forwardRef, ViewChild} from '@angular/core';
import {NG_VALUE_ACCESSOR} from '@angular/forms';
import {FilterByFieldPipe} from '@ironsource/fusion-ui/pipes/collection';
import {ClonePipe} from '@ironsource/fusion-ui/pipes/clone';
import {InputComponent} from '@ironsource/fusion-ui/components/input/v1';
import {DropdownService} from '@ironsource/fusion-ui/components/dropdown/service';
import {TagsInputBaseComponent} from '@ironsource/fusion-ui/components/tags-input/common/base';

@Component({
    selector: 'fusion-tags-input',
    templateUrl: './tags-input.component.html',
    styleUrls: ['./tags-input.component.scss'],
    host: {'ui-version': '1'},
    providers: [
        ClonePipe,
        FilterByFieldPipe,
        DropdownService,
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => TagsInputComponent),
            multi: true
        }
    ]
})
export class TagsInputComponent extends TagsInputBaseComponent {
    @ViewChild('tagInput') set tagInput(value: InputComponent) {
        if (!!value && !!value.elementRef && !!value.elementRef.nativeElement) {
            if (this.isAddTagsAllowed || this.autoComplete) {
                this.inputElement = value.elementRef.nativeElement.querySelector('input');
            }
        }
    }
}
