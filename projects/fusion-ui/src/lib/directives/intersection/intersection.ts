export interface IntersectionRootMargin {
    top?: string | number;
    left?: string | number;
    bottom?: string | number;
    right?: string | number;
}

export interface IntersectionOptions {
    root?: string | HTMLElement;
    rootMargin?: IntersectionRootMargin;
    threshold?: number | Array<number>;
}
