import {Meta, StoryObj} from '@storybook/angular';
import {moduleMetadata} from '@storybook/angular';
import {dedent} from 'ts-dedent';
import {CommonModule} from '@angular/common';
import {ApiService} from '@ironsource/fusion-ui';
import {SvgModule} from '@ironsource/fusion-ui/components/svg';
import {environment} from '../../../../../stories/environments/environment';
import {FileCsvUploadComponent, FileCsvUploadModule} from '@ironsource/fusion-ui/components/file-csv-upload';
import {FileDragAndDropState} from '@ironsource/fusion-ui/components/file-drag-and-drop';

const defaultFileState: FileDragAndDropState = {name: ''};

const meta: Meta<FileCsvUploadComponent> = {
    title: 'Components/CSV File Uploader',
    component: FileCsvUploadComponent,
    decorators: [
        moduleMetadata({
            declarations: [],
            imports: [CommonModule, SvgModule.forRoot({assetsPath: environment.assetsPath}), FileCsvUploadModule],
            providers: [ApiService]
        })
    ],
    tags: ['autodocs']
    /*    parameters: {
        docs: {
            description: {
                component: dedent`**Toast** is a web component that provides a simple way to display non-intrusive notifications or messages to users. It can be easily added to a webpage by importing the Toast component and passing in the necessary configuration properties. Toast can be customized to display different types of notifications with various styles, durations, and positions on the screen. It is a useful tool for enhancing user experience and providing feedback to users about their actions on the web page.
                <br/><br/>**Basic Usage:**

\`<fusion-toast [configuration]="toastConfiguration" (toastClosed)="onToastClose($)"></fusion-toast>\`

\` toastConfiguration: ToastEntity\`

\`
interface ToastEntity {
    text?: string;
    type?: ToastType; // 'success' | 'alert' | 'error' | 'warning'
    icon?: IconData; // icon name that will used inserted of type icon. Type must be not defined
    image?: string; // image URL that will used inserted of type icon. Type must be not defined
    custom?: DynamicComponentConfiguration; // toast dynamic content
    duration?: number; // shown duration in seconds. default null.
    location?: ToastLocation; // 'top-right' | 'top-left' | 'top-center' | 'bottom-right' | 'bottom-left' | 'bottom-center';
    //(default 'top-right')
}
\`

                `
            }
        }
    }*/
};
export default meta;
type CSVFileUploaderStory = StoryObj<FileCsvUploadComponent>;

export const BasicUsage: CSVFileUploaderStory = {
    args: {
        loading: false,
        disabled: false,
        fileState: defaultFileState
    } /*,
    /*    args: {
        configuration: {
            text: 'No type, icon or image set for this toast.'
        } as ToastEntity
    }*/
    parameters: {
        docs: {
            source: {
                language: 'typescript',
                code: dedent`
    import { Component } from '@angular/core';
    import { CommonModule } from '@angular/common';
    import { ToastModule } from '@ironsource/fusion-ui/components/toast/v2';
    import { ToastEntity } from '@ironsource/fusion-ui/components/toast/common/entities';

    @Component({
      selector: 'fusion-story-wrapper',
      template: \`<fusion-toast *ngIf="shown"
                    [configuration]="toastConfig"
                    (toastClosed)="onToastClose('baseToast')"
                ></fusion-toast>\`,
      standalone: true,
      imports: [CommonModule, ToastModule],
    })
    export class FusionStoryWrapperComponent {
      shown = true;
      toastConfig: ToastEntity = {text: 'No type, icon or image set for this toast.'};

      onToastClose(toastKey: string) {
        console.log('Toast to close: ', toastKey);
        this.shown = false;
      }
    }
    `,
                format: true,
                type: 'code'
            }
        }
    }*/
};
