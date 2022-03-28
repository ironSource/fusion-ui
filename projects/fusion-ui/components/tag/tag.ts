export interface Tag {
    id: number | string;
    title: string;
    icon?: string | {iconName: string; iconVersion?: string};
    flag?: string;
    tooltip?: string;
}
