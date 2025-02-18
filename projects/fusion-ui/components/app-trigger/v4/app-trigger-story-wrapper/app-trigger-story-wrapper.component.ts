import {ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit, Type} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {DropdownComponent} from '@ironsource/fusion-ui/components/dropdown/v4';
import {AppTriggerComponent} from '@ironsource/fusion-ui/components/app-trigger';
import {DynamicComponent} from '@ironsource/fusion-ui/components/dynamic-components/common/entities';
import {Subject} from 'rxjs';
import {distinctUntilChanged, takeUntil} from 'rxjs/operators';
import {Application} from '@ironsource/fusion-ui/entities';
import {DropdownOption} from '@ironsource/fusion-ui/components/dropdown-option';
import {MultiDropdownComponent} from '@ironsource/fusion-ui/components/multi-dropdown/v4';

@Component({
    selector: 'fusion-app-trigger-story-wrapper',
    standalone: true,
    imports: [ReactiveFormsModule, DropdownComponent, MultiDropdownComponent],
    template: `
        @if (isMultiselect){
        <fusion-multi-dropdown [dynamicTrigger]="customDynamicComponent" [formControl]="dropdownControl" [options]="optionsApp" />
        } @else {
        <fusion-dropdown [dynamicTrigger]="customDynamicComponent" [formControl]="dropdownControl" [options]="optionsApp" />
        }
    `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppTriggerStoryWrapperComponent implements OnInit, OnDestroy {
    @Input() optionsApp: any[];
    @Input() isMultiselect = false;

    dropdownControl = new FormControl();

    customDynamicComponent: DynamicComponent = {
        type: AppTriggerComponent as Type<Component>,
        data: {
            placeholder: 'Select app'
        }
    };

    onDestroy$ = new Subject<void>();

    ngOnInit() {
        this.dropdownControl.valueChanges.pipe(takeUntil(this.onDestroy$), distinctUntilChanged()).subscribe((value: DropdownOption[]) => {
            if (this.isMultiselect && value.length > 1) {
                this.customDynamicComponent.data = {
                    placeholder: value.length + ' selected'
                };
            } else {
                this.customDynamicComponent.data = {
                    application: {
                        key: value[0].id,
                        name: value[0].displayText,
                        imageSrc: value[0].image,
                        platform: (value[0].icon as string).includes('android') ? 'android' : 'ios'
                    } as Application
                };
            }
        });
    }

    ngOnDestroy() {
        this.onDestroy$.next();
        this.onDestroy$.complete();
    }
}
