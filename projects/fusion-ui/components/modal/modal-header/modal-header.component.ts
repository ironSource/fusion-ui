import {Component, EventEmitter, Injector, Input, Output} from '@angular/core';
import {FusionBase, StyleVersion} from '@ironsource/fusion-ui/components/fusion-base';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
    selector: 'fusion-modal-header',
    templateUrl: './modal-header.component.html',
    styleUrls: ['./modal-header.component.scss', './modal-header.component-v2.scss']
})
export class ModalHeaderComponent extends FusionBase {
    @Input() headerText: string;
    @Input() noHeaderBorder = false;
    @Output() closed = new EventEmitter();

    closeIconName$: Observable<string> = this.selectedVersion$.pipe(
        map(styleVersion => (styleVersion === StyleVersion.V2 || styleVersion === StyleVersion.V3 ? 'close' : 'close')),
        startWith('close')
    );

    constructor(injector: Injector) {
        super(injector);
    }
}
