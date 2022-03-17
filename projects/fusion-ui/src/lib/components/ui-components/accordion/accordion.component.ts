import {Component, EventEmitter, Input, Output, ChangeDetectionStrategy, Type} from '@angular/core';
import {AccordionConfigurations, AccordionIconPosition, AccordionItem} from './accordion-entities';
import {DynamicComponentConfiguration} from '../dynamic-components/dynamic-component';
import {isNullOrUndefined} from '@ironsource/fusion-ui/utils';
import {AccordionContentComponent} from './accordion-content/accordion-content.component';
import {AccordionHeaderComponent} from './accordion-header/accordion-header.component';

const DEFAULT_CONFIGURATION = {
    iconPosition: 'right' as AccordionIconPosition,
    header: {component: AccordionHeaderComponent as Type<Component>},
    content: {component: AccordionContentComponent as Type<Component>}
};

@Component({
    selector: 'fusion-accordion',
    templateUrl: './accordion.component.html',
    styleUrls: ['./accordion.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccordionComponent {
    @Input() set data(value: AccordionItem[]) {
        this.accordionBoxes = Array.isArray(value) ? value : [];
    }
    @Input() set configuration(value: AccordionConfigurations) {
        if (!isNullOrUndefined(value)) {
            if (!value.hasOwnProperty('header')) {
                Object.assign(value, {header: {component: AccordionHeaderComponent}});
            }
            if (!value.hasOwnProperty('content')) {
                Object.assign(value, {content: {component: AccordionContentComponent}});
            }
        } else {
            value = DEFAULT_CONFIGURATION;
        }
        this.accordionConfiguration = value;
    }

    @Output() stateChange = new EventEmitter<{opened?: number} | {closed?: number}>();

    accordionBoxes: AccordionItem[] = [];
    accordionConfiguration: AccordionConfigurations = DEFAULT_CONFIGURATION;

    onClick(index): void {
        if (!this.isOpened(index)) {
            this.accordionConfiguration.opened = index;
            this.stateChange.emit({opened: index});
        } else {
            this.accordionConfiguration.opened = null;
            this.stateChange.emit({closed: index});
        }
    }

    /**
     * Get Accordion Item dynamic config
     * @param index - index of target Accordion Item
     * @param type - Accordion Item type ('header' | 'content')
     */
    getItemConfiguration(index: number, type: 'header' | 'content'): DynamicComponentConfiguration {
        return {...this.applyItemOptions(index, this.accordionBoxes[index][type + 'Data'], this.accordionConfiguration[type])};
    }

    isOpened(index): boolean {
        return this.accordionConfiguration.opened === index;
    }

    private getItemData(boxData, index: number) {
        return Object.assign(this.getData(boxData), {
            isAccordion: true,
            isOpen: this.isOpened(index),
            iconPosition: this.accordionConfiguration.iconPosition || 'right'
        });
    }

    private getData(boxData) {
        return typeof boxData === 'string' ? {text: boxData} : boxData;
    }

    private applyItemOptions(index: number, boxData, boxDynamicConfig): DynamicComponentConfiguration {
        if (boxDynamicConfig.hasOwnProperty('component')) {
            return {
                component: {
                    type: boxDynamicConfig.component,
                    data: this.getItemData(boxData, index)
                }
            };
        } else if (boxDynamicConfig.hasOwnProperty('renderElement')) {
            // In case Node element
            return {
                element: boxDynamicConfig.renderElement(this.getItemData(boxData, index))
            };
        } else {
            // in unsupported case
            return null;
        }
    }
}
