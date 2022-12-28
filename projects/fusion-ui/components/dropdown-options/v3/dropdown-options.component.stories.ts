import {Story, Meta} from '@storybook/angular';
import {moduleMetadata} from '@storybook/angular';
import {CommonModule} from '@angular/common';
import {SvgModule} from '@ironsource/fusion-ui/components/svg';
import {environment} from '../../../../../stories/environments/environment';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DropdownOptionsComponent} from '@ironsource/fusion-ui/components/dropdown-options';
import {DropdownService} from '@ironsource/fusion-ui/components/dropdown';
import {
    MOCK_OPTIONS,
    MOCK_ICON_OPTIONS,
    MOCK_OPTIONS_DISABLED,
    MOCK_OPTIONS_COUNTRIES,
    MOCK_OPTIONS_IMAGE,
    MOCK_OPTIONS_IMAGE_ICONS,
    MOCK_OPTIONS_TWO_LINES
} from '@ironsource/fusion-ui/components/dropdown/v3/stories/dropdown.mock';

export default {
    title: 'Components/Dropdown/Option List',
    component: DropdownOptionsComponent,
    decorators: [
        moduleMetadata({
            declarations: [],
            imports: [
                CommonModule,
                FormsModule,
                ReactiveFormsModule,
                SvgModule.forRoot({assetsPath: environment.assetsPath}),
                IconModule,
                DropdownOptionsComponent
            ],
            providers: [DropdownService]
        })
    ],
    args: {
        displayedOptions: MOCK_OPTIONS,
        selected: [MOCK_OPTIONS[3]],
        optionCloseIcon: false
    }
} as Meta<DropdownOptionsComponent>;

const DropdownOptionsTemplate: Story<DropdownOptionsComponent> = (args: DropdownOptionsComponent) => ({
    props: {...args},
    template: `<div style="height: 300px; width: 250px; margin: auto; position: relative">
    <fusion-dropdown-options
        [displayedOptions]="displayedOptions"
        [isMultiRawDisplay]="isMultiRawDisplay"
        [mappingOptions]="mappingOptions"
        [selected]="selected"
        [optionCloseIcon]="optionCloseIcon"
    ></fusion-dropdown-options>
</div>`
});

// region Default
export const Default = DropdownOptionsTemplate.bind({});
// endregion

// region WithDisabled
export const WithDisabled = DropdownOptionsTemplate.bind({});
WithDisabled.args = {
    displayedOptions: MOCK_OPTIONS_DISABLED,
    selected: [MOCK_OPTIONS_DISABLED[3]]
};
// endregion

// region WithClearIcon
export const WithClearIcon = DropdownOptionsTemplate.bind({});
WithClearIcon.args = {
    optionCloseIcon: true
};
// endregion

// region WithIcon
export const WithIcon = DropdownOptionsTemplate.bind({});
WithIcon.args = {
    displayedOptions: MOCK_ICON_OPTIONS,
    selected: [MOCK_ICON_OPTIONS[3]]
};
// endregion

// region WithFlag
export const WithFlag = DropdownOptionsTemplate.bind({});
WithFlag.args = {
    displayedOptions: MOCK_OPTIONS_COUNTRIES,
    selected: [MOCK_OPTIONS_COUNTRIES[3]]
};
// endregion

// region WithImage
export const WithImage = DropdownOptionsTemplate.bind({});
WithImage.args = {
    displayedOptions: MOCK_OPTIONS_IMAGE,
    selected: [MOCK_OPTIONS_IMAGE[3]]
};
// endregion

// region WithImageAndIcon
export const WithImageAndIcon = DropdownOptionsTemplate.bind({});
WithImageAndIcon.args = {
    displayedOptions: MOCK_OPTIONS_IMAGE_ICONS,
    selected: [MOCK_OPTIONS_IMAGE_ICONS[3]]
};
// endregion

// region WithTwoLines
export const WithTwoLines = DropdownOptionsTemplate.bind({});
WithTwoLines.args = {
    displayedOptions: MOCK_OPTIONS_TWO_LINES,
    selected: [MOCK_OPTIONS_TWO_LINES[1]]
};
// endregion
