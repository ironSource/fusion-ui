import {StoryFn, Meta} from '@storybook/angular';
import {moduleMetadata} from '@storybook/angular';
import {CommonModule} from '@angular/common';
import {dedent} from 'ts-dedent';
import {ToggleComponent} from '@ironsource/fusion-ui/components/toggle';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';

const formControlChecked = new FormControl(true);
const formControlCheckedDisabled = new FormControl({value: true, disabled: true});
const formControlUnchecked = new FormControl(false);
const formControlUncheckedDisabled = new FormControl({value: false, disabled: true});

export default {
    title: 'Components/Toggle',
    component: ToggleComponent,
    decorators: [
        moduleMetadata({
            declarations: [],
            imports: [CommonModule, FormsModule, ReactiveFormsModule]
        })
    ],
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component: dedent`**ToggleComponent component**`
            }
        }
    },
    args: {
        label: '',
        error: '',
        helper: ''
    },
    argTypes: {
        formControl: {
            control: false
        }
    }
} as Meta<ToggleComponent>;

const TooltipTemplate: StoryFn<ToggleComponent> = (args: ToggleComponent) => ({
    props: {...args},
    template: `<fusion-toggle
    [formControl]="formControl"
    [disabled]="disabled"
    [error]="error"
    [helper]="helper"
    >{{label}}</fusion-toggle>`
});

export const Default = {
    render: TooltipTemplate,

    args: {
        formControl: formControlUnchecked
    },

    parameters: {
        docs: {
            source: {
                language: 'typescript',
                code: dedent`
    import { Component } from '@angular/core';
    import { CommonModule } from '@angular/common';
    import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
    import { ToggleComponent } from '@ironsource/fusion-ui/components/toggle/v3';

    @Component({
      selector: 'fusion-story-wrapper',
      template: \`<fusion-toggle
        [formControl]="formControl"
        ></fusion-toggle>\`,
      standalone: true,
      imports: [CommonModule, FormsModule, ReactiveFormsModule, ToggleComponent],
    })
    export class FusionStoryWrapperComponent {
      formControl = new FormControl(false);
    }
    `,
                format: true,
                type: 'code'
            }
        }
    }
};

export const Checked = {
    render: TooltipTemplate,

    args: {
        formControl: formControlChecked
    },

    parameters: {
        docs: {
            source: {
                language: 'typescript',
                code: dedent`
    import { Component } from '@angular/core';
    import { CommonModule } from '@angular/common';
    import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
    import { ToggleComponent } from '@ironsource/fusion-ui/components/toggle/v3';

    @Component({
      selector: 'fusion-story-wrapper',
      template: \`<fusion-toggle
        [formControl]="formControl"
        ></fusion-toggle>\`,
      standalone: true,
      imports: [CommonModule, FormsModule, ReactiveFormsModule, ToggleComponent],
    })
    export class FusionStoryWrapperComponent {
      formControl = new FormControl(true);
    }
    `,
                format: true,
                type: 'code'
            }
        }
    }
};

export const DisabledUnchecked = {
    render: TooltipTemplate,

    args: {
        formControl: formControlUncheckedDisabled
    },

    parameters: {
        docs: {
            source: {
                language: 'typescript',
                code: dedent`
    import { Component } from '@angular/core';
    import { CommonModule } from '@angular/common';
    import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
    import { ToggleComponent } from '@ironsource/fusion-ui/components/toggle/v3';

    @Component({
      selector: 'fusion-story-wrapper',
      template: \`<fusion-toggle
        [formControl]="formControl"
        ></fusion-toggle>\`,
      standalone: true,
      imports: [CommonModule, FormsModule, ReactiveFormsModule, ToggleComponent],
    })
    export class FusionStoryWrapperComponent {
      formControl = new FormControl({value: false, disabled: true});
    }
    `,
                format: true,
                type: 'code'
            }
        }
    }
};

export const DisabledChecked = {
    render: TooltipTemplate,

    args: {
        formControl: formControlCheckedDisabled
    },

    parameters: {
        docs: {
            source: {
                language: 'typescript',
                code: dedent`
    import { Component } from '@angular/core';
    import { CommonModule } from '@angular/common';
    import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
    import { ToggleComponent } from '@ironsource/fusion-ui/components/toggle/v3';

    @Component({
      selector: 'fusion-story-wrapper',
      template: \`<fusion-toggle
        [formControl]="formControl"
        ></fusion-toggle>\`,
      standalone: true,
      imports: [CommonModule, FormsModule, ReactiveFormsModule, ToggleComponent],
    })
    export class FusionStoryWrapperComponent {
      formControl = new FormControl({value: true, disabled: true});
    }
    `,
                format: true,
                type: 'code'
            }
        }
    }
};

export const WithLabel = {
    render: TooltipTemplate,

    args: {
        formControl: formControlUnchecked,
        label: 'Item name'
    },

    parameters: {
        docs: {
            source: {
                language: 'typescript',
                code: dedent`
    import { Component } from '@angular/core';
    import { CommonModule } from '@angular/common';
    import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
    import { ToggleComponent } from '@ironsource/fusion-ui/components/toggle/v3';

    @Component({
      selector: 'fusion-story-wrapper',
      template: \`<fusion-toggle
        [formControl]="formControl"
        >{{label}}</fusion-toggle>\`,
      standalone: true,
      imports: [CommonModule, FormsModule, ReactiveFormsModule, ToggleComponent],
    })
    export class FusionStoryWrapperComponent {
      formControl = new FormControl(false);
      label = 'Item name';
    }
    `,
                format: true,
                type: 'code'
            }
        }
    }
};

export const WithLabelChecked = {
    render: TooltipTemplate,

    args: {
        formControl: formControlChecked,
        label: 'Item name'
    },

    parameters: {
        docs: {
            source: {
                language: 'typescript',
                code: dedent`
    import { Component } from '@angular/core';
    import { CommonModule } from '@angular/common';
    import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
    import { ToggleComponent } from '@ironsource/fusion-ui/components/toggle/v3';

    @Component({
      selector: 'fusion-story-wrapper',
      template: \`<fusion-toggle
        [formControl]="formControl"
        >{{label}}</fusion-toggle>\`,
      standalone: true,
      imports: [CommonModule, FormsModule, ReactiveFormsModule, ToggleComponent],
    })
    export class FusionStoryWrapperComponent {
      formControl = new FormControl(true);
      label = 'Item name';
    }
    `,
                format: true,
                type: 'code'
            }
        }
    }
};

export const WithLabelDisabled = {
    render: TooltipTemplate,

    args: {
        formControl: formControlUncheckedDisabled,
        label: 'Item name'
    },

    parameters: {
        docs: {
            source: {
                language: 'typescript',
                code: dedent`
    import { Component } from '@angular/core';
    import { CommonModule } from '@angular/common';
    import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
    import { ToggleComponent } from '@ironsource/fusion-ui/components/toggle/v3';

    @Component({
      selector: 'fusion-story-wrapper',
      template: \`<fusion-toggle
        [formControl]="formControl"
        >{{label}}</fusion-toggle>\`,
      standalone: true,
      imports: [CommonModule, FormsModule, ReactiveFormsModule, ToggleComponent],
    })
    export class FusionStoryWrapperComponent {
      formControl = new FormControl({value: false, disabled: true});
      label = 'Item name';
    }
    `,
                format: true,
                type: 'code'
            }
        }
    }
};

export const WithLabelCheckedDisabled = {
    render: TooltipTemplate,

    args: {
        formControl: formControlCheckedDisabled,
        label: 'Item name'
    },

    parameters: {
        docs: {
            source: {
                language: 'typescript',
                code: dedent`
    import { Component } from '@angular/core';
    import { CommonModule } from '@angular/common';
    import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
    import { ToggleComponent } from '@ironsource/fusion-ui/components/toggle/v3';

    @Component({
      selector: 'fusion-story-wrapper',
      template: \`<fusion-toggle
        [formControl]="formControl"
        >{{label}}</fusion-toggle>\`,
      standalone: true,
      imports: [CommonModule, FormsModule, ReactiveFormsModule, ToggleComponent],
    })
    export class FusionStoryWrapperComponent {
      formControl = new FormControl({value: true, disabled: true});
      label = 'Item name';
    }
    `,
                format: true,
                type: 'code'
            }
        }
    }
};

export const WithLabelHelperText = {
    render: TooltipTemplate,

    args: {
        formControl: formControlChecked,
        label: 'Item name',
        helper: 'Helper text'
    },

    parameters: {
        docs: {
            source: {
                language: 'typescript',
                code: dedent`
    import { Component } from '@angular/core';
    import { CommonModule } from '@angular/common';
    import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
    import { ToggleComponent } from '@ironsource/fusion-ui/components/toggle/v3';

    @Component({
      selector: 'fusion-story-wrapper',
      template: \`<fusion-toggle
        [formControl]="formControl"
        [helper]="helper"
        >{{label}}</fusion-toggle>\`,
      standalone: true,
      imports: [CommonModule, FormsModule, ReactiveFormsModule, ToggleComponent],
    })
    export class FusionStoryWrapperComponent {
      formControl = new FormControl(true);
      label = 'Item name';
      helper = 'Helper text';
    }
    `,
                format: true,
                type: 'code'
            }
        }
    }
};

export const WithLabelErrorText = {
    render: TooltipTemplate,

    args: {
        formControl: formControlChecked,
        label: 'Item name',
        error: 'Error text'
    },

    parameters: {
        docs: {
            source: {
                language: 'typescript',
                code: dedent`
    import { Component } from '@angular/core';
    import { CommonModule } from '@angular/common';
    import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
    import { ToggleComponent } from '@ironsource/fusion-ui/components/toggle/v3';

    @Component({
      selector: 'fusion-story-wrapper',
      template: \`<fusion-toggle
        [formControl]="formControl"
        [error]="error"
        >{{label}}</fusion-toggle>\`,
      standalone: true,
      imports: [CommonModule, FormsModule, ReactiveFormsModule, ToggleComponent],
    })
    export class FusionStoryWrapperComponent {
      formControl = new FormControl(true);
      label = 'Item name';
      error = 'Error text';
    }
    `,
                format: true,
                type: 'code'
            }
        }
    }
};

// endregion

// region WithCustomCheckedColor
const TooltipCustomColorTemplate: StoryFn<ToggleComponent> = (args: ToggleComponent) => ({
    props: {...args},
    template: `<fusion-toggle style="--checked-bg-color:#FFB424;"
    [formControl]="formControl"
    [disabled]="disabled"
    [error]="error"
    [helper]="helper"
    >{{label}}</fusion-toggle>`
});

export const WithCustomCheckedColor = {
    render: TooltipCustomColorTemplate,

    args: {
        formControl: formControlChecked,
        label: 'Item name'
    },

    parameters: {
        docs: {
            source: {
                language: 'typescript',
                code: dedent`
    import { Component } from '@angular/core';
    import { CommonModule } from '@angular/common';
    import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
    import { ToggleComponent } from '@ironsource/fusion-ui/components/toggle/v3';

    @Component({
      selector: 'fusion-story-wrapper',
      template: \`<fusion-toggle style="--checked-bg-color:#FFB424;"
        [formControl]="formControl"
        >{{label}}</fusion-toggle>\`,
      standalone: true,
      imports: [CommonModule, FormsModule, ReactiveFormsModule, ToggleComponent],
    })
    export class FusionStoryWrapperComponent {
      formControl = new FormControl(true);
      label = 'Item name';
    }
    `,
                format: true,
                type: 'code'
            }
        }
    }
};
