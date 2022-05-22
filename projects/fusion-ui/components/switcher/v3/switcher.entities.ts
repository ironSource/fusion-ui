export type SwitcherConfiguration = {
    name?: string;
    size?: 'small' | 'large';
};

export interface SwitcherItem {
    id: number | string;
    title: string;
}
