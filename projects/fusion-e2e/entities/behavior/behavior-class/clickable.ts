import {Page} from '@playwright/test';
import {BaseElement} from './base-element';

export class Clickable extends BaseElement {
    constructor(page: Page, selector: string) {
        super(page, selector);
    }
}
