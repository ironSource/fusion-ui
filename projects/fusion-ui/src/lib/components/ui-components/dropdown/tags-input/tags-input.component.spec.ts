import {waitForAsync, ComponentFixture, TestBed} from '@angular/core/testing';
import {TagsInputComponent} from './tags-input.component';
import {TagModule} from '../../tag/tag.module';
import {IconModule} from '../../icon/icon.module';
import {InputModule} from '../../input/input.module';
import {DropdownOptionModule} from '../dropdown-option/dropdown-option.module';
import {DropdownLoaderModule} from '../dropdown-loader/dropdown-loader.module';
import {ReactiveFormsModule} from '@angular/forms';
import {ClickOutsideModule} from '../../../../directives/click-outside/click-outside.module';
import {FilterByFieldPipe} from '../../../../pipes/collection/filter-by-field/filter-by-field.pipe';
import {ClonePipe} from '../../../../pipes/clone/clone.pipe';
import {DropdownOptionsListModule} from '../dropdown-options-list/dropdown-options-list.module';

describe('TagsInputComponent', () => {
    let component: TagsInputComponent;
    let fixture: ComponentFixture<TagsInputComponent>;

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                imports: [
                    ReactiveFormsModule,
                    TagModule,
                    IconModule,
                    InputModule,
                    DropdownOptionModule,
                    DropdownLoaderModule,
                    ClickOutsideModule,
                    DropdownOptionsListModule
                ],
                declarations: [TagsInputComponent],
                providers: [FilterByFieldPipe, ClonePipe]
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(TagsInputComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
