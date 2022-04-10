/**
 * compare between two dates object only by the actual date and not with time
 */
export function isSameDates(date1, date2: any): boolean {
    return getDateDayTime(date1) === getDateDayTime(date2);
}

/**
 * genereate UTC time without timestamp - only date
 */
export function getDateDayTime(date: Date): number {
    return new Date(date).setHours(0, 0, 0, 0);
}

/**
 * checks string in format YYYY-MM-DD
 */
export function isDateString(date: string): boolean {
    return date.match(/^\d{4}-\d{2}-\d{2}/) !== null;
}

/**
 * checks string in format YYYY-MM-DD hh:mm:ss
 */
export function isDateTimeString(date: string): boolean {
    return date.match(/^\d{4}-\d{2}-\d{2} [0-2]\d:[0-5]\d:[0-5]\d$/) !== null;
}
