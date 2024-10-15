import {Type, Component, TemplateRef} from '@angular/core';

export interface DynamicComponent {
    type: Type<Component>;
    data?: any;
}

export interface DynamicComponentConfiguration {
    component?: DynamicComponent;
    element?: Node;
    htmlSnippet?: string;
    templateRef?: TemplateRef<any>;
}
