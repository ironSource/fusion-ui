import {StoryFn, Meta} from '@storybook/angular';
import {moduleMetadata} from '@storybook/angular';
import {CommonModule} from '@angular/common';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SvgModule} from '@ironsource/fusion-ui/components/svg';
import {environment} from '../../../../../stories/environments/environment';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {TooltipModule} from '@ironsource/fusion-ui/components/tooltip';
import {ClickOutsideModule} from '@ironsource/fusion-ui';
import {InlineInputType, InputInlineComponent} from '@ironsource/fusion-ui/components/input-inline';
import {CurrencyPipeParameters} from '@ironsource/fusion-ui/components/input-inline/common/base';
import {dedent} from 'ts-dedent';
import {InputOptions} from '@ironsource/fusion-ui/components/input';

export default {
    title: 'V3/Components/Inputs/Input-Inline',
    component: InputInlineComponent,
    decorators: [
        moduleMetadata({
            declarations: [],
            imports: [
                CommonModule,
                FormsModule,
                ReactiveFormsModule,
                SvgModule.forRoot({assetsPath: environment.assetsPath}),
                IconModule,
                TooltipModule,
                ClickOutsideModule
            ]
        })
    ],
    tags: ['autodocs'],
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/V4eZU3qDgKYPhR4eaTvSwy/%F0%9F%8E%A8-Style-guide-2021-Master?node-id=15237%3A122332&t=xvhBicbaJD4brwUH-4'
        },
        layout: 'centered',
        backgrounds: {
            default: 'light'
        }
    },
    args: {
        type: InlineInputType.Text,
        loading: false,
        readOnly: false,
        currencyPipeParameters: null as CurrencyPipeParameters,
        className: ''
    },
    argTypes: {
        formControl: {
            control: false
        },
        type: {
            control: false
        },
        currencyPipeParameters: {
            control: false
        },
        error: {
            control: 'text'
        }
    }
} as Meta<InputInlineComponent>;

const InputTemplate: StoryFn<InputInlineComponent> = (args: InputInlineComponent) => ({
    props: {...args},
    template: `<div style="width: 155px;">
<fusion-input-inline class="{{className}}"
    [inputOptions]="inputOptions"
    [type]="type"
    [formControl]="formControl"
    [loading]="loading"
    [readOnly]="readOnly"
    [error]="error"
    [currencyPipeParameters]="currencyPipeParameters"
    (onSave)="onSave($event)"
    (onCancel)="onCancel()"
></fusion-input-inline>
</div>`
});

export const Default = {
    render: InputTemplate,

    args: {
        formControl: new FormControl('some text value')
    },

    parameters: {
        docs: {
            source: {
                language: 'typescript',
                code: dedent`
  import { Component, ViewChild } from '@angular/core';
  import { CommonModule } from '@angular/common';
  import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
  import { IconModule } from '@ironsource/fusion-ui/components/icon/v1';
  import {
    InlineInputType,
    InputInlineComponent,
  } from '@ironsource/fusion-ui/components/input-inline';

  @Component({
    selector: 'fusion-story-wrapper',
    template: \`
      <div style="width: 155px;">
  <fusion-input-inline #inputInline
      [type]="type"
      [formControl]="formControl"
      [loading]="loading"
      [readOnly]="readOnly"
      [error]="error"
      (onSave)="onSave($event)"
      (onCancel)="onCancel()"
  ></fusion-input-inline>
  </div>
    \`,
    standalone: true,
    imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      IconModule,
      InputInlineComponent,
    ],
  })
  export class FusionStoryWrapperComponent {
    @ViewChild('inputInline') inputInline: InputInlineComponent;

    type = InlineInputType.Text;
    formControl = new FormControl('some text value');

    loading = false;
    readOnly = false;
    error = '';

    onSave($event) {
      console.log('onSave: ', $event);
      this.loading = true;
      setTimeout(() => {
        // here you can apply validations

        this.loading = false;
        // update value
        this.formControl.setValue($event.newValue);
        // exit from edit mode
        this.inputInline.isEditMode$.next(false);
      }, 1000);
    }

    onCancel() {
      console.log('onCancel');
    }
  }
  `,
                format: true,
                type: 'code'
            }
        }
    }
};

export const SizeSmall = {
    render: InputTemplate,

    args: {
        formControl: new FormControl('some text value'),
        inputOptions: {size: 'small'} as InputOptions
    },

    parameters: {
        docs: {
            source: {
                language: 'typescript',
                code: dedent`
  import { Component, ViewChild } from '@angular/core';
  import { CommonModule } from '@angular/common';
  import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
  import { IconModule } from '@ironsource/fusion-ui/components/icon/v1';
  import {InputOptions} from "@ironsource/fusion-ui/components/input";
  import {
    InlineInputType,
    InputInlineComponent,
  } from '@ironsource/fusion-ui/components/input-inline';

  @Component({
    selector: 'fusion-story-wrapper',
    template: \`
      <div style="width: 155px;">
  <fusion-input-inline #inputInline
      [inputOptions]="{size: 'small'}"
      [type]="type"
      [formControl]="formControl"
      [loading]="loading"
      [readOnly]="readOnly"
      [error]="error"
      (onSave)="onSave($event)"
      (onCancel)="onCancel()"
  ></fusion-input-inline>
  </div>
    \`,
    standalone: true,
    imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      IconModule,
      InputInlineComponent,
    ],
  })
  export class FusionStoryWrapperComponent {
    @ViewChild('inputInline') inputInline: InputInlineComponent;

    type = InlineInputType.Text;
    formControl = new FormControl('some text value');

    loading = false;
    readOnly = false;
    error = '';

    onSave($event) {
      console.log('onSave: ', $event);
      this.loading = true;
      setTimeout(() => {
        // here you can apply validations

        this.loading = false;
        // update value
        this.formControl.setValue($event.newValue);
        // exit from edit mode
        this.inputInline.isEditMode$.next(false);
      }, 1000);
    }

    onCancel() {
      console.log('onCancel');
    }
  }
  `,
                format: true,
                type: 'code'
            }
        }
    }
};

export const ReadOnly = {
    render: InputTemplate,

    args: {
        formControl: new FormControl('some text value'),
        readOnly: true
    },

    parameters: {
        docs: {
            source: {
                language: 'typescript',
                code: dedent`
  import { Component, ViewChild } from '@angular/core';
  import { CommonModule } from '@angular/common';
  import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
  import { IconModule } from '@ironsource/fusion-ui/components/icon/v1';
  import {
    InlineInputType,
    InputInlineComponent,
  } from '@ironsource/fusion-ui/components/input-inline';

  @Component({
    selector: 'fusion-story-wrapper',
    template: \`
      <div style="width: 155px;">
  <fusion-input-inline #inputInline
      [type]="type"
      [formControl]="formControl"
      [loading]="loading"
      [readOnly]="readOnly"
      [error]="error"
      (onSave)="onSave($event)"
      (onCancel)="onCancel()"
  ></fusion-input-inline>
  </div>
    \`,
    standalone: true,
    imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      IconModule,
      InputInlineComponent,
    ],
  })
  export class FusionStoryWrapperComponent {
    @ViewChild('inputInline') inputInline: InputInlineComponent;

    type = InlineInputType.Text;
    formControl = new FormControl('some text value');

    loading = false;
    readOnly = true;
    error = '';

    onSave($event) {
      console.log('onSave: ', $event);
      this.loading = true;
      setTimeout(() => {
        // here you can apply validations

        this.loading = false;
        // update value
        this.formControl.setValue($event.newValue);
        // exit from edit mode
        this.inputInline.isEditMode$.next(false);
      }, 1000);
    }

    onCancel() {
      console.log('onCancel');
    }
  }
  `,
                format: true,
                type: 'code'
            }
        }
    }
};

export const Pending = {
    render: InputTemplate,

    args: {
        formControl: new FormControl('some text value'),
        loading: true
    },

    parameters: {
        docs: {
            source: {
                language: 'typescript',
                code: dedent`
  import { Component, ViewChild } from '@angular/core';
  import { CommonModule } from '@angular/common';
  import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
  import { IconModule } from '@ironsource/fusion-ui/components/icon/v1';
  import {
    InlineInputType,
    InputInlineComponent,
  } from '@ironsource/fusion-ui/components/input-inline';

  @Component({
    selector: 'fusion-story-wrapper',
    template: \`
      <div style="width: 155px;">
  <fusion-input-inline #inputInline
      [type]="type"
      [formControl]="formControl"
      [loading]="loading"
      [readOnly]="readOnly"
      [error]="error"
      (onSave)="onSave($event)"
      (onCancel)="onCancel()"
  ></fusion-input-inline>
  </div>
    \`,
    standalone: true,
    imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      IconModule,
      InputInlineComponent,
    ],
  })
  export class FusionStoryWrapperComponent {
    @ViewChild('inputInline') inputInline: InputInlineComponent;

    type = InlineInputType.Text;
    formControl = new FormControl('some text value');

    loading = false;
    readOnly = false;
    error = '';

    onSave($event) {
      console.log('onSave: ', $event);
      this.loading = true;
      setTimeout(() => {
        // here you can apply validations

        this.loading = false;
        // update value
        this.formControl.setValue($event.newValue);
        // exit from edit mode
        this.inputInline.isEditMode$.next(false);
      }, 1000);
    }

    onCancel() {
      console.log('onCancel');
    }
  }
  `,
                format: true,
                type: 'code'
            }
        }
    }
};

export const Disabled = {
    render: InputTemplate,

    args: {
        formControl: new FormControl({value: 'some text value', disabled: true})
    },

    parameters: {
        docs: {
            source: {
                language: 'typescript',
                code: dedent`
  import { Component, ViewChild } from '@angular/core';
  import { CommonModule } from '@angular/common';
  import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
  import { IconModule } from '@ironsource/fusion-ui/components/icon/v1';
  import {
    InlineInputType,
    InputInlineComponent,
  } from '@ironsource/fusion-ui/components/input-inline';

  @Component({
    selector: 'fusion-story-wrapper',
    template: \`
      <div style="width: 155px;">
  <fusion-input-inline #inputInline
      [type]="type"
      [formControl]="formControl"
      [loading]="loading"
      [readOnly]="readOnly"
      [error]="error"
      (onSave)="onSave($event)"
      (onCancel)="onCancel()"
  ></fusion-input-inline>
  </div>
    \`,
    standalone: true,
    imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      IconModule,
      InputInlineComponent,
    ],
  })
  export class FusionStoryWrapperComponent {
    @ViewChild('inputInline') inputInline: InputInlineComponent;

    type = InlineInputType.Text;
    formControl = new FormControl({value: 'some text value', disabled: true});

    loading = false;
    readOnly = false;
    error = '';

    onSave($event) {
      console.log('onSave: ', $event);
      this.loading = true;
      setTimeout(() => {
        // here you can apply validations

        this.loading = false;
        // update value
        this.formControl.setValue($event.newValue);
        // exit from edit mode
        this.inputInline.isEditMode$.next(false);
      }, 1000);
    }

    onCancel() {
      console.log('onCancel');
    }
  }
  `,
                format: true,
                type: 'code'
            }
        }
    }
};

export const Error = {
    render: InputTemplate,

    args: {
        formControl: new FormControl('some text value'),
        error: 'Error message'
    },

    parameters: {
        docs: {
            source: {
                language: 'typescript',
                code: dedent`
  import { Component, ViewChild } from '@angular/core';
  import { CommonModule } from '@angular/common';
  import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
  import { IconModule } from '@ironsource/fusion-ui/components/icon/v1';
  import {
    InlineInputType,
    InputInlineComponent,
  } from '@ironsource/fusion-ui/components/input-inline';

  @Component({
    selector: 'fusion-story-wrapper',
    template: \`
      <div style="width: 155px;">
  <fusion-input-inline #inputInline
      [type]="type"
      [formControl]="formControl"
      [loading]="loading"
      [readOnly]="readOnly"
      [error]="error"
      (onSave)="onSave($event)"
      (onCancel)="onCancel()"
  ></fusion-input-inline>
  </div>
    \`,
    standalone: true,
    imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      IconModule,
      InputInlineComponent,
    ],
  })
  export class FusionStoryWrapperComponent {
    @ViewChild('inputInline') inputInline: InputInlineComponent;

    type = InlineInputType.Text;
    formControl = new FormControl('some text value');

    loading = false;
    readOnly = false;
    error = '';

    onSave($event) {
      console.log('onSave: ', $event);
      this.loading = true;
      setTimeout(() => {
        // here you can apply validations
        this.error = 'Error occur...';
        this.loading = false;
      }, 1000);
    }

    onCancel() {
      console.log('onCancel');
    }
  }
  `,
                format: true,
                type: 'code'
            }
        }
    }
};

export const TextAlignRight = {
    render: InputTemplate,

    args: {
        formControl: new FormControl('some text value'),
        className: 'fu-align-right'
    },

    parameters: {
        docs: {
            source: {
                language: 'typescript',
                code: dedent`
  import { Component, ViewChild } from '@angular/core';
  import { CommonModule } from '@angular/common';
  import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
  import { IconModule } from '@ironsource/fusion-ui/components/icon/v1';
  import {
    InlineInputType,
    InputInlineComponent,
  } from '@ironsource/fusion-ui/components/input-inline';

  @Component({
    selector: 'fusion-story-wrapper',
    template: \`
      <div style="width: 155px;">
  <fusion-input-inline #inputInline class="fu-align-right"
      [type]="type"
      [formControl]="formControl"
      [loading]="loading"
      [readOnly]="readOnly"
      [error]="error"
      (onSave)="onSave($event)"
      (onCancel)="onCancel()"
  ></fusion-input-inline>
  </div>
    \`,
    standalone: true,
    imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      IconModule,
      InputInlineComponent,
    ],
  })
  export class FusionStoryWrapperComponent {
    @ViewChild('inputInline') inputInline: InputInlineComponent;

    type = InlineInputType.Text;
    formControl = new FormControl('some text value');

    loading = false;
    readOnly = false;
    error = '';

    onSave($event) {
      console.log('onSave: ', $event);
      this.loading = true;
      setTimeout(() => {
        // here you can apply validations

        this.loading = false;
        // update value
        this.formControl.setValue($event.newValue);
        // exit from edit mode
        this.inputInline.isEditMode$.next(false);
      }, 1000);
    }

    onCancel() {
      console.log('onCancel');
    }
  }
  `,
                format: true,
                type: 'code'
            }
        }
    }
};

export const ValueNumber = {
    render: InputTemplate,

    args: {
        formControl: new FormControl(250),
        type: InlineInputType.Number
    },

    parameters: {
        docs: {
            source: {
                language: 'typescript',
                code: dedent`
  import { Component, ViewChild } from '@angular/core';
  import { CommonModule } from '@angular/common';
  import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
  import { IconModule } from '@ironsource/fusion-ui/components/icon/v1';
  import {
    InlineInputType,
    InputInlineComponent,
  } from '@ironsource/fusion-ui/components/input-inline';

  @Component({
    selector: 'fusion-story-wrapper',
    template: \`
      <div style="width: 155px;">
  <fusion-input-inline #inputInline
      [type]="type"
      [formControl]="formControl"
      [loading]="loading"
      [readOnly]="readOnly"
      [error]="error"
      (onSave)="onSave($event)"
      (onCancel)="onCancel()"
  ></fusion-input-inline>
  </div>
    \`,
    standalone: true,
    imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      IconModule,
      InputInlineComponent,
    ],
  })
  export class FusionStoryWrapperComponent {
    @ViewChild('inputInline') inputInline: InputInlineComponent;

    type = InlineInputType.Number;
    formControl = new FormControl(50);

    loading = false;
    readOnly = false;
    error = '';

    onSave($event) {
      console.log('onSave: ', $event);
      this.loading = true;
      setTimeout(() => {
        // here you can apply validations

        this.loading = false;
        // update value
        this.formControl.setValue($event.newValue);
        // exit from edit mode
        this.inputInline.isEditMode$.next(false);
      }, 1000);
    }

    onCancel() {
      console.log('onCancel');
    }
  }
  `,
                format: true,
                type: 'code'
            }
        }
    }
};

export const ValueCurrency = {
    render: InputTemplate,

    args: {
        formControl: new FormControl(250),
        type: InlineInputType.Currency
    },

    parameters: {
        docs: {
            source: {
                language: 'typescript',
                code: dedent`
  import { Component, ViewChild } from '@angular/core';
  import { CommonModule } from '@angular/common';
  import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
  import { IconModule } from '@ironsource/fusion-ui/components/icon/v1';
  import {
    InlineInputType,
    InputInlineComponent,
  } from '@ironsource/fusion-ui/components/input-inline';

  @Component({
    selector: 'fusion-story-wrapper',
    template: \`
      <div style="width: 155px;">
  <fusion-input-inline #inputInline
      [type]="type"
      [formControl]="formControl"
      [loading]="loading"
      [readOnly]="readOnly"
      [error]="error"
      (onSave)="onSave($event)"
      (onCancel)="onCancel()"
  ></fusion-input-inline>
  </div>
    \`,
    standalone: true,
    imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      IconModule,
      InputInlineComponent,
    ],
  })
  export class FusionStoryWrapperComponent {
    @ViewChild('inputInline') inputInline: InputInlineComponent;

    type = InlineInputType.Currency;
    formControl = new FormControl(250);

    loading = false;
    readOnly = false;
    error = '';

    onSave($event) {
      console.log('onSave: ', $event);
      this.loading = true;
      setTimeout(() => {
        // here you can apply validations

        this.loading = false;
        // update value
        this.formControl.setValue($event.newValue);
        // exit from edit mode
        this.inputInline.isEditMode$.next(false);
      }, 1000);
    }

    onCancel() {
      console.log('onCancel');
    }
  }
  `,
                format: true,
                type: 'code'
            }
        }
    }
};

export const PendingValueCurrency = {
    render: InputTemplate,

    args: {
        formControl: new FormControl(250),
        loading: true,
        type: InlineInputType.Currency
    },

    parameters: {
        docs: {
            source: {
                language: 'typescript',
                code: dedent`
  import { Component, ViewChild } from '@angular/core';
  import { CommonModule } from '@angular/common';
  import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
  import { IconModule } from '@ironsource/fusion-ui/components/icon/v1';
  import {
    InlineInputType,
    InputInlineComponent,
  } from '@ironsource/fusion-ui/components/input-inline';

  @Component({
    selector: 'fusion-story-wrapper',
    template: \`
      <div style="width: 155px;">
  <fusion-input-inline #inputInline
      [type]="type"
      [formControl]="formControl"
      [loading]="loading"
      [readOnly]="readOnly"
      [error]="error"
      (onSave)="onSave($event)"
      (onCancel)="onCancel()"
  ></fusion-input-inline>
  </div>
    \`,
    standalone: true,
    imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      IconModule,
      InputInlineComponent,
    ],
  })
  export class FusionStoryWrapperComponent {
    @ViewChild('inputInline') inputInline: InputInlineComponent;

    type = InlineInputType.Currency;
    formControl = new FormControl(250);

    loading = false;
    readOnly = false;
    error = '';

    onSave($event) {
      console.log('onSave: ', $event);
      this.loading = true;
      setTimeout(() => {
        // here you can apply validations

        this.loading = false;
        // update value
        this.formControl.setValue($event.newValue);
        // exit from edit mode
        this.inputInline.isEditMode$.next(false);
      }, 1000);
    }

    onCancel() {
      console.log('onCancel');
    }
  }
  `,
                format: true,
                type: 'code'
            }
        }
    }
};

export const ValueCurrencyAlignRight = {
    render: InputTemplate,

    args: {
        formControl: new FormControl(250),
        type: InlineInputType.Currency,
        className: 'fu-align-right'
    },

    parameters: {
        docs: {
            source: {
                language: 'typescript',
                code: dedent`
  import { Component, ViewChild } from '@angular/core';
  import { CommonModule } from '@angular/common';
  import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
  import { IconModule } from '@ironsource/fusion-ui/components/icon/v1';
  import {
    InlineInputType,
    InputInlineComponent,
  } from '@ironsource/fusion-ui/components/input-inline';

  @Component({
    selector: 'fusion-story-wrapper',
    template: \`
      <div style="width: 155px;">
  <fusion-input-inline #inputInline class="fu-align-right"
      [type]="type"
      [formControl]="formControl"
      [loading]="loading"
      [readOnly]="readOnly"
      [error]="error"
      (onSave)="onSave($event)"
      (onCancel)="onCancel()"
  ></fusion-input-inline>
  </div>
    \`,
    standalone: true,
    imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      IconModule,
      InputInlineComponent,
    ],
  })
  export class FusionStoryWrapperComponent {
    @ViewChild('inputInline') inputInline: InputInlineComponent;

    type = InlineInputType.Currency;
    formControl = new FormControl(250);

    loading = false;
    readOnly = false;
    error = '';

    onSave($event) {
      console.log('onSave: ', $event);
      this.loading = true;
      setTimeout(() => {
        // here you can apply validations

        this.loading = false;
        // update value
        this.formControl.setValue($event.newValue);
        // exit from edit mode
        this.inputInline.isEditMode$.next(false);
      }, 1000);
    }

    onCancel() {
      console.log('onCancel');
    }
  }
  `,
                format: true,
                type: 'code'
            }
        }
    }
};

export const ValuePercent = {
    render: InputTemplate,

    args: {
        formControl: new FormControl(50),
        type: InlineInputType.Percent
    },

    parameters: {
        docs: {
            source: {
                language: 'typescript',
                code: dedent`
  import { Component, ViewChild } from '@angular/core';
  import { CommonModule } from '@angular/common';
  import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
  import { IconModule } from '@ironsource/fusion-ui/components/icon/v1';
  import {
    InlineInputType,
    InputInlineComponent,
  } from '@ironsource/fusion-ui/components/input-inline';

  @Component({
    selector: 'fusion-story-wrapper',
    template: \`
      <div style="width: 155px;">
  <fusion-input-inline #inputInline
      [type]="type"
      [formControl]="formControl"
      [loading]="loading"
      [readOnly]="readOnly"
      [error]="error"
      (onSave)="onSave($event)"
      (onCancel)="onCancel()"
  ></fusion-input-inline>
  </div>
    \`,
    standalone: true,
    imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      IconModule,
      InputInlineComponent,
    ],
  })
  export class FusionStoryWrapperComponent {
    @ViewChild('inputInline') inputInline: InputInlineComponent;

    type = InlineInputType.Percent;
    formControl = new FormControl(50);

    loading = false;
    readOnly = false;
    error = '';

    onSave($event) {
      console.log('onSave: ', $event);
      this.loading = true;
      setTimeout(() => {
        // here you can apply validations

        this.loading = false;
        // update value
        this.formControl.setValue($event.newValue);
        // exit from edit mode
        this.inputInline.isEditMode$.next(false);
      }, 1000);
    }

    onCancel() {
      console.log('onCancel');
    }
  }
  `,
                format: true,
                type: 'code'
            }
        }
    }
};
