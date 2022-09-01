import {Component, OnInit, Input} from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';

@Component({
    selector: 'fusion-demo-filter',
    template: `
        <div [ngClass]="{isOpen: isOpen}">
            <fusion-icon [name]="{iconName: 'filter', iconVersion: 'v1'}" *ngIf="!isActive"></fusion-icon>
            <fusion-icon [name]="{iconName: 'apps', iconVersion: 'v1'}" *ngIf="isActive"></fusion-icon>
        </div>
    `,
    styleUrls: ['./demo-filter.component.scss']
})
export class DemoFilterComponent {
    @Input() isActive: boolean;
    @Input() isOpen: boolean;
}

@Component({
    selector: 'fusion-header-overlay-docs',
    templateUrl: './header-overlay-docs.component.html',
    styleUrls: ['./header-overlay-docs.component.scss']
})
export class HeaderOverlayDocsComponent implements OnInit {
    rightMenu: Array<any> = [
        {
            title: 'Header Overlay',
            items: [
                {
                    label: 'Regular',
                    scrollTo: '#typeRegular',
                    scrollOffset: 0
                }
            ]
        },
        {
            title: 'Configuration',
            items: [
                {
                    label: 'Parameters',
                    scrollTo: '#params',
                    scrollOffset: 30
                },
                {
                    label: 'Events',
                    scrollTo: '#events',
                    scrollOffset: 30
                }
            ]
        }
    ];

    formGroup: FormGroup;
    headerComponent = DemoFilterComponent;
    headerPopUpFormControl = new FormControl<any>({isOpen: false, isActive: false});
    bodyInput = new FormControl(false);

    ngOnInit() {
        this.formGroup = new FormGroup({
            headerPopUpFormControl: this.headerPopUpFormControl,
            bodyInput: this.bodyInput
        });

        this.bodyInput.valueChanges.subscribe(value => {
            this.headerPopUpFormControl.setValue({isActive: value});
        });
    }

    onClose() {
        this.headerPopUpFormControl.setValue({isOpen: false, error: ''});
    }

    onSaveButtonClicked() {
        this.headerPopUpFormControl.setValue({error: 'Oh Noes!'});
    }
}
