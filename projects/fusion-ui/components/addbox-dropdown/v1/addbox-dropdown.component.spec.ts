import {waitForAsync, ComponentFixture, TestBed} from '@angular/core/testing';
import {ReactiveFormsModule} from '@angular/forms';
import {InputModule} from '@ironsource/fusion-ui/components/input/v1';
import {ClickOutsideModule} from '@ironsource/fusion-ui/directives/click-outside';
import {FilterByFieldPipe} from '@ironsource/fusion-ui/pipes/collection';
import {ClonePipe} from '@ironsource/fusion-ui/pipes/clone';
import {UniqueIdService} from '@ironsource/fusion-ui/services/unique-id';
import {LogService} from '@ironsource/fusion-ui/services/log';
import {ApiService} from '@ironsource/fusion-ui/services/api';
import {MockLogService, MockUniqueIdService, MockApiService} from '@ironsource/fusion-ui/services/mocks';
import {DropdownService} from '@ironsource/fusion-ui/components/dropdown/service';
import {DropdownLoaderModule} from '@ironsource/fusion-ui/components/dropdown-loader/v1';
import {DropdownOptionModule} from '@ironsource/fusion-ui/components/dropdown-option/v1';
import {DropdownOptionsListModule} from '@ironsource/fusion-ui/components/dropdown-options-list/v1';
import {AddboxDropdownComponent} from './addbox-dropdown.component';

describe('AddboxDropdownComponent', () => {
    let component: AddboxDropdownComponent;
    let fixture: ComponentFixture<AddboxDropdownComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            imports: [
                ReactiveFormsModule,
                InputModule,
                ClickOutsideModule,
                FilterByFieldPipe,
                ClonePipe,
                DropdownLoaderModule,
                DropdownOptionModule,
                DropdownOptionsListModule
            ],
            declarations: [AddboxDropdownComponent],
            providers: [
                FilterByFieldPipe,
                ClonePipe,
                DropdownService,
                {
                    provide: LogService,
                    useClass: MockLogService
                },
                {
                    provide: UniqueIdService,
                    useClass: MockUniqueIdService
                },
                {
                    provide: ApiService,
                    useClass: MockApiService
                }
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AddboxDropdownComponent);
        component = fixture.componentInstance;
        component.options = [];
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
