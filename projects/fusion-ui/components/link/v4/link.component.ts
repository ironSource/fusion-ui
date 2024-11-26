import {ChangeDetectionStrategy, Component, inject, Input} from '@angular/core';
import {IconData, IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {GenericPipe} from '@ironsource/fusion-ui/pipes/generic';
import {TestIdsService} from '@ironsource/fusion-ui/services/test-ids';
import {LinkColor, LinkTarget, LinkVariant} from './link.component.entities';
import {LinkTestIdModifiers} from '@ironsource/fusion-ui/entities';

@Component({
    selector: 'fusion-link',
    standalone: true, // todo: just for storybook to work, will be fixed in storybook 8.5.0
    host: {class: 'fusion-v4'},
    imports: [GenericPipe, IconModule],
    templateUrl: './link.component.html',
    styleUrl: './link.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LinkComponent {
    @Input() testId: string;

    @Input() href: string = '#';
    @Input() target: LinkTarget = '_self';

    @Input() set variant(value: LinkVariant) {
        this._variant = value ?? 'body1';
    }
    private _variant: LinkVariant = 'body1';
    get variant(): LinkVariant {
        return this._variant;
    }
    @Input() set color(value: LinkColor) {
        this._color = value ?? 'default';
    }
    private _color: LinkColor = 'default';
    get isPrimary(): boolean {
        return this._color === 'primary';
    }

    @Input() disabled: boolean = false;
    @Input() underline: boolean = false;

    /** @internal */
    @Input() startIconColor: string;
    /** @internal */
    @Input() startIconName: IconData;

    @Input() endIconColor: string;
    @Input() endIconName: IconData;

    /** @internal */
    @Input() externalIconColor: string;
    /** @internal */
    @Input() externalIconName: IconData;

    get isExternal(): boolean {
        return this.target === '_blank';
    }

    get externalIcon(): IconData {
        return this.externalIconName ?? 'ph/regular/arrow-square-out';
    }

    /** @internal */
    testIdsService: TestIdsService = inject(TestIdsService);
    /** @internal */
    testIdLinkModifiers: typeof LinkTestIdModifiers = LinkTestIdModifiers;
}
