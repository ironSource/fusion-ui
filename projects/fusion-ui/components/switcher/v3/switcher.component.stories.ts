import {Story, Meta} from '@storybook/angular';
import {moduleMetadata} from '@storybook/angular';
import {CommonModule} from '@angular/common';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SwitcherComponent} from './switcher.component';

// data mock
const switcherOptions = [
    {id: 1, title: 'omri'},
    {id: 2, title: 'yossi'},
    {id: 3, title: 'harel'},
    {id: 4, title: 'test1a2222222'},
    {id: 5, title: 'test2'},
    {id: 6, title: 'test3'},
    {id: 7, title: 'test4'}
];

const selectedSwitch = new FormControl(switcherOptions[1]);

export default {
    title: 'Components/Inputs/Switch',
    component: SwitcherComponent,
    decorators: [
        moduleMetadata({
            declarations: [SwitcherComponent],
            imports: [CommonModule, FormsModule, ReactiveFormsModule]
        })
    ],
    argTypes: {
        control: 'boolean'
    }
} as Meta<SwitcherComponent>;

const SwitchTemplate: Story<SwitcherComponent> = (args: SwitcherComponent) => ({
    props: args,
    template: `<fusion-switcher [formControl]="selectedSwitch" [options]="switcherOptions"></fusion-switcher>`
});

export const Default = SwitchTemplate.bind({});
Default.args = {
    switcherOptions: switcherOptions,
    selectedSwitch: selectedSwitch
};
