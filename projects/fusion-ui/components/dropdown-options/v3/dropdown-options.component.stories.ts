import {Story, Meta} from '@storybook/angular';
import {moduleMetadata} from '@storybook/angular';
import {CommonModule} from '@angular/common';
import {SvgModule} from '@ironsource/fusion-ui/components/svg';
import {environment} from '../../../../../stories/environments/environment';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DropdownOptionsComponent} from '@ironsource/fusion-ui/components/dropdown-options';

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
            ]
        })
    ]
} as Meta<DropdownOptionsComponent>;

const DropdownTemplate: Story<DropdownOptionsComponent> = (args: DropdownOptionsComponent) => ({
    props: {...args}
});

// region Default
export const Default = DropdownTemplate.bind({});
