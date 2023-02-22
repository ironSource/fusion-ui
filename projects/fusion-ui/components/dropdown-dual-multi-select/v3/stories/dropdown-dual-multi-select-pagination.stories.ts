import {Story, Meta} from '@storybook/angular';
import {moduleMetadata} from '@storybook/angular';
import {dedent} from 'ts-dedent';
import {CommonModule} from '@angular/common';
import {SvgModule} from '@ironsource/fusion-ui/components/svg';
import {environment} from '../../../../../../stories/environments/environment';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ApiBase} from '@ironsource/fusion-ui/components/api-base';
import {DropdownDualMultiSelectComponent} from '../dropdown-dual-multi-select.component';
import {DropdownDualMultiSelectModule} from '../dropdown-dual-multi-select.module';
import {DropdownIncludeExcludeDemoWrapperComponent} from '@ironsource/fusion-ui/components/dropdown-dual-multi-select/v3/stories/dropdown-include-exclude-demo-wrapper/dropdown-include-exclude-demo-wrapper.component';

export default {
    title: 'Components/Dropdown/Include-Exclude/BackEnd Pagination',
    component: DropdownDualMultiSelectComponent,
    decorators: [
        moduleMetadata({
            declarations: [],
            imports: [
                CommonModule,
                FormsModule,
                ReactiveFormsModule,
                SvgModule.forRoot({assetsPath: environment.assetsPath}),
                IconModule,
                DropdownDualMultiSelectModule,
                DropdownIncludeExcludeDemoWrapperComponent
            ],
            providers: [{provide: ApiBase, useExisting: DropdownDualMultiSelectComponent}]
        })
    ],
    parameters: {
        docs: {
            description: {
                component: dedent`**Dropdown with Include-Exclude**`
            }
        }
    }
} as Meta<DropdownDualMultiSelectComponent>;

const DropdownIncludeExcludeTemplate: Story<DropdownDualMultiSelectComponent> = (args: DropdownDualMultiSelectComponent) => ({
    props: {...args},
    template: `<div style="height: 400px; width: 450px; margin: auto">
    <fusion-dropdown-include-exclude-demo-wrapper></fusion-dropdown-include-exclude-demo-wrapper>
</div>`
});

// region Default
export const Default = DropdownIncludeExcludeTemplate.bind({});
// endregion
