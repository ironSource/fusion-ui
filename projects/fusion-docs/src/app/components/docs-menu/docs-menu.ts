export interface DocsMenuItem {
    title: string;
    items: DocsMenuSubItem[];
    isClosed?: boolean;
}

interface DocsMenuSubItem {
    label: string;
    scrollTo: string;
    scrollOffset?: number;
    styleVersions?: number[];
}
