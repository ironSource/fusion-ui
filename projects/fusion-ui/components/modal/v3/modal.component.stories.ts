import {Story, Meta} from '@storybook/angular';
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
        }
    },
    args: {
        configuration: DEFAULT_CONFIGURATION
    }
} as Meta<ModalComponent>;

const ModalTemplate: Story<ModalComponent> = (args: ModalComponent) => ({
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

// region Default
export const Default = ModalTemplate.bind({});
Default.parameters = {
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
};
// endregion

// region WithoutFooter
export const WithoutFooter = ModalTemplate.bind({});
WithoutFooter.args = {
    configuration: {
        ...DEFAULT_CONFIGURATION,
        hasFooter: false
    }
};
WithoutFooter.parameters = {
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
};
// endregion

// region WithoutHeader
export const WithoutHeader = ModalTemplate.bind({});
WithoutHeader.args = {
    configuration: {
        ...DEFAULT_CONFIGURATION,
        headerText: ''
    }
};
WithoutHeader.parameters = {
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
};
// endregion

// region WithPrimaryPending
export const WithPrimaryPending = ModalTemplate.bind({});
WithPrimaryPending.args = {
    submitPending: true
};
WithPrimaryPending.parameters = {
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
};
// endregion

// region WithInfoTooltip
export const WithInfoTooltip = ModalTemplate.bind({});
WithInfoTooltip.args = {
    configuration: {
        ...DEFAULT_CONFIGURATION,
        headerInfoText: 'Info tooltip text'
    }
};
WithInfoTooltip.parameters = {
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
};
// endregion

// region WithCustomSize
export const WithCustomSize = ModalTemplate.bind({});
WithCustomSize.args = {
    configuration: {
        ...DEFAULT_CONFIGURATION,
        ...{
            width: '600px',
            height: '600px'
        }
    }
};
WithCustomSize.parameters = {
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
};
// endregion

// region WithErrorOnFooter
export const WithErrorOnFooter = ModalTemplate.bind({});
WithErrorOnFooter.args = {
    configuration: {
        ...DEFAULT_CONFIGURATION,
        error: 'error text'
    }
};
WithErrorOnFooter.parameters = {
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
};
// endregion

// region WithCustomButtonsText
export const WithCustomButtonsText = ModalTemplate.bind({});
WithCustomButtonsText.args = {
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
};
WithCustomButtonsText.parameters = {
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
};
// endregion

// region WithoutSecondaryButton
export const WithoutSecondaryButton = ModalTemplate.bind({});
WithoutSecondaryButton.args = {
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
};
WithoutSecondaryButton.parameters = {
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
};
// endregion

// region WithoutPrimaryButtonDisabled
export const WithoutPrimaryButtonDisabled = ModalTemplate.bind({});
WithoutPrimaryButtonDisabled.args = {
    configuration: {
        ...DEFAULT_CONFIGURATION,
        ...{
            submitButton: {
                submitButtonText: 'Apply',
                submitButtonDisabled: true
            }
        }
    }
};
WithoutPrimaryButtonDisabled.parameters = {
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
};
// endregion

// region WithCustomButtonsClass
export const WithCustomButtonsClass = ModalTemplate.bind({});
WithCustomButtonsClass.args = {
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
};
WithCustomButtonsClass.parameters = {
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
};
// endregion

// region WithFooterAlignLeft
export const WithFooterAlignLeft = ModalTemplate.bind({});
WithFooterAlignLeft.args = {
    configuration: {
        ...DEFAULT_CONFIGURATION,
        footerAlignLeft: true
    }
};
WithFooterAlignLeft.parameters = {
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
};
// endregion

// region WithFooterSmall
export const WithFooterSmall = ModalTemplate.bind({});
WithFooterSmall.args = {
    configuration: {
        ...DEFAULT_CONFIGURATION,
        footerSmall: true
    }
};
WithFooterSmall.parameters = {
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
};
// endregion
