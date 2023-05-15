import {Meta, StoryObj} from '@storybook/angular';
import {moduleMetadata} from '@storybook/angular';
import {dedent} from 'ts-dedent';
import {CommonModule} from '@angular/common';
import {ApiService} from '@ironsource/fusion-ui';
import {SvgModule} from '@ironsource/fusion-ui/components/svg';
import {environment} from '../../../../../stories/environments/environment';

import {ToastEntity} from '../common/entities';
import {ToastComponent} from './toast.component';
import {ToastModule} from './toast.module';

const meta: Meta<ToastComponent> = {
    title: 'Components/Toast',
    component: ToastComponent,
    decorators: [
        moduleMetadata({
            declarations: [],
            imports: [CommonModule, SvgModule.forRoot({assetsPath: environment.assetsPath}), ToastModule],
            providers: [ApiService]
        })
    ],
    tags: ['autodocs'],
    parameters: {
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
    }
};
export default meta;
type ToastStory = StoryObj<ToastComponent>;

export const BasicUsage: ToastStory = {
    args: {
        configuration: {
            text: 'No type, icon or image set for this toast.'
        } as ToastEntity
    },
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
    }
};

export const SuccessToast: ToastStory = {
    args: {
        configuration: {
            type: 'success',
            text: 'Well done! You successfully read this'
        }
    },
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
                    (toastClosed)="onToastClose('successToast')"
                ></fusion-toast>\`,
      standalone: true,
      imports: [CommonModule, ToastModule],
    })
    export class FusionStoryWrapperComponent {
      shown = true;
      toastConfig: ToastEntity = {
            type: 'success',
            text: 'Well done! You successfully read this'
        };

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
    }
};

export const AlertToast: ToastStory = {
    args: {
        configuration: {
            type: 'alert',
            text: 'This alert needs your attention'
        } as ToastEntity
    },
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
                    (toastClosed)="onToastClose('alertToast')"
                ></fusion-toast>\`,
      standalone: true,
      imports: [CommonModule, ToastModule],
    })
    export class FusionStoryWrapperComponent {
      shown = true;
      toastConfig: ToastEntity = {
            type: 'alert',
            text: 'This alert needs your attention'
        };

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
    }
};

export const ErrorToast: ToastStory = {
    args: {
        configuration: {
            type: 'error',
            text: 'Ops. Something wrong!'
        } as ToastEntity
    }
};

export const WarningToast: ToastStory = {
    args: {
        configuration: {
            type: 'warning',
            text: 'Better check yourself, you’re not looking good'
        } as ToastEntity
    },
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
                    (toastClosed)="onToastClose('warningToast')"
                ></fusion-toast>\`,
      standalone: true,
      imports: [CommonModule, ToastModule],
    })
    export class FusionStoryWrapperComponent {
      shown = true;
      toastConfig: ToastEntity = {
            type: 'warning',
            text: 'Better check yourself, you’re not looking good'
        };

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
    }
};

export const CustomIconToast: ToastStory = {
    args: {
        configuration: {
            icon: 'frame',
            text: 'Custom icon'
        } as ToastEntity
    },
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
                    (toastClosed)="onToastClose('customIconToast')"
                ></fusion-toast>\`,
      standalone: true,
      imports: [CommonModule, ToastModule],
    })
    export class FusionStoryWrapperComponent {
      shown = true;
      toastConfig: ToastEntity = {
            icon: 'frame',
            text: 'Custom icon'
        };

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
    }
};

export const CustomImageToast: ToastStory = {
    args: {
        configuration: {
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/240px-Angular_full_color_logo.svg.png',
            text: 'Custom image'
        } as ToastEntity
    },
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
                    (toastClosed)="onToastClose('customImageToast')"
                ></fusion-toast>\`,
      standalone: true,
      imports: [CommonModule, ToastModule],
    })
    export class FusionStoryWrapperComponent {
      shown = true;
      toastConfig: ToastEntity = {
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/240px-Angular_full_color_logo.svg.png',
            text: 'Custom image'
        };

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
    }
};
