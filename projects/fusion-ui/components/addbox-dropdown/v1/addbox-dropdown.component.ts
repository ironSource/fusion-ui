import {ChangeDetectionStrategy, Component, DoCheck, EventEmitter, forwardRef, Input, OnChanges, OnInit, Output} from '@angular/core';
import {NG_VALUE_ACCESSOR} from '@angular/forms';
import {DropdownService} from '@ironsource/fusion-ui/components/dropdown/service';
import {AddboxDropdownBaseComponent} from '@ironsource/fusion-ui/components/addbox-dropdown/common/base';
import {ApiBase} from '@ironsource/fusion-ui/components/api-base';

@Component({
    selector: 'fusion-addbox-dropdown',
    templateUrl: '../common/base/addbox-dropdown.base.component.html',
    styleUrls: ['./addbox-dropdown.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        DropdownService,
        {provide: ApiBase, useExisting: AddboxDropdownComponent},
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => AddboxDropdownComponent),
            multi: true
        }
    ],
    standalone: false
})
// eslint-disable-next-line @angular-eslint/no-conflicting-lifecycle
export class AddboxDropdownComponent extends AddboxDropdownBaseComponent {}
