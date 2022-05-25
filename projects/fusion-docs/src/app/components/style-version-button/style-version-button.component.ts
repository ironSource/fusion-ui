import {Component, Injector, OnInit} from '@angular/core';
import {FusionBase, StyleVersion} from '@ironsource/fusion-ui';
import {SwitcherItem} from '@ironsource/fusion-ui/components/switcher/common/entities';
import {FormControl} from '@angular/forms';
import {VersionService} from '../../services/version/version.service';
import {takeUntil} from 'rxjs/operators';

@Component({
    selector: 'fusion-style-version-button',
    templateUrl: './style-version-button.component.html',
    styleUrls: ['./style-version-button.component.scss']
})
export class StyleVersionButtonComponent extends FusionBase implements OnInit {
    StyleVersion = StyleVersion;

    optionsVersions: SwitcherItem[] = [
        {id: 1, title: 'V1'},
        {id: 2, title: 'V2'},
        {id: 3, title: 'V3'}
    ];
    fcSelectedVersion = new FormControl(this.optionsVersions.find(option => option.id === this.versionService.styleVersion));

    constructor(injector: Injector, private versionService: VersionService) {
        super(injector);
    }

    ngOnInit() {
        this.fcSelectedVersion.valueChanges.pipe(takeUntil(this.onDestroy$)).subscribe(newVersion => {
            this.versionService.styleVersion = StyleVersion[`V${newVersion.id}`];
        });
    }
}
