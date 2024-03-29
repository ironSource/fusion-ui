import {Component, OnInit} from '@angular/core';
import {DocsMenuItem} from '../../../components/docs-menu/docs-menu';
import {TableColumnTypeEnum} from '@ironsource/fusion-ui/components/table/common/entities';
import {StatusLabelBorderType, StatusLabelConfig, StatusLabelStatus} from '@ironsource/fusion-ui/components/status-label/common/entities';
import {DomSanitizer} from '@angular/platform-browser';
import {DocsLayoutService} from '../../docs/docs-layout.service';
import {StatusLabelType} from '@ironsource/fusion-ui/components/status-label/v3/status-label.entity';

@Component({
    selector: 'fusion-status-label-docs',
    templateUrl: './status-label-docs.component.html',
    styleUrls: ['./status-label-docs.component.scss']
})
export class StatusLabelDocsComponent implements OnInit {
    rightMenu: DocsMenuItem[] = [
        {
            title: 'Basic',
            items: [
                {
                    label: 'Basic',
                    scrollTo: '#basicStatusLabels',
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
                name: 'Success (default)'
            },
            {
                name: '--state-label-success-inner-color',
                description: 'Success (default) text color'
            },
            {
                name: '--state-label-success-background-color',
                description: 'Success (default) background color'
            },
            {
                name: '--state-label-success-hover-background-color',
                description: 'Success (default) on hover background color'
            },
            {
                name: 'Warning'
            },
            {
                name: '--state-label-warning-inner-color',
                description: 'Warning text color'
            },
            {
                name: '--state-label-warning-background-color',
                description: 'Warning background color'
            },
            {
                name: '--state-label-warning-hover-background-color',
                description: 'Warning on hover background color'
            },
            {
                name: 'Error'
            },
            {
                name: '--state-label-error-inner-color',
                description: 'Error text color'
            },
            {
                name: '--state-label-error-background-color',
                description: 'Error background color'
            },
            {
                name: '--state-label-error-hover-background-color',
                description: 'Error on hover background color'
            }
        ]
    };

    configSuccessIcon: StatusLabelConfig = {icon: {iconName: 'info-circle', iconVersion: 'v2'}};
    configSuccessRounded: StatusLabelConfig = {borderType: StatusLabelBorderType.Circle};
    configSuccessRoundedIcon: StatusLabelConfig = {
        borderType: StatusLabelBorderType.Circle,
        icon: {iconName: 'info-circle', iconVersion: 'v2'}
    };
    configWarning: StatusLabelConfig = {status: StatusLabelStatus.Warning};
    configWarningIcon: StatusLabelConfig = {icon: {iconName: 'info-circle', iconVersion: 'v2'}, status: StatusLabelStatus.Warning};
    configWarningRounded: StatusLabelConfig = {status: StatusLabelStatus.Warning, borderType: StatusLabelBorderType.Circle};
    configWarningRoundedIcon: StatusLabelConfig = {
        status: StatusLabelStatus.Warning,
        borderType: StatusLabelBorderType.Circle,
        icon: {iconName: 'info-circle', iconVersion: 'v2'}
    };
    configError: StatusLabelConfig = {status: StatusLabelStatus.Error};
    configErrorIcon: StatusLabelConfig = {icon: {iconName: 'info-circle', iconVersion: 'info-circle'}, status: StatusLabelStatus.Error};
    configErrorRounded: StatusLabelConfig = {status: StatusLabelStatus.Error, borderType: StatusLabelBorderType.Circle};
    configErrorRoundedIcon: StatusLabelConfig = {
        status: StatusLabelStatus.Error,
        borderType: StatusLabelBorderType.Circle,
        icon: {iconName: 'info-circle', iconVersion: 'v2'}
    };

    configCustomColors: StatusLabelConfig = {customColors: {color: '#678099', backgroundColor: '#eaeef1'}};
    configCustomIcon: StatusLabelConfig = {...this.configCustomColors, ...{icon: {iconName: 'info-circle', iconVersion: 'v2'}}};
    configCustomRounded: StatusLabelConfig = {...this.configCustomColors, borderType: StatusLabelBorderType.Circle};
    configCustomRoundedIcon: StatusLabelConfig = {...this.configCustomIcon, borderType: StatusLabelBorderType.Circle};

    tooltipContent = this.sanitizer.bypassSecurityTrustHtml(
        `<div style="margin-bottom: 7px;">Hypercasual</div><div><b>Benchmark: 70.2%-80.5%</b></div>`
    );

    StatusLabelType = StatusLabelType;

    constructor(private sanitizer: DomSanitizer, private docLayoutService: DocsLayoutService) {}

    ngOnInit() {
        this.docLayoutService.updateLayoutHeaderTitle({
            text: 'Status label'
        });
    }
}
