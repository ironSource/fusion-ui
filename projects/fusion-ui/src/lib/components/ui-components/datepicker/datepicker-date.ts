export class DatepickerDate {
    constructor(
        public date: Date,
        public isToday: boolean,
        public isInMonth: boolean,
        public isSelected: boolean,
        public isDisabled: boolean
    ) {}
}
