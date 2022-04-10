import {waitForAsync, ComponentFixture, TestBed} from '@angular/core/testing';
import {AddboxDropdownComponent} from './addbox-dropdown.component';
import {ReactiveFormsModule} from '@angular/forms';
import {InputModule} from '@ironsource/fusion-ui/components/input';
import {ClickOutsideModule} from '@ironsource/fusion-ui/directives/click-outside';
import {FilterByFieldModule} from '@ironsource/fusion-ui/pipes/collection';
import {CloneModule} from '@ironsource/fusion-ui/pipes/clone';
import {DropdownLoaderModule} from '../dropdown-loader/dropdown-loader.module';
import {DropdownOptionModule} from '../dropdown-option/dropdown-option.module';
import {UniqueIdService} from '@ironsource/fusion-ui/services/unique-id';
import {LogService} from '@ironsource/fusion-ui/services/log';
import {ClonePipe} from '@ironsource/fusion-ui/pipes/clone';
import {DropdownService} from '../dropdown.service';
import {FilterByFieldPipe} from '@ironsource/fusion-ui/pipes/collection';
import {ApiService} from '@ironsource/fusion-ui/services/api';
import {MockLogService, MockUniqueIdService, MockApiService} from '@ironsource/fusion-ui/services/mocks';
import {DropdownOptionsListModule} from '../dropdown-options-list/dropdown-options-list.module';

describe('AddboxDropdownComponent', () => {
    let component: AddboxDropdownComponent;
    let fixture: ComponentFixture<AddboxDropdownComponent>;

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                imports: [
                    ReactiveFormsModule,
                    InputModule,
                    ClickOutsideModule,
                    FilterByFieldModule,
                    CloneModule,
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
        })
    );

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
