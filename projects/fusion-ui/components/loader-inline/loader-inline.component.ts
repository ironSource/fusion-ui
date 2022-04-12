import {ChangeDetectionStrategy, Component, Injector, Input} from '@angular/core';
import {FusionBaseComponent} from '@ironsource/fusion-ui/components/fusion-base';

@Component({
    selector: 'fusion-loader-inline',
    templateUrl: './loader-inline.component.html',
    styleUrls: ['./loader-inline.component.scss', './loader-inline.component-v2.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoaderInlineComponent extends FusionBaseComponent {
    @Input() status: boolean;
    @Input() text: string;
    @Input() color: 'grey' | 'blue' | 'white' = 'grey';

    constructor(injector: Injector) {
        super(injector);
    }
}
