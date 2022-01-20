import {Component, ElementRef, OnInit, Renderer2} from '@angular/core';
import {TableColumnTypeEnum, TooltipPosition, TooltipType} from 'projects/fusion-ui/src/public-api';
import {DocsMenuItem} from '../../../components/docs-menu/docs-menu';
import {DocsLayoutService} from '../../docs/docs-layout.service';

@Component({
    selector: 'fusion-tooltip-docs',
    templateUrl: './tooltip-docs.component.html',
    styleUrls: ['./tooltip-docs.component.scss']
})
export class TooltipDocsComponent implements OnInit {
    public tooltipPosition = TooltipPosition;
    private styleElement: HTMLStyleElement;
    tooltipTypeHtml = TooltipType.Html;
    rightMenu: DocsMenuItem[] = [
        {
            title: 'Content',
            items: [
                {
                    label: 'Position',
                    scrollTo: '#contentPosition',
                    scrollOffset: 80
                },
                {
                    label: 'Truncate',
                    scrollTo: '#truncate',
                    scrollOffset: 80
                },
                {
                    label: 'Styled Tooltip',
                    scrollTo: '#overrideStyle',
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
                },
                {
                    label: 'CSS Custom Properties',
                    scrollTo: '#customProperties',
                    scrollOffset: 30
                }
            ]
        }
    ];

    customPropertiesTable = {
        columns: [
            {
                key: 'name',
                title: 'Name',
                type: TableColumnTypeEnum.String
            },
            {
                key: 'description',
                title: 'Description',
                type: TableColumnTypeEnum.String
            }
        ],
        rows: [
            {
                name: '--tooltip-text-color',
                description: 'Tooltip Text Color'
            },
            {
                name: '--tooltip-background-color',
                description: 'Tooltip Background Color'
            }
        ]
    };

    constructor(private elementRef: ElementRef, private renderer: Renderer2, private docLayoutService: DocsLayoutService) {}

    ngOnInit() {
        this.docLayoutService.updateLayoutHeaderTitle({
            text: 'Tooltip'
        });
    }

    modifyStyledTooltip(shouldStyle: boolean) {
        if (shouldStyle && !this.styleElement) {
            this.styleElement = this.renderer.createElement('style');
            this.styleElement.innerHTML = `
            fusion-tooltip {
                --tooltip-background-color: white;
                --tooltip-text-color: grey;
            }
            `;
            this.renderer.appendChild(this.elementRef.nativeElement, this.styleElement);
        } else if (!shouldStyle && this.styleElement) {
            this.renderer.removeChild(this.elementRef.nativeElement, this.styleElement);
            this.styleElement = null;
        }
    }
}
