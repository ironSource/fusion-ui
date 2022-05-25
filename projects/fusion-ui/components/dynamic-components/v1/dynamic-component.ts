import {Type, Component, TemplateRef} from '@angular/core';

export interface DynamicComponentConfiguration {
    component?: {
        type: Type<Component>;
        data?: any;
    };
    element?: Node;
    htmlSnippet?: string;
    templateRef?: TemplateRef<any>;
}
