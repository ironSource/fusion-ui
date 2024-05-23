import {Meta, StoryObj, moduleMetadata, componentWrapperDecorator} from '@storybook/angular';
import {dedent} from 'ts-dedent';
import {CommonModule} from '@angular/common';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SvgModule} from '@ironsource/fusion-ui/components/svg';
import {environment} from '../../../../../stories/environments/environment';
import {DropdownTriggerSize} from '@ironsource/fusion-ui/components/dropdown/v4';
import {MultiDropdownV4Component} from './multi-dropdown-v4.component';
import {DropdownOption} from '@ironsource/fusion-ui/components/dropdown-option';
import {getRandomAppImage, getRandomNumber} from '@ironsource/fusion-ui/storybook-foundations/mocking/app-images-mock';
import {MOCK_OPTIONS_COUNTRIES, TOP_COUNTRIES} from '../../../storybook-foundations/mocking/countrues-mock';
import {CountryCode} from '@ironsource/fusion-ui/components/flag/v4';

const longOptionsList: DropdownOption[] = Array.from({length: 100}, (_, i) => ({
    id: i,
    displayText: `Option_${i}`
}));
const longImagesOptionsList = longOptionsList.map(option => {
    return {
        ...option,
        image: getRandomAppImage()
    };
});
const longImagesAndIconsOptionsList = longImagesOptionsList.map(option => {
    const icon = getRandomNumber(1, 100) % 2 === 0 ? 'v4/branded/android' : 'v4/branded/ios';
    return {
        ...option,
        icon: icon
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
const optionsWithCaptions: DropdownOption[] = foodOptionsList.map(option => {
    return {
        ...option,
        subText: {
            text: getRandomNumber(12345, 99999).toString()
        }
    };
});
const optionsFoodCategories: DropdownOption[] = [
    {
        id: 'vegeterian',
        displayText: 'Vegeterian',
        isGroup: true,
        childOptions: [
            {
                id: 'noodles',
                displayText: 'Noodles'
            },
            {
                id: 'StuffedBellPeppers',
                displayText: 'Stuffed Bell Peppers'
            },
            {
                id: 'EggplantParmesan',
                displayText: 'Eggplant Parmesan'
            }
        ]
    },
    {
        id: 'deserts',
        displayText: 'Desserts',
        isGroup: true,
        childOptions: [
            {
                id: 'lbl-0',
                displayText: 'Tiramisu'
            },
            {
                id: 'lbl-1',
                displayText: 'Crème Brûlée'
            },
            {
                id: 'lbl-2',
                displayText: 'Cheesecake'
            },
            {
                id: 'lbl-3',
                displayText: 'Baklava'
            },
            {
                id: 'lbl-4',
                displayText: 'Chocolate Lava Cake'
            }
        ]
    }
];
const hierarchyOptionsList: DropdownOption[] = [
    {
        id: 'vegeterian',
        displayText: 'Vegeterian',
        isGroup: true
    },
    {
        id: 'fish',
        displayText: 'Fish',
        childOptions: [
            {
                id: 'salmon',
                displayText: 'Salmon'
            },
            {
                id: 'lbl-1',
                displayText: 'Clownfish'
            },
            {
                id: 'lbl-2',
                displayText: 'Blue Tang'
            }
        ]
    },
    {
        id: 'tofu',
        displayText: 'Tofu',
        childOptions: [
            {
                id: 'tofuSteak',
                displayText: 'Tofu steak'
            },
            {
                id: 'lbl-11',
                displayText: 'Mapo Tofu'
            },
            {
                id: 'lbl-22',
                displayText: 'Tofu Stir-Fry'
            }
        ]
    },
    {
        id: 'deserts',
        displayText: 'Desserts',
        isGroup: true
    },
    {
        id: 'des',
        displayText: 'Desserts',
        childOptions: [
            {
                id: 'lbl-0',
                displayText: 'Mushrooms Hamburger'
            },
            {
                id: 'lbl-123',
                displayText: 'Tiramisu'
            },
            {
                id: 'lbl-223',
                displayText: 'Cheesecake'
            },
            {
                id: 'lbl-323',
                displayText: 'Crème Brûlée'
            },
            {
                id: 'lbl-423',
                displayText: 'Panna Cotta'
            }
        ]
    }
];

const groupedCountriesOptions: DropdownOption[] = ((allCountries: any[]): DropdownOption[] => {
    const groupedCountries = [
        {
            id: 'topCountries',
            displayText: 'Top Countries',
            isGroup: true,
            childOptions: []
        },
        {
            id: 'restCountries',
            displayText: 'Rest of the world',
            isGroup: true,
            childOptions: []
        }
    ];
    allCountries.forEach(country => {
        country.flag = country.flag.toLowerCase() as CountryCode;
        groupedCountries[TOP_COUNTRIES.includes(country.id) ? 0 : 1].childOptions.push(country);
    });
    return groupedCountries;
})(MOCK_OPTIONS_COUNTRIES);

const formControl = new FormControl();

const templateCommon = `
<div style="display:flex; gap: 14px;">
    <div style="width: 240px;">
        <fusion-multi-dropdown [selectAllLabel]="selectAllLabel" [size]="size" [search]="search" [placeholder]="placeholder" [options]="optionsFood" [formControl]="formControl"></fusion-multi-dropdown>
    </div>
    <div style="width: 240px;">
        <fusion-multi-dropdown [selectAllLabel]="selectAllLabel" [size]="size" [search]="search" [placeholder]="placeholder" [options]="options" [formControl]="formControl" [testId]="'dropdownTestIdWithIndex'"></fusion-multi-dropdown>
    </div>
</div>
`;
const templateOneDropdown = `
<div style="display:flex; gap: 14px;">
    <div style="width: 300px;">
        <fusion-multi-dropdown
            [selectAllLabel]="selectAllLabel"
            [size]="size"
            [search]="search"
            [placeholder]="placeholder"
            [options]="options"
            [loading]="loading"
            [formControl]="formControl"
            [testId]="testId"
            [helperText]="helperText"
            [helperIcon]="helperIcon"
            [helperVariant]="helperVariant"
        ></fusion-multi-dropdown>
    </div>
</div>
`;
const templateOneDropdownGrouped = `
<div style="display:flex; gap: 14px;">
    <div style="width: 300px;">
        <fusion-multi-dropdown
            [selectAllLabel]="selectAllLabel"
            [size]="size"
            [search]="search"
            [placeholder]="placeholder"
            [optionsGroups]="optionsGroups"
            [formControl]="formControl"
            [testId]="testId"
        ></fusion-multi-dropdown>
    </div>
</div>
`;

export default {
    title: 'V4/Components/Dropdown/MultiSelection',
    component: MultiDropdownV4Component,
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
                component: dedent`Dropdown present a list of options from which a user can select one or several..`
            }
        },
        options: {
            showPanel: true,
            panelPosition: 'bottom'
        }
    },
    args: {
        placeholder: 'Select',
        selectAllLabel: 'Select all',
        search: false,
        size: 'medium' as DropdownTriggerSize,
        options: longOptionsList,
        loading: false,
        optionsFood: foodOptionsList,
        formControl: formControl,
        testId: 'dropdownTestId',
        testIdWithIndex: 'dropdownTestIdWithIndex'
    },
    argTypes: {
        formControl: {
            control: false
        }
    }
} as Meta<MultiDropdownV4Component>;

type Story = StoryObj<MultiDropdownV4Component>;

export const Basic: Story = {
    render: args => ({
        props: args,
        template: templateCommon
    })
};

export const WithSearch: Story = {
    render: args => ({
        props: {
            ...args,
            selectAllLabel: null,
            search: true
        },
        template: templateCommon
    })
};

export const WithIcons: Story = {
    render: args => ({
        props: {
            ...args,
            selectAllLabel: 'Select all',
            options: foodIconOptionsList
        },
        template: templateOneDropdown
    })
};

export const WithImages: Story = {
    render: args => ({
        props: {
            ...args,
            selectAllLabel: 'Select all',
            search: true,
            options: longImagesOptionsList
        },
        template: templateOneDropdown
    })
};

export const WithImagesAndIcons: Story = {
    render: args => ({
        props: {
            ...args,
            selectAllLabel: 'Select all',
            search: true,
            options: longImagesAndIconsOptionsList
        },
        template: templateOneDropdown
    })
};

export const WithFlags: Story = {
    render: args => ({
        props: {
            ...args,
            selectAllLabel: 'Select all',
            search: true,
            optionsGroups: groupedCountriesOptions
        },
        template: templateOneDropdownGrouped
    })
};

export const WithCaption: Story = {
    render: args => ({
        props: {
            ...args,
            selectAllLabel: 'Select all',
            search: true,
            options: optionsWithCaptions
        },
        template: templateOneDropdown
    })
};

export const TreeView2Levels: Story = {
    render: args => ({
        props: {
            ...args,
            selectAllLabel: 'Select all',
            search: true,
            options: optionsFoodCategories
        },
        template: templateOneDropdown
    })
};

export const TreeView3Levels: Story = {
    render: args => ({
        props: {
            ...args,
            search: true,
            options: hierarchyOptionsList
        },
        template: templateOneDropdown
    })
};

export const WithLoading: Story = {
    render: args => ({
        props: {
            ...args,
            options: [],
            loading: true
        },
        template: templateOneDropdown
    })
};

export const HelperText: Story = {
    render: args => ({
        props: {
            ...args,
            helperText: 'Helper text',
            helperIcon: 'ph/fill/info'
        },
        template: templateOneDropdown
    })
};
