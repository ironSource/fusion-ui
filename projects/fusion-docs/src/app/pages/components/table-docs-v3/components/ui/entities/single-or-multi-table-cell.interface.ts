export interface SingleOrMultiTableCell {
    entities: {
        id?: number;
        displayText: string;
        flag?: string;
    }[];
    entityPrefix: string;
    allEntityPrefix: string;
}
