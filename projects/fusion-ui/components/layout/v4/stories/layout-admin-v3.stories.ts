import {Meta, StoryFn} from '@storybook/angular';
import {moduleMetadata} from '@storybook/angular';
import {dedent} from 'ts-dedent';
import {CommonModule} from '@angular/common';
import {SvgModule} from '@ironsource/fusion-ui/components/svg';
import {environment} from '../../../../../../stories/environments/environment';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {LayoutComponent} from '../layout.component';
import {
    IS_ADMIN_MENU_ITEMS,
    LAYOUT_HEADER_CONTENT_MOCK,
    NAVIGATION_ADMIN_MENU_MOCK,
    USER_PROFILE_MENU_ITEMS
} from '@ironsource/fusion-ui/components/navigation-menu/v4/stories/navigation-menu.mock';
import {LayoutStoryWrapperComponent} from './layout-story-wrapper.component';
import {ButtonModule} from '@ironsource/fusion-ui/components/button';
import {TeleportingModule} from '@ironsource/fusion-ui/directives/teleporting';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TopFilterIncludeExcludeComponent} from '@ironsource/fusion-ui/components/top-filter-include-exclude';

const meta: Meta<LayoutStoryWrapperComponent> = {
    title: 'V3/Components/Layout/One Main Parent',
    component: LayoutComponent,
    decorators: [
        moduleMetadata({
            declarations: [],
            imports: [
                CommonModule,
                FormsModule,
                ReactiveFormsModule,
                SvgModule.forRoot({assetsPath: environment.assetsPath}),
                IconModule,
                LayoutStoryWrapperComponent,
                ButtonModule,
                TeleportingModule,
                TopFilterIncludeExcludeComponent
            ]
        })
    ],
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component: dedent`***Layout v4*** description will be here`
            },
            story: {
                inline: false,
                iframeHeight: 600
            }
        },
        layout: 'fullscreen'
    },
    args: {
        headerContent: LAYOUT_HEADER_CONTENT_MOCK,
        layoutConfiguration: {
            navigationMenuItems: NAVIGATION_ADMIN_MENU_MOCK,
            layoutUser: {
                name: 'Jonny Kim',
                email: 'jonny.kim@supercell.com'
            }
        }
    }
};
export default meta;

const LayoutTemplate: StoryFn<LayoutComponent> = args => ({
    props: {...args},
    template: `<fusion-layout-story-wrapper [headerContent]="headerContent" [layoutConfiguration]="layoutConfiguration"></fusion-layout-story-wrapper>`
});

export const Default = {
    render: LayoutTemplate,

    parameters: {
        docs: {
            description: {
                story: dedent`<a href="https://stackblitz.com/edit/angular-goeobr-xgwbof?file=src%2Fapp%2Fwrapper.component.ts" target="_blank">Example on Stackblitz</a>`
            },
            source: {
                language: 'typescript',
                code: dedent`
import { Component } from '@angular/core';
import { LayoutComponent } from '@ironsource/fusion-ui/components/layout/v4';
import { MenuItem } from '@ironsource/fusion-ui/components/menu/common/base';
import {
  HeaderContent,
  LayoutConfiguration,
} from '@ironsource/fusion-ui/components/layout/v4/layout.entities';
import { NavigationBarItemType } from '@ironsource/fusion-ui/components/navigation-menu/v4';

@Component({
  selector: 'fusion-story-wrapper',
  template: \`
  <fusion-layout
  [configuration]="layoutConfiguration"
  [headerContent]="headerContent"
  (menuItemClick)="onMenuItemClick($event)"
  (pageBackButtonClicked)="onPageBackButtonClicked($event)"
>
<div class="parent" [class.layout1]="isLayout1">
<div class="div1">1</div>
<div class="div2">2</div>
<div class="div3">3</div>
<div class="div4">4</div>
<div class="div5">5</div>
<div class="div6">6</div>
<div class="div7">7</div>
<div class="div8">8</div>
<div class="div9">9</div>
<div class="div10">10</div>
</div>
</fusion-layout>
\`,
  styles: [
    '.parent {padding: 24px; width: 100%; height: 100%; display: grid; grid-template-columns: repeat(4, 1fr); grid-template-rows: repeat(4, 1fr); grid-column-gap: 16px; grid-row-gap: 24px;}',
    '.div1 { grid-area: 1 / 1 / 2 / 2; }',
    '.div2 { grid-area: 1 / 2 / 2 / 3; }',
    '.div3 { grid-area: 1 / 3 / 2 / 4; }',
    '.div4 { grid-area: 1 / 4 / 2 / 5; }',
    '.div5 { grid-area: 2 / 1 / 4 / 3; }',
    '.div6 { grid-area: 2 / 3 / 4 / 5; }',
    '.div7 { grid-area: 4 / 1 / 5 / 2; }',
    '.div8 { grid-area: 4 / 2 / 5 / 3; }',
    '.div9 { grid-area: 4 / 3 / 5 / 4; }',
    '.div10 { grid-area: 4 / 4 / 5 / 5; }',
    '.parent.layout1 .div1 { grid-area: 1 / 1 / 2 / 2; }',
    '.parent.layout1 .div2 { grid-area: 2 / 1 / 3 / 2; }',
    '.parent.layout1 .div3 { grid-area: 3 / 1 / 4 / 2; }',
    '.parent.layout1 .div4 { grid-area: 4 / 1 / 5 / 2; }',
    '.parent.layout1 .div5 { grid-area: 1 / 4 / 2 / 5; }',
    '.parent.layout1 .div6 { grid-area: 2 / 4 / 3 / 5; }',
    '.parent.layout1 .div7 { grid-area: 3 / 4 / 4 / 5; }',
    '.parent.layout1 .div8 { grid-area: 4 / 4 / 5 / 5; }',
    '.parent.layout1 .div9 { grid-area: 1 / 2 / 3 / 4; }',
    '.parent.layout1 .div10 { grid-area: 3 / 2 / 5 / 4; }',
    '.parent div{color: #a7a7a7; background: #F7F7F7; border: 1px solid rgba(0, 0, 0, 0.08); border-radius: 4px; display: flex; align-items: center; justify-content: center}',
  ],
  standalone: true,
  imports: [LayoutComponent],
})
export class FusionStoryWrapperComponent {
  headerContent: HeaderContent = {
    title: NAVIGATION_MENU_MOCK[0].menuTitle,
  };
  layoutConfiguration: LayoutConfiguration = {
    navigationMenuItems: NAVIGATION_MENU_MOCK,
    layoutUser: {
      name: 'Jonny Kim',
      email: 'jonny.kim@supercell.com',
    },
  };

  isLayout1 = false;

  onPageBackButtonClicked($event) {
    console.log('Page Back button clicked');
  }

  onMenuItemClick(menuItem: MenuItem) {
    console.log('MnuItem Clicked: ', menuItem);
    this.headerContent = { ...this.headerContent, title: menuItem.name };
    this.isLayout1 = !this.isLayout1;
  }
}

const USER_PROFILE_MENU_ITEMS: MenuItem[] = ${JSON.stringify(USER_PROFILE_MENU_ITEMS)};
const IS_MENU_ITEMS: MenuItem[] = ${JSON.stringify(IS_ADMIN_MENU_ITEMS)}
const NAVIGATION_MENU_MOCK = ${JSON.stringify(NAVIGATION_ADMIN_MENU_MOCK)};
`,
                format: true,
                type: 'code'
            }
        }
    }
};
