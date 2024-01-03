import {StoryFn, Meta} from '@storybook/angular';
import {moduleMetadata} from '@storybook/angular';
import {dedent} from 'ts-dedent';
import {CommonModule} from '@angular/common';
import {LoaderComponent} from '@ironsource/fusion-ui/components/loader/v4';

export default {
    title: 'V4/Components/Loader',
    component: LoaderComponent,
    decorators: [
        moduleMetadata({
            declarations: [],
            imports: [CommonModule]
        })
    ],
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component: dedent`
A loader web component is a visual element designed to indicate that content or data is being loaded or processed on a webpage. The loader informs users that the system is working in the background to fetch or process information, preventing confusion or frustration during brief delays. Loader web components enhance user experience by providing a clear visual cue of ongoing activity, allowing users to understand that their request is being handled.

##Usage
- Put \`\`\`import { LoaderComponent } from '@ironsource/fusion-ui/components/loader/v4';\`\`\` in your component script block
- Add it to your component (if it standalone component) or module import  \`\`\`imports: [CommonModule, LoaderComponent],\`\`\`
- And use it in component template: \`\`\`<fusion-loader [style.width]="size" [style.height]="size" [strokeWidth]="strokeWidth"></fusion-loader>\`\`\`
                `
            }
        },
        options: {
            showPanel: true,
            panelPosition: 'bottom'
        }
    },
    args: {
        size: '50px',
        strokeWidth: 3
    }
} as Meta<LoaderComponent>;

const LoaderTemplate: StoryFn<LoaderComponent> = (args: LoaderComponent) => ({
    props: args,
    template: `<fusion-loader [style.width]="size" [style.height]="size" [strokeWidth]="strokeWidth"></fusion-loader>`
});

export const Basic = {
    render: LoaderTemplate
};
