import {StoryFn, Meta} from '@storybook/angular';
import {moduleMetadata} from '@storybook/angular';
import {dedent} from 'ts-dedent';
import {CommonModule} from '@angular/common';
import {SvgModule} from '@ironsource/fusion-ui/components/svg';
import {environment} from '../../../../../stories/environments/environment';
import {ModalComponent, ModalConfiguration, ModalModule} from '@ironsource/fusion-ui/components/modal/v3';

const DEFAULT_CONFIGURATION = {
    headerText: 'Label name'
} as ModalConfiguration;

export default {
    title: 'Components/Dialog',
    component: ModalComponent,
    decorators: [
        moduleMetadata({
            declarations: [],
            imports: [CommonModule, SvgModule.forRoot({assetsPath: environment.assetsPath}), ModalModule]
        })
    ],
    parameters: {
        layout: 'centered',
        backgrounds: {
            default: 'light'
        },
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/V4eZU3qDgKYPhR4eaTvSwy/%F0%9F%8E%A8-Style-guide-2021-Master?node-id=5495%3A117996&t=v5iXDyyAgCZADhRr-1'
        }
    },
    args: {
        configuration: DEFAULT_CONFIGURATION
    }
} as Meta<ModalComponent>;

const ModalTemplate: StoryFn<ModalComponent> = (args: ModalComponent) => ({
    props: {...args},
    template: `<style>
.content-example{
    height: 53px;
    background-color: #F1F3F4;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
}
hr{
    border: solid 1px #DDDFE1;
    background-color: #DDDFE1;
    margin: 20px 0;
}
</style>
<fusion-modal [configuration]="configuration" [submitPending]="submitPending">
<div class="content-example">Content item placeholder. To be replaced with component</div>
<hr/>
<div class="content-example">Content item placeholder. To be replaced with component</div>
</fusion-modal>`
});

export const Default = {
    render: ModalTemplate,

    parameters: {
        docs: {
            source: {
                language: 'typescript',
                code: dedent`
    import { Component } from '@angular/core';
    import { CommonModule } from '@angular/common';
    import { ButtonModule } from '@ironsource/fusion-ui/components/button/v3';
    import {
      ModalConfiguration,
      ModalModule,
    } from '@ironsource/fusion-ui/components/modal/v3';

    @Component({
      selector: 'fusion-story-wrapper',
      template: \`
        <fusion-modal
          *ngIf="modalShown"
          [configuration]="modalConfiguration"
          [submitPending]="submitPending"
          (close)="onModalClose($event)"
        >
        <div class="content-example">Content item placeholder. To be replaced with component</div>
        <hr/>
        <div class="content-example">Content item placeholder. To be replaced with component</div>
        </fusion-modal>

        <fusion-button (click)="showModal()">Show Modal</fusion-button>
      \`,
      styles: [\`
      .content-example{
        height: 53px;
        background-color: #F1F3F4;
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 10px;
      }
      hr{
        border: solid 1px #DDDFE1;
        background-color: #DDDFE1;
        margin: 20px 0;
    }
      \`],
      standalone: true,
      imports: [CommonModule, ButtonModule, ModalModule],
    })
    export class FusionStoryWrapperComponent {
        submitPending = false;
        modalConfiguration: ModalConfiguration = ${JSON.stringify(DEFAULT_CONFIGURATION)};

        modalShown = false;

        showModal() {
        this.modalShown = true;
      }

      onModalClose($event) {
        this.modalShown = false;
        console.log('Modal closed by', $event);
      }
    }
    `,
                format: true,
                type: 'code'
            }
        }
    }
};

export const WithoutFooter = {
    render: ModalTemplate,

    args: {
        configuration: {
            ...DEFAULT_CONFIGURATION,
            hasFooter: false
        }
    },

    parameters: {
        docs: {
            source: {
                language: 'typescript',
                code: dedent`
    import { Component } from '@angular/core';
    import { CommonModule } from '@angular/common';
    import { ButtonModule } from '@ironsource/fusion-ui/components/button/v3';
    import {
      ModalConfiguration,
      ModalModule,
    } from '@ironsource/fusion-ui/components/modal/v3';

    @Component({
      selector: 'fusion-story-wrapper',
      template: \`
        <fusion-modal
          *ngIf="modalShown"
          [configuration]="modalConfiguration"
          [submitPending]="submitPending"
          (close)="onModalClose($event)"
        >
        <div class="content-example">Content item placeholder. To be replaced with component</div>
        <hr/>
        <div class="content-example">Content item placeholder. To be replaced with component</div>
        </fusion-modal>

        <fusion-button (click)="showModal()">Show Modal</fusion-button>
      \`,
      styles: [\`
      .content-example{
        height: 53px;
        background-color: #F1F3F4;
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 10px;
      }
      hr{
        border: solid 1px #DDDFE1;
        background-color: #DDDFE1;
        margin: 20px 0;
    }
      \`],
      standalone: true,
      imports: [CommonModule, ButtonModule, ModalModule],
    })
    export class FusionStoryWrapperComponent {
        submitPending = false;
        modalConfiguration: ModalConfiguration = ${JSON.stringify({
            ...DEFAULT_CONFIGURATION,
            hasFooter: false
        })};

        modalShown = false;

        showModal() {
        this.modalShown = true;
      }

      onModalClose($event) {
        this.modalShown = false;
        console.log('Modal closed by', $event);
      }
    }
    `,
                format: true,
                type: 'code'
            }
        }
    }
};

export const WithoutHeader = {
    render: ModalTemplate,

    args: {
        configuration: {
            ...DEFAULT_CONFIGURATION,
            headerText: ''
        }
    },

    parameters: {
        docs: {
            source: {
                language: 'typescript',
                code: dedent`
    import { Component } from '@angular/core';
    import { CommonModule } from '@angular/common';
    import { ButtonModule } from '@ironsource/fusion-ui/components/button/v3';
    import {
      ModalConfiguration,
      ModalModule,
    } from '@ironsource/fusion-ui/components/modal/v3';

    @Component({
      selector: 'fusion-story-wrapper',
      template: \`
        <fusion-modal
          *ngIf="modalShown"
          [configuration]="modalConfiguration"
          [submitPending]="submitPending"
          (close)="onModalClose($event)"
        >
        <div class="content-example">Content item placeholder. To be replaced with component</div>
        <hr/>
        <div class="content-example">Content item placeholder. To be replaced with component</div>
        </fusion-modal>

        <fusion-button (click)="showModal()">Show Modal</fusion-button>
      \`,
      styles: [\`
      .content-example{
        height: 53px;
        background-color: #F1F3F4;
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 10px;
      }
      hr{
        border: solid 1px #DDDFE1;
        background-color: #DDDFE1;
        margin: 20px 0;
    }
      \`],
      standalone: true,
      imports: [CommonModule, ButtonModule, ModalModule],
    })
    export class FusionStoryWrapperComponent {
        submitPending = false;
        modalConfiguration: ModalConfiguration = ${JSON.stringify({
            ...DEFAULT_CONFIGURATION,
            headerText: ''
        })};

        modalShown = false;

        showModal() {
        this.modalShown = true;
      }

      onModalClose($event) {
        this.modalShown = false;
        console.log('Modal closed by', $event);
      }
    }
    `,
                format: true,
                type: 'code'
            }
        }
    }
};

export const WithPrimaryPending = {
    render: ModalTemplate,

    args: {
        submitPending: true
    },

    parameters: {
        docs: {
            source: {
                language: 'typescript',
                code: dedent`
    import { Component } from '@angular/core';
    import { CommonModule } from '@angular/common';
    import { ButtonModule } from '@ironsource/fusion-ui/components/button/v3';
    import {
      ModalConfiguration,
      ModalModule,
    } from '@ironsource/fusion-ui/components/modal/v3';

    @Component({
      selector: 'fusion-story-wrapper',
      template: \`
        <fusion-modal
          *ngIf="modalShown"
          [configuration]="modalConfiguration"
          [submitPending]="submitPending"
          (close)="onModalClose($event)"
        >
        <div class="content-example">Content item placeholder. To be replaced with component</div>
        <hr/>
        <div class="content-example">Content item placeholder. To be replaced with component</div>
        </fusion-modal>

        <fusion-button (click)="showModal()">Show Modal</fusion-button>
      \`,
      styles: [\`
      .content-example{
        height: 53px;
        background-color: #F1F3F4;
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 10px;
      }
      hr{
        border: solid 1px #DDDFE1;
        background-color: #DDDFE1;
        margin: 20px 0;
    }
      \`],
      standalone: true,
      imports: [CommonModule, ButtonModule, ModalModule],
    })
    export class FusionStoryWrapperComponent {
        submitPending = true;
        modalConfiguration: ModalConfiguration = ${JSON.stringify(DEFAULT_CONFIGURATION)};

        modalShown = false;

        showModal() {
        this.modalShown = true;
      }

      onModalClose($event) {
        this.modalShown = false;
        console.log('Modal closed by', $event);
      }
    }
    `,
                format: true,
                type: 'code'
            }
        }
    }
};

export const WithInfoTooltip = {
    render: ModalTemplate,

    args: {
        configuration: {
            ...DEFAULT_CONFIGURATION,
            headerInfoText: 'Info tooltip text'
        }
    },

    parameters: {
        docs: {
            source: {
                language: 'typescript',
                code: dedent`
    import { Component } from '@angular/core';
    import { CommonModule } from '@angular/common';
    import { ButtonModule } from '@ironsource/fusion-ui/components/button/v3';
    import {
      ModalConfiguration,
      ModalModule,
    } from '@ironsource/fusion-ui/components/modal/v3';

    @Component({
      selector: 'fusion-story-wrapper',
      template: \`
        <fusion-modal
          *ngIf="modalShown"
          [configuration]="modalConfiguration"
          [submitPending]="submitPending"
          (close)="onModalClose($event)"
        >
        <div class="content-example">Content item placeholder. To be replaced with component</div>
        <hr/>
        <div class="content-example">Content item placeholder. To be replaced with component</div>
        </fusion-modal>

        <fusion-button (click)="showModal()">Show Modal</fusion-button>
      \`,
      styles: [\`
      .content-example{
        height: 53px;
        background-color: #F1F3F4;
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 10px;
      }
      hr{
        border: solid 1px #DDDFE1;
        background-color: #DDDFE1;
        margin: 20px 0;
    }
      \`],
      standalone: true,
      imports: [CommonModule, ButtonModule, ModalModule],
    })
    export class FusionStoryWrapperComponent {
        submitPending = false;
        modalConfiguration: ModalConfiguration = ${JSON.stringify({
            ...DEFAULT_CONFIGURATION,
            headerInfoText: 'Info tooltip text'
        })};

        modalShown = false;

        showModal() {
        this.modalShown = true;
      }

      onModalClose($event) {
        this.modalShown = false;
        console.log('Modal closed by', $event);
      }
    }
    `,
                format: true,
                type: 'code'
            }
        }
    }
};

export const WithCustomSize = {
    render: ModalTemplate,

    args: {
        configuration: {
            ...DEFAULT_CONFIGURATION,
            ...{
                width: '600px',
                height: '600px'
            }
        }
    },

    parameters: {
        docs: {
            source: {
                language: 'typescript',
                code: dedent`
    import { Component } from '@angular/core';
    import { CommonModule } from '@angular/common';
    import { ButtonModule } from '@ironsource/fusion-ui/components/button/v3';
    import {
      ModalConfiguration,
      ModalModule,
    } from '@ironsource/fusion-ui/components/modal/v3';

    @Component({
      selector: 'fusion-story-wrapper',
      template: \`
        <fusion-modal
          *ngIf="modalShown"
          [configuration]="modalConfiguration"
          [submitPending]="submitPending"
          (close)="onModalClose($event)"
        >
        <div class="content-example">Content item placeholder. To be replaced with component</div>
        <hr/>
        <div class="content-example">Content item placeholder. To be replaced with component</div>
        </fusion-modal>

        <fusion-button (click)="showModal()">Show Modal</fusion-button>
      \`,
      styles: [\`
      .content-example{
        height: 53px;
        background-color: #F1F3F4;
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 10px;
      }
      hr{
        border: solid 1px #DDDFE1;
        background-color: #DDDFE1;
        margin: 20px 0;
    }
      \`],
      standalone: true,
      imports: [CommonModule, ButtonModule, ModalModule],
    })
    export class FusionStoryWrapperComponent {
        submitPending = false;
        modalConfiguration: ModalConfiguration = ${JSON.stringify({
            ...DEFAULT_CONFIGURATION,
            ...{
                width: '600px',
                height: '600px'
            }
        })};

        modalShown = false;

        showModal() {
        this.modalShown = true;
      }

      onModalClose($event) {
        this.modalShown = false;
        console.log('Modal closed by', $event);
      }
    }
    `,
                format: true,
                type: 'code'
            }
        }
    }
};

export const WithErrorOnFooter = {
    render: ModalTemplate,

    args: {
        configuration: {
            ...DEFAULT_CONFIGURATION,
            error: 'error text'
        }
    },

    parameters: {
        docs: {
            source: {
                language: 'typescript',
                code: dedent`
    import { Component } from '@angular/core';
    import { CommonModule } from '@angular/common';
    import { ButtonModule } from '@ironsource/fusion-ui/components/button/v3';
    import {
      ModalConfiguration,
      ModalModule,
    } from '@ironsource/fusion-ui/components/modal/v3';

    @Component({
      selector: 'fusion-story-wrapper',
      template: \`
        <fusion-modal
          *ngIf="modalShown"
          [configuration]="modalConfiguration"
          [submitPending]="submitPending"
          (close)="onModalClose($event)"
        >
        <div class="content-example">Content item placeholder. To be replaced with component</div>
        <hr/>
        <div class="content-example">Content item placeholder. To be replaced with component</div>
        </fusion-modal>

        <fusion-button (click)="showModal()">Show Modal</fusion-button>
      \`,
      styles: [\`
      .content-example{
        height: 53px;
        background-color: #F1F3F4;
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 10px;
      }
      hr{
        border: solid 1px #DDDFE1;
        background-color: #DDDFE1;
        margin: 20px 0;
    }
      \`],
      standalone: true,
      imports: [CommonModule, ButtonModule, ModalModule],
    })
    export class FusionStoryWrapperComponent {
        submitPending = false;
        modalConfiguration: ModalConfiguration = ${JSON.stringify({
            ...DEFAULT_CONFIGURATION,
            error: 'error text'
        })};

        modalShown = false;

        showModal() {
        this.modalShown = true;
      }

      onModalClose($event) {
        this.modalShown = false;
        console.log('Modal closed by', $event);
      }
    }
    `,
                format: true,
                type: 'code'
            }
        }
    }
};

export const WithCustomButtonsText = {
    render: ModalTemplate,

    args: {
        configuration: {
            ...DEFAULT_CONFIGURATION,
            ...{
                submitButton: {
                    submitButtonText: 'Apply',
                    submitButtonDisabled: false
                },
                cancelButton: {
                    cancelButtonText: 'Not apply'
                }
            }
        }
    },

    parameters: {
        docs: {
            source: {
                language: 'typescript',
                code: dedent`
    import { Component } from '@angular/core';
    import { CommonModule } from '@angular/common';
    import { ButtonModule } from '@ironsource/fusion-ui/components/button/v3';
    import {
      ModalConfiguration,
      ModalModule,
    } from '@ironsource/fusion-ui/components/modal/v3';

    @Component({
      selector: 'fusion-story-wrapper',
      template: \`
        <fusion-modal
          *ngIf="modalShown"
          [configuration]="modalConfiguration"
          [submitPending]="submitPending"
          (close)="onModalClose($event)"
        >
        <div class="content-example">Content item placeholder. To be replaced with component</div>
        <hr/>
        <div class="content-example">Content item placeholder. To be replaced with component</div>
        </fusion-modal>

        <fusion-button (click)="showModal()">Show Modal</fusion-button>
      \`,
      styles: [\`
      .content-example{
        height: 53px;
        background-color: #F1F3F4;
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 10px;
      }
      hr{
        border: solid 1px #DDDFE1;
        background-color: #DDDFE1;
        margin: 20px 0;
    }
      \`],
      standalone: true,
      imports: [CommonModule, ButtonModule, ModalModule],
    })
    export class FusionStoryWrapperComponent {
        submitPending = false;
        modalConfiguration: ModalConfiguration = ${JSON.stringify({
            ...DEFAULT_CONFIGURATION,
            ...{
                submitButton: {
                    submitButtonText: 'Apply',
                    submitButtonDisabled: false
                },
                cancelButton: {
                    cancelButtonText: 'Not apply'
                }
            }
        })};

        modalShown = false;

        showModal() {
        this.modalShown = true;
      }

      onModalClose($event) {
        this.modalShown = false;
        console.log('Modal closed by', $event);
      }
    }
    `,
                format: true,
                type: 'code'
            }
        }
    }
};

export const WithoutSecondaryButton = {
    render: ModalTemplate,

    args: {
        configuration: {
            ...DEFAULT_CONFIGURATION,
            ...{
                submitButton: {
                    submitButtonText: 'Apply'
                },
                cancelButton: {
                    cancelButtonHidden: true
                }
            }
        }
    },

    parameters: {
        docs: {
            source: {
                language: 'typescript',
                code: dedent`
    import { Component } from '@angular/core';
    import { CommonModule } from '@angular/common';
    import { ButtonModule } from '@ironsource/fusion-ui/components/button/v3';
    import {
      ModalConfiguration,
      ModalModule,
    } from '@ironsource/fusion-ui/components/modal/v3';

    @Component({
      selector: 'fusion-story-wrapper',
      template: \`
        <fusion-modal
          *ngIf="modalShown"
          [configuration]="modalConfiguration"
          [submitPending]="submitPending"
          (close)="onModalClose($event)"
        >
        <div class="content-example">Content item placeholder. To be replaced with component</div>
        <hr/>
        <div class="content-example">Content item placeholder. To be replaced with component</div>
        </fusion-modal>

        <fusion-button (click)="showModal()">Show Modal</fusion-button>
      \`,
      styles: [\`
      .content-example{
        height: 53px;
        background-color: #F1F3F4;
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 10px;
      }
      hr{
        border: solid 1px #DDDFE1;
        background-color: #DDDFE1;
        margin: 20px 0;
    }
      \`],
      standalone: true,
      imports: [CommonModule, ButtonModule, ModalModule],
    })
    export class FusionStoryWrapperComponent {
        submitPending = false;
        modalConfiguration: ModalConfiguration = ${JSON.stringify({
            ...DEFAULT_CONFIGURATION,
            ...{
                submitButton: {
                    submitButtonText: 'Apply'
                },
                cancelButton: {
                    cancelButtonHidden: true
                }
            }
        })};

        modalShown = false;

        showModal() {
        this.modalShown = true;
      }

      onModalClose($event) {
        this.modalShown = false;
        console.log('Modal closed by', $event);
      }
    }
    `,
                format: true,
                type: 'code'
            }
        }
    }
};

export const WithoutPrimaryButtonDisabled = {
    render: ModalTemplate,

    args: {
        configuration: {
            ...DEFAULT_CONFIGURATION,
            ...{
                submitButton: {
                    submitButtonText: 'Apply',
                    submitButtonDisabled: true
                }
            }
        }
    },

    parameters: {
        docs: {
            source: {
                language: 'typescript',
                code: dedent`
    import { Component } from '@angular/core';
    import { CommonModule } from '@angular/common';
    import { ButtonModule } from '@ironsource/fusion-ui/components/button/v3';
    import {
      ModalConfiguration,
      ModalModule,
    } from '@ironsource/fusion-ui/components/modal/v3';

    @Component({
      selector: 'fusion-story-wrapper',
      template: \`
        <fusion-modal
          *ngIf="modalShown"
          [configuration]="modalConfiguration"
          [submitPending]="submitPending"
          (close)="onModalClose($event)"
        >
        <div class="content-example">Content item placeholder. To be replaced with component</div>
        <hr/>
        <div class="content-example">Content item placeholder. To be replaced with component</div>
        </fusion-modal>

        <fusion-button (click)="showModal()">Show Modal</fusion-button>
      \`,
      styles: [\`
      .content-example{
        height: 53px;
        background-color: #F1F3F4;
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 10px;
      }
      hr{
        border: solid 1px #DDDFE1;
        background-color: #DDDFE1;
        margin: 20px 0;
    }
      \`],
      standalone: true,
      imports: [CommonModule, ButtonModule, ModalModule],
    })
    export class FusionStoryWrapperComponent {
        submitPending = false;
        modalConfiguration: ModalConfiguration = ${JSON.stringify({
            ...DEFAULT_CONFIGURATION,
            ...{
                submitButton: {
                    submitButtonText: 'Apply',
                    submitButtonDisabled: true
                }
            }
        })};

        modalShown = false;

        showModal() {
        this.modalShown = true;
      }

      onModalClose($event) {
        this.modalShown = false;
        console.log('Modal closed by', $event);
      }
    }
    `,
                format: true,
                type: 'code'
            }
        }
    }
};

export const WithCustomButtonsClass = {
    render: ModalTemplate,

    args: {
        configuration: {
            ...DEFAULT_CONFIGURATION,
            ...{
                submitButton: {
                    submitButtonClass: 'danger'
                },
                cancelButton: {
                    cancelButtonClass: 'third'
                }
            }
        }
    },

    parameters: {
        docs: {
            source: {
                language: 'typescript',
                code: dedent`
    import { Component } from '@angular/core';
    import { CommonModule } from '@angular/common';
    import { ButtonModule } from '@ironsource/fusion-ui/components/button/v3';
    import {
      ModalConfiguration,
      ModalModule,
    } from '@ironsource/fusion-ui/components/modal/v3';

    @Component({
      selector: 'fusion-story-wrapper',
      template: \`
        <fusion-modal
          *ngIf="modalShown"
          [configuration]="modalConfiguration"
          [submitPending]="submitPending"
          (close)="onModalClose($event)"
        >
        <div class="content-example">Content item placeholder. To be replaced with component</div>
        <hr/>
        <div class="content-example">Content item placeholder. To be replaced with component</div>
        </fusion-modal>

        <fusion-button (click)="showModal()">Show Modal</fusion-button>
      \`,
      styles: [\`
      .content-example{
        height: 53px;
        background-color: #F1F3F4;
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 10px;
      }
      hr{
        border: solid 1px #DDDFE1;
        background-color: #DDDFE1;
        margin: 20px 0;
    }
      \`],
      standalone: true,
      imports: [CommonModule, ButtonModule, ModalModule],
    })
    export class FusionStoryWrapperComponent {
        submitPending = false;
        modalConfiguration: ModalConfiguration = ${JSON.stringify({
            ...DEFAULT_CONFIGURATION,
            ...{
                submitButton: {
                    submitButtonClass: 'danger'
                },
                cancelButton: {
                    cancelButtonClass: 'third'
                }
            }
        })};

        modalShown = false;

        showModal() {
        this.modalShown = true;
      }

      onModalClose($event) {
        this.modalShown = false;
        console.log('Modal closed by', $event);
      }
    }
    `,
                format: true,
                type: 'code'
            }
        }
    }
};

export const WithFooterAlignLeft = {
    render: ModalTemplate,

    args: {
        configuration: {
            ...DEFAULT_CONFIGURATION,
            footerAlignLeft: true
        }
    },

    parameters: {
        docs: {
            source: {
                language: 'typescript',
                code: dedent`
    import { Component } from '@angular/core';
    import { CommonModule } from '@angular/common';
    import { ButtonModule } from '@ironsource/fusion-ui/components/button/v3';
    import {
      ModalConfiguration,
      ModalModule,
    } from '@ironsource/fusion-ui/components/modal/v3';

    @Component({
      selector: 'fusion-story-wrapper',
      template: \`
        <fusion-modal
          *ngIf="modalShown"
          [configuration]="modalConfiguration"
          [submitPending]="submitPending"
          (close)="onModalClose($event)"
        >
        <div class="content-example">Content item placeholder. To be replaced with component</div>
        <hr/>
        <div class="content-example">Content item placeholder. To be replaced with component</div>
        </fusion-modal>

        <fusion-button (click)="showModal()">Show Modal</fusion-button>
      \`,
      styles: [\`
      .content-example{
        height: 53px;
        background-color: #F1F3F4;
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 10px;
      }
      hr{
        border: solid 1px #DDDFE1;
        background-color: #DDDFE1;
        margin: 20px 0;
    }
      \`],
      standalone: true,
      imports: [CommonModule, ButtonModule, ModalModule],
    })
    export class FusionStoryWrapperComponent {
        submitPending = false;
        modalConfiguration: ModalConfiguration = ${JSON.stringify({
            ...DEFAULT_CONFIGURATION,
            footerAlignLeft: true
        })};

        modalShown = false;

        showModal() {
        this.modalShown = true;
      }

      onModalClose($event) {
        this.modalShown = false;
        console.log('Modal closed by', $event);
      }
    }
    `,
                format: true,
                type: 'code'
            }
        }
    }
};

export const WithFooterSmall = {
    render: ModalTemplate,

    args: {
        configuration: {
            ...DEFAULT_CONFIGURATION,
            footerSmall: true
        }
    },

    parameters: {
        docs: {
            source: {
                language: 'typescript',
                code: dedent`
    import { Component } from '@angular/core';
    import { CommonModule } from '@angular/common';
    import { ButtonModule } from '@ironsource/fusion-ui/components/button/v3';
    import {
      ModalConfiguration,
      ModalModule,
    } from '@ironsource/fusion-ui/components/modal/v3';

    @Component({
      selector: 'fusion-story-wrapper',
      template: \`
        <fusion-modal
          *ngIf="modalShown"
          [configuration]="modalConfiguration"
          [submitPending]="submitPending"
          (close)="onModalClose($event)"
        >
        <div class="content-example">Content item placeholder. To be replaced with component</div>
        <hr/>
        <div class="content-example">Content item placeholder. To be replaced with component</div>
        </fusion-modal>

        <fusion-button (click)="showModal()">Show Modal</fusion-button>
      \`,
      styles: [\`
      .content-example{
        height: 53px;
        background-color: #F1F3F4;
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 10px;
      }
      hr{
        border: solid 1px #DDDFE1;
        background-color: #DDDFE1;
        margin: 20px 0;
    }
      \`],
      standalone: true,
      imports: [CommonModule, ButtonModule, ModalModule],
    })
    export class FusionStoryWrapperComponent {
        submitPending = false;
        modalConfiguration: ModalConfiguration = ${JSON.stringify({
            ...DEFAULT_CONFIGURATION,
            footerSmall: true
        })};

        modalShown = false;

        showModal() {
        this.modalShown = true;
      }

      onModalClose($event) {
        this.modalShown = false;
        console.log('Modal closed by', $event);
      }
    }
    `,
                format: true,
                type: 'code'
            }
        }
    }
};
