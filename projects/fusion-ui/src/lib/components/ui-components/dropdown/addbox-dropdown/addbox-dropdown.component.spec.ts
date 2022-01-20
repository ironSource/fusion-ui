import {waitForAsync, ComponentFixture, TestBed} from '@angular/core/testing';
import {AddboxDropdownComponent} from './addbox-dropdown.component';
import {ReactiveFormsModule} from '@angular/forms';
import {InputModule} from '../../input/input.module';
import {ClickOutsideModule} from '../../../../directives/click-outside/click-outside.module';
import {FilterByFieldModule} from '../../../../pipes/collection/filter-by-field/filter-by-field.module';
import {CloneModule} from '../../../../pipes/clone/clone.module';
import {DropdownLoaderModule} from '../dropdown-loader/dropdown-loader.module';
import {DropdownOptionModule} from '../dropdown-option/dropdown-option.module';
import {UniqueIdService} from '../../../../services/unique-id/unique-id.service';
import {LogService} from '../../../../services/log/log.service';
import {ClonePipe} from '../../../../pipes/clone/clone.pipe';
import {DropdownService} from '../dropdown.service';
import {FilterByFieldPipe} from '../../../../pipes/collection/filter-by-field/filter-by-field.pipe';
import {ApiService} from '../../../../services/api/api.service';
import {MockLogService, MockUniqueIdService, MockApiService} from '../../../../mocks/mocks-services';
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
