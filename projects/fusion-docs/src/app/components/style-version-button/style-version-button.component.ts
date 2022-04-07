import {Component, OnInit} from '@angular/core';
import {StyleVersion, SwitcherItem} from '@ironsource/fusion-ui';
import {FormControl} from '@angular/forms';
import {VersionService} from '../../services/version/version.service';

@Component({
    selector: 'fusion-style-version-button',
    templateUrl: './style-version-button.component.html',
    styleUrls: ['./style-version-button.component.scss']
})
export class StyleVersionButtonComponent implements OnInit {
    StyleVersion = StyleVersion;

    optionsVersions: SwitcherItem[] = [
        {id: 1, title: 'V1'},
        {id: 2, title: 'V2'},
        {id: 3, title: 'V3'}
    ];
    fcSelectedVersion = new FormControl(this.optionsVersions.find(option => option.id === this.versionService.styleVersion));

    constructor(private versionService: VersionService) {}

    ngOnInit() {
        this.fcSelectedVersion.valueChanges.subscribe(newVersion => {
            this.versionService.styleVersion = StyleVersion[StyleVersion[newVersion.id]];
        });
    }
}
