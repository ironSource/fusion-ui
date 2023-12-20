import {Meta, StoryFn} from '@storybook/angular';
import {moduleMetadata} from '@storybook/angular';
import {action} from '@storybook/addon-actions';
import {CommonModule} from '@angular/common';
import {SvgModule} from '@ironsource/fusion-ui/components/svg';
import {environment} from '../../../../../../../stories/environments/environment';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {LayoutHeaderComponent} from './layout-header.component';
import {
    HEADER_CONTENT_MOCK,
    HEADER_NO_TITLE_MOCK,
    HEADER_TITLE_BOTTOM_LINE_MOCK,
    HEADER_TITLE_LINE_MOCK,
    HEADER_TITLE_TOP_LINE_MOCK
} from '@ironsource/fusion-ui/components/navigation-menu/v4/stories/navigation-menu.mock';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

const actionsData = {
    backButtonClicked: action('backButtonClicked')
};

const meta: Meta<LayoutHeaderComponent> = {
    title: 'V4/Components/Layout/Header',
    component: LayoutHeaderComponent,
    decorators: [
        moduleMetadata({
            declarations: [],
            imports: [CommonModule, FormsModule, ReactiveFormsModule, SvgModule.forRoot({assetsPath: environment.assetsPath}), IconModule]
        })
    ],
    parameters: {
        layout: 'fullscreen'
    },
    args: {
        headerContent: HEADER_CONTENT_MOCK
    }
};
export default meta;

const LayoutHeaderTemplate: StoryFn<LayoutHeaderComponent> = (args: LayoutHeaderComponent) => ({
    props: {...args, backButtonClicked: actionsData.backButtonClicked},
    template: `<div [style]="!multilineData ? 'border-bottom: solid 1px #E0E0E0; max-height: 64px;' : ''">
    <fusion-layout-header [class.fusion-v4]="!!multilineData" [multilineData]="multilineData" [headerContent]="headerContent" [teleportElements]="teleportElements" (backButtonClicked)="backButtonClicked($event)"></fusion-layout-header>
</div>`
});

/*
export const Default = {
    render: LayoutHeaderTemplate
};
*/
export const MainTitleLine = {
    render: LayoutHeaderTemplate,
    args: {
        multilineData: HEADER_TITLE_LINE_MOCK,
        headerContent: {
            ...HEADER_CONTENT_MOCK
        }
    }
};

export const WithTopLine = {
    render: LayoutHeaderTemplate,
    args: {
        multilineData: HEADER_TITLE_TOP_LINE_MOCK,
        teleportElements: [{id: 'fuHeaderTeleport', isOnRight: true}],
        headerContent: {
            ...HEADER_CONTENT_MOCK
        }
    }
};

export const WithBottomLine = {
    render: LayoutHeaderTemplate,
    args: {
        multilineData: HEADER_TITLE_BOTTOM_LINE_MOCK,
        teleportElements: [{id: 'fuHeaderTeleport', isOnRight: true}],
        headerContent: {
            ...HEADER_CONTENT_MOCK
        }
    }
};

export const MainNoTitleTeleport = {
    render: LayoutHeaderTemplate,
    args: {
        multilineData: HEADER_NO_TITLE_MOCK,
        teleportElements: [{id: 'fuHeaderTeleportOne'}, {id: 'fuHeaderTeleportTwo'}, {id: 'fuHeaderTeleport', isOnRight: true}],
        headerContent: {
            ...HEADER_CONTENT_MOCK,
            hasBackButton: true
        }
    }
};
