import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TagBaseComponent} from '@ironsource/fusion-ui/components/tag/common/base';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {FlagModule} from '@ironsource/fusion-ui/components/flag/v1';
import {TooltipModule} from '@ironsource/fusion-ui/components/tooltip/v3';

@Component({
    selector: 'fusion-tag',
    standalone: true, // todo: just for storybook to work, will be fixed in storybook 8.5.0
    templateUrl: './tag.component.html',
    styleUrls: ['./tag.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [CommonModule, IconModule, FlagModule, TooltipModule]
})
export class TagComponent extends TagBaseComponent implements OnInit {
    ngOnInit() {
        super.ngOnInit();
        this.closeIconName$.next({iconName: 'close-bold', iconVersion: 'v3'});
    }
}
