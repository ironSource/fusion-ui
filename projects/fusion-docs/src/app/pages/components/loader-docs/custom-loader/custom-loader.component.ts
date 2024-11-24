import {Component} from '@angular/core';
import {LOADER_COMPONENT_TYPE_TOKEN} from '@ironsource/fusion-ui/components/loader/common/base';

@Component({
    selector: 'fusion-custom-loader',
    template: ` <div class="lds-dual-ring"></div> `,
    styles: [
        `
            .lds-dual-ring {
                display: inline-block;
                width: 40px;
                height: 40px;
            }
            .lds-dual-ring:after {
                content: ' ';
                display: block;
                width: 32px;
                height: 32px;
                margin: 8px;
                border-radius: 50%;
                border: 6px solid #95a6b8;
                border-color: #95a6b8 transparent #95a6b8 transparent;
                animation: lds-dual-ring 1.2s linear infinite;
            }
            @keyframes lds-dual-ring {
                0% {
                    transform: rotate(0deg);
                }
                100% {
                    transform: rotate(360deg);
                }
            }
        `
    ],
    standalone: false
})
export class CustomLoaderComponent {}

@Component({
    selector: 'fusion-custom-loader-host',
    template: ` <fusion-loader [status]="true"></fusion-loader> `,
    styles: [':host{ position: relative; display: block;}'],
    providers: [
        {
            provide: LOADER_COMPONENT_TYPE_TOKEN,
            useValue: CustomLoaderComponent
        }
    ],
    standalone: false
})
export class CustomLoaderHostComponent {}
