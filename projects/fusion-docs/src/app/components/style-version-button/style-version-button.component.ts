import {Component, OnInit} from '@angular/core';
import {StyleVersion, VersionService} from '@ironsource/fusion-ui';
import {Observable} from 'rxjs';

@Component({
    selector: 'fusion-style-version-button',
    templateUrl: './style-version-button.component.html',
    styleUrls: ['./style-version-button.component.scss']
})
export class StyleVersionButtonComponent implements OnInit {
    selectedVersion$: Observable<StyleVersion>;
    StyleVersion = StyleVersion;

    constructor(private versionService: VersionService) {}

    ngOnInit(): void {
        this.selectedVersion$ = this.versionService.styleVersion$;
    }

    changeVersion(): void {
        const selectedVersion = this.versionService.styleVersion;
        const newVersion = selectedVersion === StyleVersion.V1 ? StyleVersion.V2 : StyleVersion.V1;
        this.versionService.styleVersion = newVersion;
    }
}
