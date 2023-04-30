import {Story, Meta} from '@storybook/angular';
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

const TooltipTemplate: Story<ToggleComponent> = (args: ToggleComponent) => ({
    props: {...args},
    template: `<fusion-toggle
    [formControl]="formControl"
    [disabled]="disabled"
    [error]="error"
    [helper]="helper"
    >{{label}}</fusion-toggle>`
});

// region Default
export const Default = TooltipTemplate.bind({});
Default.args = {
    formControl: formControlUnchecked
};
Default.parameters = {
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
};
// endregion

// region Checked
export const Checked = TooltipTemplate.bind({});
Checked.args = {
    formControl: formControlChecked
};
Checked.parameters = {
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
};
// endregion

// region DisabledUnchecked
export const DisabledUnchecked = TooltipTemplate.bind({});
DisabledUnchecked.args = {
    formControl: formControlUncheckedDisabled
};
DisabledUnchecked.parameters = {
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
};
// endregion

// region DisabledChecked
export const DisabledChecked = TooltipTemplate.bind({});
DisabledChecked.args = {
    formControl: formControlCheckedDisabled
};
DisabledChecked.parameters = {
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
};
// endregion

// region WithLabel
export const WithLabel = TooltipTemplate.bind({});
WithLabel.args = {
    formControl: formControlUnchecked,
    label: 'Item name'
};
WithLabel.parameters = {
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
};
// endregion

// region WithLabelChecked
export const WithLabelChecked = TooltipTemplate.bind({});
WithLabelChecked.args = {
    formControl: formControlChecked,
    label: 'Item name'
};
WithLabelChecked.parameters = {
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
};
// endregion

// region WithLabelDisabled
export const WithLabelDisabled = TooltipTemplate.bind({});
WithLabelDisabled.args = {
    formControl: formControlUncheckedDisabled,
    label: 'Item name'
};
WithLabelDisabled.parameters = {
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
};
// endregion

// region WithLabelCheckedDisabled
export const WithLabelCheckedDisabled = TooltipTemplate.bind({});
WithLabelCheckedDisabled.args = {
    formControl: formControlCheckedDisabled,
    label: 'Item name'
};
WithLabelCheckedDisabled.parameters = {
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
};
// endregion

// region WithLabelHelperText
export const WithLabelHelperText = TooltipTemplate.bind({});
WithLabelHelperText.args = {
    formControl: formControlChecked,
    label: 'Item name',
    helper: 'Helper text'
};
WithLabelHelperText.parameters = {
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
};
// endregion

// region WithLabelErrorText
export const WithLabelErrorText = TooltipTemplate.bind({});
WithLabelErrorText.args = {
    formControl: formControlChecked,
    label: 'Item name',
    error: 'Error text'
};
WithLabelErrorText.parameters = {
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
};
// endregion

// region WithCustomCheckedColor
const TooltipCustomColorTemplate: Story<ToggleComponent> = (args: ToggleComponent) => ({
    props: {...args},
    template: `<fusion-toggle style="--checked-bg-color:#FFB424;"
    [formControl]="formControl"
    [disabled]="disabled"
    [error]="error"
    [helper]="helper"
    >{{label}}</fusion-toggle>`
});
export const WithCustomCheckedColor = TooltipCustomColorTemplate.bind({});
WithCustomCheckedColor.args = {
    formControl: formControlChecked,
    label: 'Item name'
};
WithCustomCheckedColor.parameters = {
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
};
// endregion
