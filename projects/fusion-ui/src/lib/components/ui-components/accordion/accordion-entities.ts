/*
 * Created on 2020.10.14 By Andy Kononenko (andyk@ironsrc.com)
 */
import {Type, Component} from '@angular/core';
/**
 * Accordion Item entity
 * Data that will be passed to callback function
 */
export interface AccordionItem {
    headerData: any;
    contentData: any;
}

export interface AccordionConfigurations {
    opened?: number;
    iconPosition?: AccordionIconPosition;
    header?: {
        component?: Type<Component>;
        renderElement?: (data, index) => Node;
    };
    content?: {
        component?: Type<Component>;
        renderElement?: (data, index) => Node;
    };
}

export type AccordionIconPosition = 'left' | 'right';
