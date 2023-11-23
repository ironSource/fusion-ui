import {ChangeDetectionStrategy, Component, Input, ViewEncapsulation} from '@angular/core';
import {IconData} from '@ironsource/fusion-ui/components/icon/common/entities';
import {SvgComponent} from '@ironsource/fusion-ui/components/svg';

@Component({
    selector: 'fusion-icon',
    template: '<span></span>',
    styleUrls: ['./icon.component.scss'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconComponent extends SvgComponent {
    @Input() set name(val: IconData) {
        if (typeof val === 'string') {
            this.setLibPath(val);
            this.onNameChanged(this.iconName ?? val);
        } else {
            this.libVersion = val.iconVersion;
            this.onNameChanged(val.iconName);
        }
    }

    iconName: string;

    public getUrlPath() {
        if (!this.iconName) {
            throw new Error(`Asset path-name '${this.svgPath}' not set`);
        } else {
            if (this.svgOptions?.assetsPath) {
                this.svgPath =
                    this.svgOptions.assetsPath === 'https://fusion.ironsrc.net/assets'
                        ? `${this.libVersion}/${this.iconName}`
                        : `/${this.iconName}`;
            }
        }
        return super.getUrlPath();
    }

    private setLibPath(value: string): void {
        this.removeCssClass();
        if (typeof value === 'string' && value.includes('/')) {
            const lastIndex = value.lastIndexOf('/');
            this.libVersion = value.substring(0, lastIndex);
            this.iconName = value.substring(lastIndex + 1);
            // for phosphor regular icons
            if (this.libVersion === 'ph') {
                this.libVersion += '/regular';
            } else if (this.libVersion === 'ph/bold') {
                this.iconName += '-bold';
            } else if (this.libVersion === 'ph/fill') {
                this.iconName += '-fill';
            }
        }
    }

    private removeCssClass(): void {
        if (!!this.iconName) {
            this.renderer.removeClass(this.elementRef.nativeElement, this.iconName.replace(/[\/,_, ]/gi, '-'));
        }
        this.iconName = null;
    }

    private onNameChanged(value: string): void {
        if (!!value) {
            this.renderer.addClass(this.elementRef.nativeElement, value.replace(/[\/,_, ]/gi, '-'));
        }
        this.path = this.iconName = value;
    }
}
