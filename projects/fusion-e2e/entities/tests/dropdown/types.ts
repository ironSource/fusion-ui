export type SelectionByIndex = {
    testId: string;
    index: number;
};

export type SelectionByName = {
    testId: string;
    name: string;
    shouldOpen?: boolean;
};

export type SelectMultiple = {
    testId: string;
    itemsToSelect: number[];
};

export type SelectMultipleByName = {
    testId: string;
    itemsToSelect: string[];
};
