import {Directive, HostBinding, Inject, Input, Optional} from '@angular/core';
import {SVG_OPTIONS_TOKEN, SvgOptions} from '@ironsource/fusion-ui/components/svg';
import {CountryCode} from './flag.entities';

@Directive()
export class FlagBaseComponent {
    /**
     * Set country code ISO 3166-1-alpha-2 code of a country. https://www.iso.org/obp/ui/#search/code/
     * @param value
     */
    @Input() set countryCode(value: CountryCode) {
        this._countryCode = value;
    }
    /**
     * Set flag size
     * @default 16
     */
    @Input() set size(value: number) {
        this._size = value;
    }

    /**
     * Set border radius
     * @default 50%
     */
    @Input() set borderRadius(value: string) {
        this._borderRadius = value;
    }

    @Input() set rounded(value: boolean) {
        this._rounded = value;
    }

    /** @internal */
    @Input() set version(value: string) {
        this._version = value;
    }

    get size(): number {
        return this._size;
    }
    get borderRadius(): string {
        return this._rounded ? '50%' : this._borderRadius;
    }
    /** @internal */
    get flagUrl(): string {
        return `${this.svgOptions?.assetsPath}/flags/${this._version}/${this._countryCode}.svg`;
    }

    @HostBinding('style.width.px') get width(): number {
        return this._size;
    }
    @HostBinding('style.height.px') get height(): number {
        return this._size;
    }

    private _countryCode: CountryCode;
    private _size = 16;
    private _borderRadius = '50%';
    private _rounded = true;
    private _version = 'v4';

    constructor(@Optional() @Inject(SVG_OPTIONS_TOKEN) private svgOptions: SvgOptions) {}
}
