/* eslint-disable quote-props */

export const THEME_COLORS_PALETTE: Array<any> = [
    {
        name: 'Light',
        className: 'is-color-light-500',
        colors: [
            {
                name: '$light-100',
                className: 'is-color-light-100',
                value: '#F9FAFB'
            },
            {
                name: '$light-200',
                className: 'is-color-light-200',
                value: '#F3F5F7'
            },
            {
                name: '$light-300',
                className: 'is-color-light-300',
                value: '#EAEEF1'
            },
            {
                name: '$light-400',
                className: 'is-color-light-400',
                value: '#E4E9ED'
            },
            {
                name: '$light-500',
                className: 'is-color-light-500',
                value: '#E1E6EB'
            },
            {
                name: '$light-600',
                className: 'is-color-light-600',
                value: '#C2CDD7'
            },
            {
                name: '$light-700',
                className: 'is-color-light-700',
                value: '#95A6B8'
            },
            {
                name: '$light-800',
                className: 'is-color-light-800',
                value: '#678099'
            },
            {
                name: '$light-900',
                className: 'is-color-light-900',
                value: '#52677B'
            }
        ]
    },
    {
        name: 'Dark',
        className: 'is-color-dark-500',
        colors: [
            {
                name: '$dark-100',
                className: 'is-color-dark-100',
                value: '#224574'
            },
            {
                name: '$dark-300',
                className: 'is-color-dark-300',
                value: '#172D4C'
            },
            {
                name: '$dark-400',
                className: 'is-color-dark-400',
                value: '#112239'
            },
            {
                name: '$dark-500',
                className: 'is-color-dark-500',
                value: '#0B1625'
            }
        ]
    },
    {
        name: 'Primary',
        className: 'is-color-primary-500',
        colors: [
            {
                name: '$primary-100',
                className: 'is-color-primary-100',
                value: '#F3F9FF'
            },
            {
                name: '$primary-200',
                className: 'is-color-primary-200',
                value: '#C3DFFC'
            },
            {
                name: '$primary-500',
                className: 'is-color-primary-500',
                value: '#3091F6'
            }
        ]
    }
];

export const UI_COLORS_PALETTE: Array<any> = [
    {
        name: 'Negative',
        className: 'is-color-negative-500',
        colors: [
            {
                name: '$negative-100',
                className: 'is-color-negative-100',
                value: '#FDEFF3'
            },
            {
                name: '$negative-200',
                className: 'is-color-negative-200',
                value: '#F59CB3'
            },
            {
                name: '$negative-300',
                className: 'is-color-negative-300',
                value: '#f06e90'
            },
            {
                name: '$negative-500',
                className: 'is-color-negative-500',
                value: '#E1174C'
            }
        ]
    },
    {
        name: 'Neutral',
        className: 'is-color-neutral-500',
        colors: [
            {
                name: '$neutral-100',
                className: 'is-color-neutral-100',
                value: '#FFFCF8'
            },
            {
                name: '$neutral-200',
                className: 'is-color-neutral-200',
                value: '#FFE6C5'
            },
            {
                name: '$neutral-500',
                className: 'is-color-neutral-500',
                value: '#FFBB5F'
            },
            {
                name: '$neutral-700',
                className: 'is-color-neutral-700',
                value: '#FF9403'
            }
        ]
    },
    {
        name: 'Positive',
        className: 'is-color-positive-500',
        colors: [
            {
                name: '$positive-100',
                className: 'is-color-positive-100',
                value: '#DEFCFC'
            },
            {
                name: '$positive-200',
                className: 'is-color-positive-200',
                value: '#B0F7F7'
            },
            {
                name: '$positive-300',
                className: 'is-color-positive-300',
                value: '#52eeef'
            },
            {
                name: '$positive-500',
                className: 'is-color-positive-500',
                value: '#13c7c8'
            }
        ]
    }
];

export const COLORS_TEXT: Array<any> = [
    {
        name: 'text-body',
        color: '$dark-300',
        cssTextClass: 'is-dark-300',
        cssBgClass: 'is-color-dark-300'
    },
    {
        name: 'text-instruction',
        color: '$light-900',
        cssTextClass: 'is-light-900',
        cssBgClass: 'is-color-light-900'
    },
    {
        name: 'text-disabled',
        color: '$light-800',
        cssTextClass: 'is-light-800',
        cssBgClass: 'is-color-light-800'
    },
    {
        name: 'text-link',
        color: '$primary-500',
        cssTextClass: 'is-primary-500',
        cssBgClass: 'is-color-primary-500'
    },
    {
        name: 'text-negative',
        color: '$negative-500',
        cssTextClass: 'is-negative-500',
        cssBgClass: 'is-color-negative-500'
    },
    {
        name: 'text-success',
        color: '$positive-500',
        cssTextClass: 'is-positive-500',
        cssBgClass: 'is-color-positive-500'
    },
    {
        name: 'text-warning',
        color: '$neutral-500',
        cssTextClass: 'is-neutral-500',
        cssBgClass: 'is-color-neutral-500'
    }
];
