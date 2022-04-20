export class EnumHelpers {
    public static keys(enumType: object): string[] {
        const members = Object.keys(enumType);
        return members.filter(x => Number.isNaN(parseInt(x, 10)));
    }

    public static toKeyValueArray(enumType: object) {
        return EnumHelpers.keys(enumType).map(key => {
            return {key, value: enumType[key]};
        });
    }

    public static toFreezedObject(enumType: object): object {
        return Object.freeze(
            EnumHelpers.toKeyValueArray(enumType).reduce((acc, item) => {
                acc[item.key] = item.value;
                return acc;
            }, {})
        );
    }
}
