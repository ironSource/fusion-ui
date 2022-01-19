import {DropdownOption} from '@ironsource/fusion-uifusion-ui';
import {DropdownCustomPlaceholderComponent} from '../../../components/dropdown-custom-placeholder/dropdown-custom-placeholder.component';
import {Component, Type} from '@angular/core';

export const MOCK_DUAL_OPTIONS_PRESET: DropdownOption[] = [
    {id: 1, title: 'Mario Speedwagon'},
    {id: 2, title: 'Petey Cruiser'},
    {id: 3, title: 'Anna Sthesia'},
    {id: 4, title: 'Paul Molive'}
];

export const MOCK_DUAL_OPTIONS_PRESET_DISABLED: DropdownOption[] = [
    {id: 1, title: 'Mario Speedwagon', isDisabled: true},
    {id: 2, title: 'Petey Cruiser', isDisabled: true},
    {id: 3, title: 'Anna Sthesia', isDisabled: true},
    {id: 4, title: 'Paul Molive', isDisabled: true}
];

export const MOCK_DUAL_OPTIONS: DropdownOption[] = [
    {id: 1, title: 'Mario Speedwagon'},
    {id: 2, title: 'Petey Cruiser'},
    {id: 3, title: 'Anna Sthesia'},
    {id: 4, title: 'Paul Molive'},
    {id: 5, title: 'Anna Mull'},
    {id: 6, title: 'Gail Forcewind'},
    {id: 7, title: 'Paige Turner'},
    {id: 8, title: 'Bob Frapples'},
    {id: 9, title: 'Walter Melon'},
    {id: 10, title: 'Nick R. Bocker'},
    {id: 11, title: 'Barb Ackue'},
    {id: 12, title: 'Buck Kinnear'},
    {id: 13, title: 'Greta Life'},
    {id: 14, title: 'Ira Membrit'},
    {id: 15, title: 'Shonda Leer'},
    {id: 16, title: 'Brock Lee'},
    {id: 17, title: 'Maya Didas'},
    {id: 18, title: 'Rick O`Shea'},
    {id: 19, title: 'Pete Sariya'},
    {id: 20, title: 'Monty Carlo'},
    {id: 21, title: 'Mario Speed'},
    {id: 22, title: 'Harry Potter'},
    {id: 23, title: 'Ron Wisely'},
    {id: 24, title: 'Severus Snape'},
    {id: 25, title: 'Hermione Granger'},
    {id: 26, title: 'Tom Hanks'},
    {id: 27, title: 'The Rock'},
    {id: 28, title: 'Tom Hardy'},
    {id: 29, title: 'Tom Hiddleston'},
    {id: 30, title: 'Captain America'},
    {id: 31, title: 'Black Panther'},
    {id: 32, title: 'Black Widow'},
    {id: 33, title: 'Green Lantern'},
    {id: 34, title: 'Chris Evans'},
    {id: 35, title: 'Robert Downey Jr.'},
    {id: 36, title: 'Robert Redford'},
    {id: 37, title: 'Winter Soldier'},
    {id: 38, title: 'Bucky Barnes'},
    {id: 39, title: 'Sam Wilson'},
    {id: 40, title: 'Bruce Banner'}
];

export const MOCK_DUAL_OPTIONS_DISABLED: DropdownOption[] = [
    {id: 1, title: 'Mario Speedwagon', isDisabled: true},
    {id: 2, title: 'Petey Cruiser', isDisabled: true},
    {id: 3, title: 'Anna Sthesia', isDisabled: true},
    {id: 4, title: 'Paul Molive', isDisabled: true},
    {id: 5, title: 'Anna Mull'},
    {id: 6, title: 'Gail Forcewind'},
    {id: 7, title: 'Paige Turner'},
    {id: 8, title: 'Bob Frapples'},
    {id: 9, title: 'Walter Melon'},
    {id: 10, title: 'Nick R. Bocker'},
    {id: 11, title: 'Barb Ackue'},
    {id: 12, title: 'Buck Kinnear'},
    {id: 13, title: 'Greta Life'},
    {id: 14, title: 'Ira Membrit'},
    {id: 15, title: 'Shonda Leer'},
    {id: 16, title: 'Brock Lee'},
    {id: 17, title: 'Maya Didas'},
    {id: 18, title: 'Rick O`Shea'},
    {id: 19, title: 'Pete Sariya'},
    {id: 20, title: 'Monty Carlo'},
    {id: 21, title: 'Mario Speed'},
    {id: 22, title: 'Harry Potter'},
    {id: 23, title: 'Ron Wisely'},
    {id: 24, title: 'Severus Snape'},
    {id: 25, title: 'Hermione Granger'},
    {id: 26, title: 'Tom Hanks'},
    {id: 27, title: 'The Rock'},
    {id: 28, title: 'Tom Hardy'},
    {id: 29, title: 'Tom Hiddleston'},
    {id: 30, title: 'Captain America'},
    {id: 31, title: 'Black Panther'},
    {id: 32, title: 'Black Widow'},
    {id: 33, title: 'Green Lantern'},
    {id: 34, title: 'Chris Evans'},
    {id: 35, title: 'Robert Downey Jr.'},
    {id: 36, title: 'Robert Redford'},
    {id: 37, title: 'Winter Soldier'},
    {id: 38, title: 'Bucky Barnes'},
    {id: 39, title: 'Sam Wilson'},
    {id: 40, title: 'Bruce Banner'}
];

export const MOCK_DUAL_OPTIONS_DISABLE_All_ITEMS: DropdownOption[] = [
    {id: 1, title: 'Mario Speedwagon', isDisabled: true},
    {id: 2, title: 'Petey Cruiser', isDisabled: true},
    {id: 3, title: 'Anna Sthesia', isDisabled: true},
    {id: 4, title: 'Paul Molive', isDisabled: true},
    {id: 5, title: 'Anna Mull', isDisabled: true},
    {id: 6, title: 'Gail Forcewind', isDisabled: true},
    {id: 7, title: 'Paige Turner', isDisabled: true},
    {id: 8, title: 'Bob Frapples', isDisabled: true},
    {id: 9, title: 'Walter Melon', isDisabled: true},
    {id: 10, title: 'Nick R. Bocker', isDisabled: true},
    {id: 11, title: 'Barb Ackue', isDisabled: true},
    {id: 12, title: 'Buck Kinnear', isDisabled: true},
    {id: 13, title: 'Greta Life', isDisabled: true},
    {id: 14, title: 'Ira Membrit', isDisabled: true},
    {id: 15, title: 'Shonda Leer', isDisabled: true},
    {id: 16, title: 'Brock Lee', isDisabled: true},
    {id: 17, title: 'Maya Didas', isDisabled: true},
    {id: 18, title: 'Rick O`Shea', isDisabled: true},
    {id: 19, title: 'Pete Sariya', isDisabled: true},
    {id: 20, title: 'Monty Carlo', isDisabled: true},
    {id: 21, title: 'Mario Speed', isDisabled: true},
    {id: 22, title: 'Harry Potter', isDisabled: true},
    {id: 23, title: 'Ron Wisely', isDisabled: true},
    {id: 24, title: 'Severus Snape', isDisabled: true},
    {id: 25, title: 'Hermione Granger', isDisabled: true},
    {id: 26, title: 'Tom Hanks', isDisabled: true},
    {id: 27, title: 'The Rock', isDisabled: true},
    {id: 28, title: 'Tom Hardy', isDisabled: true},
    {id: 29, title: 'Tom Hiddleston', isDisabled: true},
    {id: 30, title: 'Captain America', isDisabled: true},
    {id: 31, title: 'Black Panther', isDisabled: true},
    {id: 32, title: 'Black Widow', isDisabled: true},
    {id: 33, title: 'Green Lantern', isDisabled: true},
    {id: 34, title: 'Chris Evans', isDisabled: true},
    {id: 35, title: 'Robert Downey Jr.', isDisabled: true},
    {id: 36, title: 'Robert Redford', isDisabled: true},
    {id: 37, title: 'Winter Soldier', isDisabled: true},
    {id: 38, title: 'Bucky Barnes', isDisabled: true},
    {id: 39, title: 'Sam Wilson', isDisabled: true},
    {id: 40, title: 'Bruce Banner', isDisabled: true}
];

export const MOCK_DUAL_OPTIONS_DYNAMIC: DropdownOption[] = [
    {
        id: 1,
        content: {
            component: {
                type: DropdownCustomPlaceholderComponent as Type<Component>,
                data: {
                    text: 'Custom item 1'
                }
            }
        }
    },
    {
        id: 2,
        content: {
            component: {
                type: DropdownCustomPlaceholderComponent as Type<Component>,
                data: {
                    text: 'Custom item 2'
                }
            }
        }
    },
    {
        id: 3,
        content: {
            component: {
                type: DropdownCustomPlaceholderComponent as Type<Component>,
                data: {
                    text: 'Custom item 3'
                }
            }
        }
    },
    {
        id: 4,
        content: {
            component: {
                type: DropdownCustomPlaceholderComponent as Type<Component>,
                data: {
                    text: 'Custom item 4'
                }
            }
        }
    },
    {
        id: 5,
        content: {
            component: {
                type: DropdownCustomPlaceholderComponent as Type<Component>,
                data: {
                    text: 'Custom item 5'
                }
            }
        }
    },
    {
        id: 6,
        content: {
            component: {
                type: DropdownCustomPlaceholderComponent as Type<Component>,
                data: {
                    text: 'Custom item 6'
                }
            }
        }
    },
    {
        id: 7,
        content: {
            component: {
                type: DropdownCustomPlaceholderComponent as Type<Component>,
                data: {
                    text: 'Custom item 7'
                }
            }
        }
    },
    {
        id: 8,
        content: {
            component: {
                type: DropdownCustomPlaceholderComponent as Type<Component>,
                data: {
                    text: 'Custom item 8'
                }
            }
        }
    },
    {
        id: 9,
        content: {
            component: {
                type: DropdownCustomPlaceholderComponent as Type<Component>,
                data: {
                    text: 'Custom item 9'
                }
            }
        }
    },
    {
        id: 10,
        content: {
            component: {
                type: DropdownCustomPlaceholderComponent as Type<Component>,
                data: {
                    text: 'Custom item 10'
                }
            }
        }
    },
    {
        id: 11,
        content: {
            component: {
                type: DropdownCustomPlaceholderComponent as Type<Component>,
                data: {
                    text: 'Custom item 11'
                }
            }
        }
    }
];

export const dynamicDisplayItemBackendPagination = {
    id: 0,
    content: {
        component: {
            type: DropdownCustomPlaceholderComponent as Type<Component>,
            data: {
                text: ''
            }
        }
    }
};
