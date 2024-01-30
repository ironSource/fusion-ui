import {Meta, StoryObj, moduleMetadata, componentWrapperDecorator} from '@storybook/angular';
import {dedent} from 'ts-dedent';
import {CommonModule} from '@angular/common';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SvgModule} from '@ironsource/fusion-ui/components/svg';
import {environment} from '../../../../../stories/environments/environment';
import {DropdownOption} from '@ironsource/fusion-ui/components/dropdown-option';
import {DropdownV4Component} from './dropdown-v4.component';
import {DropdownTriggerSize} from './dropdown-v4.entities';
import {getRandomAppImage, getRandomNumber} from '../../../storybook-foundations/mocking/app-images-mock';
import {MOCK_OPTIONS_COUNTRIES} from '../v3/stories/dropdown.mock';
import {CountryCode} from '@ironsource/fusion-ui/components/flag/v4';

// region mock options data
const longOptionsList: DropdownOption[] = Array.from({length: 100}, (_, i) => ({
    id: i,
    displayText: `Option_${i}`
}));
const longIconOptionsList = longOptionsList.map(option => {
    return {
        ...option,
        icon: 'v4/branded/android'
    };
});
const longImagesOptionsList = longOptionsList.map(option => {
    return {
        ...option,
        image: getRandomAppImage()
    };
});
const longImagesAndIconsOptionsList = longImagesOptionsList.map(option => {
    return {
        ...option,
        icon: 'v4/branded/android'
    };
});

const foodOptionsList: DropdownOption[] = [
    {
        id: 'pizza',
        displayText: 'Pizza'
    },
    {
        id: 'hamburger',
        displayText: 'Hamburger'
    },
    {
        id: 'plant',
        displayText: 'Vegan'
    },
    {
        id: 'bowl-food',
        displayText: 'Noodles'
    },
    {
        id: 'coffee',
        displayText: 'Coffee'
    }
];
const foodIconOptionsList: DropdownOption[] = foodOptionsList.map(option => {
    return {
        ...option,
        icon: 'ph/' + option.id
    };
});

const flagOptionsList: DropdownOption[] = MOCK_OPTIONS_COUNTRIES.map(flag => {
    return {
        id: flag.id,
        flag: flag.id.toLowerCase() as CountryCode,
        displayText: flag.displayText
    };
});

const optionsWithCaptions: DropdownOption[] = foodOptionsList.map(option => {
    return {
        ...option,
        subText: {
            text: getRandomNumber(12345, 99999).toString()
        }
    };
});

const optionsWithCategories: DropdownOption[] = [
    {
        id: 'vegans',
        displayText: 'Vegetarian',
        isGroup: true
    },
    {
        id: 'pasta',
        displayText: 'Pasta Primavera'
    },
    {
        id: 'curry',
        displayText: 'Chickpea and Spinach Curry'
    },
    {
        id: 'salad',
        displayText: 'Caprese Salad'
    },
    {
        id: 'dessert',
        displayText: 'Dessert',
        isGroup: true
    },
    {
        id: 'cake',
        displayText: 'Cake'
    },
    {
        id: 'pie',
        displayText: 'Pie'
    },
    {
        id: 'icecream',
        displayText: 'Ice Cream'
    }
];

// endregion

// region formControls
const formControlOptionsList = new FormControl();
// endregion

// region templated
const templateCommon = `
<div style="display:flex; gap: 14px;">
    <div style="width: 240px;">
        <fusion-dropdown [size]="size" [search]="search" [placeholder]="placeholder" [options]="optionsFood" [formControl]="formControl"></fusion-dropdown>
    </div>
    <div style="width: 240px;">
        <fusion-dropdown [size]="size" [search]="search" [placeholder]="placeholder" [options]="options" [formControl]="formControl"></fusion-dropdown>
    </div>
</div>
`;
const templateCommonOneDropdown = `
<div style="display:flex; gap: 14px;">
    <div style="width: 240px;">
        <fusion-dropdown [size]="size" [search]="search" [placeholder]="placeholder" [options]="options" [formControl]="formControl"></fusion-dropdown>
    </div>
</div>
`;
// endregion

export default {
    title: 'V4/Components/Dropdown/SingleSelection',
    component: DropdownV4Component,
    decorators: [
        moduleMetadata({
            declarations: [],
            imports: [CommonModule, FormsModule, ReactiveFormsModule, SvgModule.forRoot({assetsPath: environment.assetsPath})]
        }),
        componentWrapperDecorator(story => `<div style="height: 350px;">${story}</div>`)
    ],
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component: dedent`***DropdownComponent***.`
            }
        },
        options: {
            showPanel: true,
            panelPosition: 'bottom'
        }
    },
    args: {
        placeholder: 'Select',
        size: 'medium' as DropdownTriggerSize,
        options: longOptionsList,
        optionsFood: foodOptionsList,
        formControl: formControlOptionsList
    }
} as Meta<DropdownV4Component>;

type Story = StoryObj<DropdownV4Component>;

export const Basic: Story = {
    render: args => ({
        props: args,
        template: templateCommon
    })
};
export const WithSearch: Story = {
    render: args => ({
        props: {...args, search: true},
        template: templateCommon
    })
};

export const WithIcon: Story = {
    render: args => ({
        props: {
            ...args,
            optionsFood: foodIconOptionsList,
            options: longIconOptionsList
        },
        template: templateCommon
    })
};

export const WithImages: Story = {
    render: args => ({
        props: {
            ...args,
            options: longImagesOptionsList
        },
        template: templateCommonOneDropdown
    })
};

export const WithImagesAndIcons: Story = {
    render: args => ({
        props: {
            ...args,
            options: longImagesAndIconsOptionsList
        },
        template: templateCommonOneDropdown
    })
};

export const WithFlag: Story = {
    render: args => ({
        props: {
            ...args,
            options: flagOptionsList
        },
        template: templateCommonOneDropdown
    })
};

export const WithCaption: Story = {
    render: args => ({
        props: {
            ...args,
            options: optionsWithCaptions
        },
        template: templateCommonOneDropdown
    })
};

export const WithCategories: Story = {
    render: args => ({
        props: {
            ...args,
            options: optionsWithCategories
        },
        template: templateCommonOneDropdown
    })
};

export const WithLoading: Story = {
    render: args => ({
        props: {
            ...args,
            loading: true,
            options: []
        },
        template: templateCommonOneDropdown
    })
};
