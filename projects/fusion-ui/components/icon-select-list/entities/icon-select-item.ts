export interface IconSelectItem {
    id: number | string;
    label: string;
    icon?: string | {iconName: string; iconVersion?: string};
    disabled?: boolean;
}
