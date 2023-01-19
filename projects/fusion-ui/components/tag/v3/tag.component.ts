import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TagBaseComponent} from '@ironsource/fusion-ui/components/tag/common/base';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {FlagModule} from '@ironsource/fusion-ui/components/flag/v1';
import {TooltipModule} from '@ironsource/fusion-ui/components/tooltip/v3';

@Component({
    selector: 'fusion-tag',
    templateUrl: './tag.component.html',
    styleUrls: ['./tag.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [CommonModule, IconModule, FlagModule, TooltipModule]
})
export class TagComponent extends TagBaseComponent implements OnInit {
    ngOnInit() {
        super.ngOnInit();
        this.closeIconName$.next({iconName: 'close-bold', iconVersion: 'v3'});
    }
}
