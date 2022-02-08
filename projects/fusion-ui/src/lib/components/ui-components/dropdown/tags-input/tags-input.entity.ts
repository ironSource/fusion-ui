import {Tag} from '../../tag/tag';

export interface TagsInputComponentConfigurations {
    id?: string;
    tags?: Tag[] | string[];
    tagList: Tag[] | string[];
    autoComplete?: boolean;
    isPredefinedTags?: boolean;
    isBulkInsertTags?: boolean;
    bulkInsertOptions?: TagsInputBulkInsertOptions;
    maxHeight?: number;
    inputPlaceholder?: string;
    placeholderPrefix?: string;
    noResultMessage?: string;
    loading?: boolean;
    error?: string;
    footer?: boolean | {clearAll?: boolean | string};
}

export interface TagsInputBulkInsertOptions {
    delimiter?: string;
    validateKeyMethod?: (key: string) => boolean;
    maxTagsShown?: number;
}
