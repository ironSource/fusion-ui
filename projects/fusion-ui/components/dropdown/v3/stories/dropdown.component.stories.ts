import {Story, Meta} from '@storybook/angular';
import {moduleMetadata} from '@storybook/angular';
import {dedent} from 'ts-dedent';
import {CommonModule} from '@angular/common';
import {SvgModule} from '@ironsource/fusion-ui/components/svg';
import {environment} from '../../../../../../stories/environments/environment';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {DropdownComponent} from '../dropdown.component';
import {DropdownModule} from '../dropdown.module';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MOCK_OPTIONS} from '@ironsource/fusion-ui/components/dropdown/v3/stories/dropdown.mock';
import {MultiDropdownModule} from '@ironsource/fusion-ui/components/multi-dropdown';
import {ErrorMessageModule} from '@ironsource/fusion-ui/components/error-message';
import {DropdownCustomPlaceholderModule} from '../../../../../fusion-docs/src/app/components/dropdown-custom-placeholder/dropdown-custom-placeholder.module';

const dropdownFormControl = new FormControl([]);

export default {
    title: 'Components/Dropdown',
    component: DropdownComponent,
    decorators: [
        moduleMetadata({
            declarations: [],
            imports: [
                CommonModule,
                FormsModule,
                ReactiveFormsModule,
                SvgModule.forRoot({assetsPath: environment.assetsPath}),
                IconModule,
                DropdownModule,
                MultiDropdownModule,
                ErrorMessageModule,
                DropdownCustomPlaceholderModule
            ]
        })
    ],
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/V4eZU3qDgKYPhR4eaTvSwy/%F0%9F%8E%A8-Style-guide-2021-Master?node-id=5208%3A106031&t=1VJVOxcrIRM8BH92-1'
        },
        docs: {
            description: {
                component: dedent`**Dropdowns** Dropdowns showcase a list of options that allow users to make single or multiple selections. An option that’s been selected can represent a corresponding value in forms or be used to filter/sort content.`
            }
        }
    },
    args: {
        formControl: dropdownFormControl,
        options: MOCK_OPTIONS
    }
} as Meta<DropdownComponent>;

const DropdownTemplate: Story<DropdownComponent> = (args: DropdownComponent) => ({
    props: {...args},
    template: `<div style="width: 250px; margin: auto">
<fusion-dropdown placeholder="Select option"
     [formControl]="formControl"
     [options]="options"
     ></fusion-dropdown>
</div>`
});

// region Default
export const Default = DropdownTemplate.bind({});
Default.args = {
    formControl: dropdownFormControl
};

// endregion
