export function getDefaultCssUnit(value: string): string {
    return /^\d+$/.test(value) ? `${value}px` : value;
}
