import {Component, ElementRef, OnInit, Renderer2, Type} from '@angular/core';
import {TooltipPosition, TooltipType} from '@ironsource/fusion-ui/components/tooltip/common/base';
import {DocsMenuItem} from '../../../components/docs-menu/docs-menu';
import {DocsLayoutService} from '../../docs/docs-layout.service';
import {BehaviorSubject} from 'rxjs';
import {delay, tap} from 'rxjs/operators';
import {VersionService} from '../../../services/version/version.service';
import {TableColumnTypeEnum} from '@ironsource/fusion-ui/components/table/common/entities';
import {ExmlForTooltipComponent} from '../../../components/exml-for-tooltip/exml-for-tooltip.component';

@Component({
    selector: 'fusion-tooltip-docs',
    templateUrl: './tooltip-docs.component.html',
    styleUrls: ['./tooltip-docs.component.scss']
})
export class TooltipDocsComponent implements OnInit {
    public tooltipPosition = TooltipPosition;
    private styleElement: HTMLStyleElement;

    tooltipTypeHtml = TooltipType.Html;

    tooltipTypeComponent = TooltipType.Component;
    tooltipCustomComponent = ExmlForTooltipComponent as Type<Component>;
    tooltipCustomData = {ppid: 'a0ad70e0-bc66-414c-901b-35a410cffd50A'};

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

    styleUpdatingDelay = 0;
    styleUpdating$ = new BehaviorSubject(false);
    selectedVersion$ = this.versionService.styleVersion$.pipe(
        tap(() => {
            this.styleUpdating$.next(true);
        }),
        delay(this.styleUpdatingDelay),
        tap(() => {
            this.styleUpdating$.next(false);
        })
    );

    constructor(
        private versionService: VersionService,
        private elementRef: ElementRef,
        private renderer: Renderer2,
        private docLayoutService: DocsLayoutService
    ) {}

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
