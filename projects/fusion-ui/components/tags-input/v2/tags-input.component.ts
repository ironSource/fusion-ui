import {Component, forwardRef} from '@angular/core';
import {NG_VALUE_ACCESSOR} from '@angular/forms';
import {FilterByFieldPipe} from '@ironsource/fusion-ui/pipes/collection';
import {ClonePipe} from '@ironsource/fusion-ui/pipes/clone';
import {DropdownService} from '@ironsource/fusion-ui/components/dropdown/service';
import {TagsInputBaseComponent} from '@ironsource/fusion-ui/components/tags-input/common/base';
import {AttributionService} from '@ironsource/fusion-ui/services/attribution';

@Component({
    selector: 'fusion-tags-input',
    templateUrl: './tags-input.component.html',
    styleUrls: ['./tags-input.component.scss'],
    providers: [
        ClonePipe,
        FilterByFieldPipe,
        DropdownService,
        AttributionService,
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => TagsInputComponent),
            multi: true
        }
    ]
})
export class TagsInputComponent extends TagsInputBaseComponent {}
