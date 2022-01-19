import {Component, OnInit, Type} from '@angular/core';
import {ToastEntity, ToastLocation} from '../../../../../../fusion-ui/src/lib/components/ui-components/toast/toast.entity';
import {ToastExampleContentComponent} from '../../../components/toast-example-content/toast-example-content.component';
import {DocsMenuItem} from '../../../components/docs-menu/docs-menu';
import {ToastService} from '@ironource/fusion-ui';
import {DocsLayoutService} from '../../docs/docs-layout.service';

@Component({
    selector: 'fusion-toast-docs',
    templateUrl: './toast-docs.component.html',
    styleUrls: ['./toast-docs.component.scss']
})
export class ToastDocsComponent implements OnInit {
    rightMenu: DocsMenuItem[] = [
        {
            title: 'Toast',
            items: [
                {
                    label: 'Basic (no service required)',
                    scrollTo: '#typeBasic',
                    scrollOffset: 80
                },
                {
                    label: 'Basic with location (no service required)',
                    scrollTo: '#typeBasicLocation',
                    scrollOffset: 80
                },
                {
                    label: 'Use ToastService',
                    scrollTo: '#typeToastService',
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
                    label: 'CSS Variables',
                    scrollTo: '#cssVars',
                    scrollOffset: 30
                }
            ]
        }
    ];

    simpleSuccessToastConfig: ToastEntity = {
        type: 'success',
        text: 'Well done! You successfully read this'
    };
    simpleAlertToastConfig: ToastEntity = {
        type: 'alert',
        text: 'This alert needs your attention'
    };
    simpleErrorToastConfig: ToastEntity = {
        type: 'error',
        text: 'Ops. Something wrong!'
    };
    simpleWarningToastConfig: ToastEntity = {
        type: 'warning',
        text: 'Better check yourself, you’re not looking good'
    };
    simpleNoTypeToastConfig: ToastEntity = {
        text: 'No type, icon or image set for this toast.'
    };
    simpleCustomIconToastConfig: ToastEntity = {
        icon: 'diamond',
        text: 'Custom icon'
    };
    simpleCustomImageToastConfig: ToastEntity = {
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/240px-Angular_full_color_logo.svg.png',
        text: 'Custom icon image'
    };
    simpleCustomContentToastConfig: ToastEntity = {
        duration: 3,
        custom: {
            component: {
                type: ToastExampleContentComponent as Type<Component>,
                data: {message: 'This is custom content.'}
            }
        }
    };

    simpleLocationToastConfig: ToastEntity;

    toastKeysMap = new Map();

    toastKeys = [
        'successToast',
        'alertToast',
        'errorToast',
        'warningToast',
        'noTypeToast',
        'customIconToast',
        'customImageToast',
        'customToast'
    ];
    toastLocationsKeys: ToastLocation[] = ['top-left', 'top-center', 'top-right', 'bottom-left', 'bottom-center', 'bottom-right'];

    constructor(private toastService: ToastService, private docLayoutService: DocsLayoutService) {}

    ngOnInit() {
        this.docLayoutService.updateLayoutHeaderTitle({
            text: 'Toast'
        });
    }

    showToast(toastKey: string) {
        if (!this.toastKeysMap.has(toastKey)) {
            this.toastKeysMap.set(toastKey, true);
        }
    }

    toggleLocationToast(location: ToastLocation) {
        this.simpleLocationToastConfig = {...this.simpleSuccessToastConfig, ...{location}};
        if (!this.toastKeysMap.has('toastLocation')) {
            this.toastKeysMap.set('toastLocation', true);
        }
    }

    onToastClose(toastKey: string) {
        if (this.toastKeysMap.has(toastKey)) {
            this.toastKeysMap.delete(toastKey);
        }
    }

    showToastWithService(toastKey: string) {
        let toastConfig: ToastEntity;
        switch (toastKey) {
            case 'successToast':
                toastConfig = this.simpleSuccessToastConfig;
                break;
            case 'alertToast':
                toastConfig = this.simpleAlertToastConfig;
                break;
            case 'errorToast':
                toastConfig = this.simpleErrorToastConfig;
                break;
            case 'warningToast':
                toastConfig = this.simpleWarningToastConfig;
                break;
            case 'noTypeToast':
                toastConfig = this.simpleNoTypeToastConfig;
                break;
            case 'customIconToast':
                toastConfig = this.simpleCustomIconToastConfig;
                break;
            case 'customImageToast':
                toastConfig = this.simpleCustomImageToastConfig;
                break;
            case 'customToast':
                toastConfig = this.simpleCustomContentToastConfig;
                break;
        }
        if (toastConfig) {
            this.toastService.show({...toastConfig /*, ...{location: 'bottom-right'}*/});
        }
    }
}
