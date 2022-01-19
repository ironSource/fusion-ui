/* eslint-disable max-len */
import {Component, OnInit, Type} from '@angular/core';
import {DocsMenuItem} from '../../../components/docs-menu/docs-menu';
import {AccordionConfigurations, AccordionItem} from '@ironsource/fusion-ui';
import {AccordionExampleContentComponent} from '../../../components/accordion-example-components/accordion-example-content/accordion-example-content.component';
import {DocsLayoutService} from '../../docs/docs-layout.service';

@Component({
    selector: 'fusion-accordion-docs',
    templateUrl: './accordion-docs.component.html',
    styleUrls: ['./accordion-docs.component.scss']
})
export class AccordionDocsComponent implements OnInit {
    rightMenu: DocsMenuItem[] = [
        {
            title: 'Basic',
            items: [
                {
                    label: 'Basic',
                    scrollTo: '#typeBasic',
                    scrollOffset: 80
                }
            ]
        },
        {
            title: 'Configuration',
            items: [
                {
                    label: 'Parameters',
                    scrollTo: '#params',
                    scrollOffset: 30
                }
            ]
        }
    ];

    // no need AccordionConfigurations for simple data
    accordionSimpleData: AccordionItem[] = [
        {
            headerData: 'Anaru Hakopa',
            contentData:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        },
        {
            headerData: 'Sam Daemon',
            contentData:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        },
        {
            headerData: 'Onuchukwu Iweobiegbulam',
            contentData:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        }
    ];

    accordionWithComponentOptions: AccordionConfigurations = {
        opened: 1,
        iconPosition: 'left',
        content: {component: AccordionExampleContentComponent as Type<Component>}
    };
    accordionWithComponentData: AccordionItem[] = [
        {
            headerData: 'Anaru Hakopa',
            contentData: {
                textContent:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
            }
        },
        {
            headerData: 'Sam Daemon',
            contentData: {
                textContent:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
            }
        },
        {
            headerData: 'Onuchukwu Iweobiegbulam',
            contentData: {
                textContent:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
            }
        }
    ];

    constructor(private docLayoutService: DocsLayoutService) {}

    ngOnInit() {
        this.docLayoutService.updateLayoutHeaderTitle({
            text: 'Accordion'
        });
    }

    accordionChanges($event, target) {
        console.log('accordionChanges: ', target, $event);
    }
}
