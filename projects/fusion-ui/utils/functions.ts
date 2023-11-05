export function isArray(object: any): boolean {
    return Array.isArray(object);
}

export function isRegExp(object: any) {
    return object && typeof object === 'object' && object.constructor === RegExp;
}

export function isDate(object: any): boolean {
    return object instanceof Date && isFinite(+object);
}

export function isError(object: any): boolean {
    return object instanceof Error && typeof object.message !== 'undefined';
}

export function isBoolean(object: any): object is boolean {
    return typeof object === 'boolean';
}

export function isFunction(object: any): boolean {
    return typeof object === 'function';
}

export function isNull(object: any): boolean {
    return object === null;
}

export function isNullOrUndefined(object: any): boolean {
    return object === null || object === undefined;
}

export function isNumber(object: any): object is number {
    return typeof object === 'number';
}

export function isObject(object: any): object is object {
    return object !== null && typeof object === 'object';
}

export function isPrimitive(object: any): boolean {
    return (typeof object !== 'object' && typeof object !== 'function') || object === null;
}

export function isString(object: any): object is string {
    return typeof object === 'string';
}

export function isSymbol(object: any): boolean {
    return typeof object === 'symbol';
}

export function isUndefined(object: any): boolean {
    return object === undefined;
}
