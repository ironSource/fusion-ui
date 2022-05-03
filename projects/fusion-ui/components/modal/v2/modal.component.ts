import {ChangeDetectionStrategy, Component, forwardRef, OnDestroy, OnInit} from '@angular/core';
import {NG_VALUE_ACCESSOR} from '@angular/forms';
import {ModalBaseComponent} from '@ironsource/fusion-ui/components/modal/common/base';

@Component({
    selector: 'fusion-modal',
    templateUrl: '../common/base/modal.base.component.html',
    styleUrls: ['./modal.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => ModalComponent),
            multi: true
        }
    ]
})
export class ModalComponent extends ModalBaseComponent implements OnInit, OnDestroy {}
