import {Injectable} from '@angular/core';
import {isNullOrUndefined, isString, isUndefined} from '@ironsource/fusion-ui/utils';
import {Subject} from 'rxjs';
import {DropdownOption} from '@ironsource/fusion-ui/components/dropdown-option/entities';

@Injectable({
    providedIn: null
})
export class DropdownService {
    private closeAllSubject$ = new Subject<MouseEvent>();
    public closeAll$ = this.closeAllSubject$.asObservable();

    constructor() {}

    setOptionsState(
        options: DropdownOption[],
        selectedOptions: DropdownOption[]
    ): {options: DropdownOption[]; parentOption?: DropdownOption} {
        let parentOption: DropdownOption;
        const checkOption = (option: DropdownOption): DropdownOption => {
            if (Array.isArray(option.childOptions)) {
                const wasChildSelected = option.childOptions.find(item => item.isSelected);
                option.childOptions = option.childOptions.map(checkOption);

                const curChildSelected = option.childOptions.find(item => item.isSelected);
                option.isOpen = !isUndefined(curChildSelected);
                if (option.isOpen) {
                    parentOption = option;
                }
                if (wasChildSelected !== curChildSelected) {
                    option = {...option};
                }
            } else {
                const wasSelected = option.isSelected;
                Object.assign(option, {
                    isSelected: this.isOptionInSelected(option, selectedOptions)
                });
                if (option.isSelected && !wasSelected) {
                    option = {...option};
                }
            }
            return option;
        };

        return {options: options.map(checkOption), parentOption};
    }

    isOptionInSelected(option: any, selected: any[]): boolean {
        return selected.length > 0 && selected.some(item => (option.id && item.id && item.id === option.id) || item === option);
    }

    mapGroupedOptions(options: DropdownOption[]): DropdownOption[] {
        return options.reduce((acc, item) => {
            if (item.childOptions) {
                acc.push(
                    {
                        id: item.id,
                        isGroup: true,
                        title: item.title,
                        displayText: item.displayText
                    },
                    ...item.childOptions
                );
            } else {
                acc.push(item);
            }
            return acc;
        }, []);
    }

    optionToString(
        option: any,
        mappingOptions?: any,
        {dropdownType, lastSearchValue}: {dropdownType?: string; lastSearchValue?: string} = {},
        withoutHTMLInString: boolean = false
    ): string {
        if (isNullOrUndefined(option)) {
            return '';
        }
        if (dropdownType === 'tags') {
            return option.displayText ? option.displayText : option.title;
        } else {
            let optionToString;
            if (isString(option)) {
                optionToString = option;
            } else if (option?.displayText) {
                optionToString = option.displayText;
            } else {
                mappingOptions = mappingOptions ? mappingOptions : {id: 'id', title: 'title'};
                if (withoutHTMLInString) {
                    return `${option[mappingOptions.id]} ${option[mappingOptions?.title]}`;
                } else {
                    // eslint-disable-next-line
                    return `<span class="is-id">${option[mappingOptions?.id]}</span> <span class="is-title">${this.highlightSearchTerm(
                        option[mappingOptions?.title],
                        lastSearchValue
                    )}</span>`;
                }
            }
            return this.highlightSearchTerm(optionToString, lastSearchValue);
        }
    }

    private highlightSearchTerm(stringToShow: string, lastSearchValue: string): string {
        if (lastSearchValue) {
            try {
                // regex escape (https://makandracards.com/makandra/15879-javascript-how-to-generate-a-regular-expression-from-a-string)
                const searchRegExp = new RegExp(
                    `${lastSearchValue.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')}(?![^<>]*(([\\/\\"']|]]|\\b)>))`,
                    'gm'
                );
                stringToShow = stringToShow.replace(searchRegExp, `<span class='is-keyword'>${lastSearchValue}</span>`);
            } catch (e) {
                // nothing to do;
            }
        }
        return stringToShow;
    }

    emitCloseAllEvent(event: MouseEvent) {
        this.closeAllSubject$.next(event);
    }

    filterEmptyGroupTitle(options: DropdownOption[]): DropdownOption[] {
        return options.filter((item, idx, initial) => {
            return !(
                item.isGroup &&
                (isNullOrUndefined(initial[idx + 1]) || (!isNullOrUndefined(initial[idx + 1]) && initial[idx + 1].isGroup))
            );
        });
    }
}
