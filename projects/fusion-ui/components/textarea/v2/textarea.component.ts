import {ChangeDetectionStrategy, Component, forwardRef} from '@angular/core';
import {NG_VALUE_ACCESSOR} from '@angular/forms';
import {TextareaBaseComponent} from '@ironsource/fusion-ui/components/textarea/common/base';

@Component({
    selector: 'fusion-textarea',
    templateUrl: '../common/base/textarea.base.component.html',
    styleUrls: ['./textarea.component.scss'],
    changeDetection: ChangeDetectionStrategy.Default,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => TextareaComponent),
            multi: true
        }
    ]
})
export class TextareaComponent extends TextareaBaseComponent {}
