import {ChangeDetectionStrategy, Component, Input, ViewEncapsulation} from '@angular/core';
import {SvgComponent} from '@ironsource/fusion-ui/components/svg';
import {IconData} from './icon-entities';

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
            this.onNameChanged(val);
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
            if (this.svgOptions && this.svgOptions.assetsPath) {
                this.svgPath =
                    this.svgOptions.assetsPath === 'https://fusion.ironsrc.net/assets'
                        ? `${this.libVersion}/${this.iconName}`
                        : `/${this.iconName}`;
            }
        }
        return super.getUrlPath();
    }

    private onNameChanged(value: string): void {
        this.renderer.removeClass(
            this.elementRef.nativeElement,
            !!this.iconName ? this.iconName.replace(/[\/,_, ]/gi, '-') : this.iconName
        );
        if (!!value) {
            this.renderer.addClass(this.elementRef.nativeElement, value.replace(/[\/,_, ]/gi, '-'));
        }
        this.path = this.iconName = value;
    }
}
