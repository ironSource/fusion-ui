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
import {MOCK_OPTIONS, MOCK_OPTIONS_COUNTRIES} from '@ironsource/fusion-ui/components/dropdown/v3/stories/dropdown.mock';

export default {
    title: 'Components/Dropdown/Include-Exclude',
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
                DropdownDualMultiSelectModule
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
    },
    args: {
        title: 'Label name',
        placeholder: 'Select items',
        selectedItemName: {singular: 'Item', plural: 'Items'},
        items: MOCK_OPTIONS,
        pendingItems: false
    },
    argTypes: {
        formControl: {
            control: false
        },
        placeholder: {
            control: 'text'
        },
        title: {
            control: 'text'
        }
    }
} as Meta<DropdownDualMultiSelectComponent>;

const DropdownIncludeExcludeTemplate: Story<DropdownDualMultiSelectComponent> = (args: DropdownDualMultiSelectComponent) => ({
    props: {...args},
    template: `<div style="height: 400px; width: 450px; margin: auto">
 <fusion-dropdown-dual-multi-select
    [title]="title"
    [placeholder]="placeholder"
    [selectedItemName]="selectedItemName"
    [formControl]="paginationItemsControl"
    [items]="items"
    [pendingItems]="pendingItems"
 ></fusion-dropdown-dual-multi-select>
</div>`
});

// region Default
export const Default = DropdownIncludeExcludeTemplate.bind({});
Default.args = {
    formControl: new FormControl([])
};
Default.parameters = {
    docs: {
        source: {
            language: 'typescript',
            code: dedent`
import { Component} from '@angular/core';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { DropdownDualMultiSelectModule } from "@ironsource/fusion-ui/components/dropdown-dual-multi-select";
import { DropdownOption } from '@ironsource/fusion-ui/components/dropdown-option/entities';

@Component({
  selector: 'fusion-story-wrapper',
  template: \`<fusion-dropdown-dual-multi-select
    [title]="title"
    [placeholder]="placeholder"
    [selectedItemName]="selectedItemName"
    [formControl]="formControl"
    [items]="items"
 ></fusion-dropdown-dual-multi-select>\`,
  standalone: true,
  imports: [ReactiveFormsModule, DropdownDualMultiSelectModule],
})
export class FusionStoryWrapperComponent {
    title = 'Label name';
    placeholder = 'Select items';
    selectedItemName = {singular: 'Item', plural: 'Items'};
    formControl = new FormControl();
    items: DropdownOption[] = ${JSON.stringify(MOCK_OPTIONS)};
}
            `,
            format: true,
            type: 'code'
        }
    }
};
// endregion

// region Loading
export const Loading = DropdownIncludeExcludeTemplate.bind({});
Loading.args = {
    formControl: new FormControl([]),
    pendingItems: true
};
Loading.parameters = {
    docs: {
        source: {
            language: 'typescript',
            code: dedent`
import { Component} from '@angular/core';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { DropdownDualMultiSelectModule } from "@ironsource/fusion-ui/components/dropdown-dual-multi-select";
import { DropdownOption } from '@ironsource/fusion-ui/components/dropdown-option/entities';

@Component({
  selector: 'fusion-story-wrapper',
  template: \`<fusion-dropdown-dual-multi-select
    [title]="title"
    [placeholder]="placeholder"
    [selectedItemName]="selectedItemName"
    [formControl]="formControl"
    [items]="items"
    [pendingItems]="pendingItems"
 ></fusion-dropdown-dual-multi-select>\`,
  standalone: true,
  imports: [ReactiveFormsModule, DropdownDualMultiSelectModule],
})
export class FusionStoryWrapperComponent {
    title = 'Label name';
    placeholder = 'Select items';
    selectedItemName = {singular: 'Item', plural: 'Items'};
    formControl = new FormControl();
    pendingItems: true
    items: DropdownOption[] = ${JSON.stringify(MOCK_OPTIONS)};
}
            `,
            format: true,
            type: 'code'
        }
    }
};
// endregion

// region WithFlag
export const WithFlag = DropdownIncludeExcludeTemplate.bind({});
WithFlag.args = {
    formControl: new FormControl([]),
    title: 'Countries',
    placeholder: 'Select countries',
    selectedItemName: {singular: 'country', plural: 'countries'},
    items: MOCK_OPTIONS_COUNTRIES
};
WithFlag.parameters = {
    docs: {
        source: {
            language: 'typescript',
            code: dedent`
import { Component} from '@angular/core';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { DropdownDualMultiSelectModule } from "@ironsource/fusion-ui/components/dropdown-dual-multi-select";
import { DropdownOption } from '@ironsource/fusion-ui/components/dropdown-option/entities';

@Component({
  selector: 'fusion-story-wrapper',
  template: \`<fusion-dropdown-dual-multi-select
    [title]="title"
    [placeholder]="placeholder"
    [selectedItemName]="selectedItemName"
    [formControl]="formControl"
    [items]="items"
 ></fusion-dropdown-dual-multi-select>\`,
  standalone: true,
  imports: [ReactiveFormsModule, DropdownDualMultiSelectModule],
})
export class FusionStoryWrapperComponent {
    title = 'Countries';
    placeholder = 'Select countries';
    selectedItemName = {singular: 'country', plural: 'countries'};
    formControl = new FormControl();
    items: DropdownOption[] = ${JSON.stringify(MOCK_OPTIONS_COUNTRIES)};
}
            `,
            format: true,
            type: 'code'
        }
    }
};
// endregion
