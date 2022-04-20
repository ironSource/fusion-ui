import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WrapperComponent} from './wrapper.component';
import {ReactiveFormsModule} from '@angular/forms';
import {WrapperService} from './wrapper.service';
import {SVG_OPTIONS_TOKEN} from '@ironsource/fusion-ui/components/svg';

@NgModule({
    declarations: [WrapperComponent],
    exports: [WrapperComponent],
    imports: [CommonModule, ReactiveFormsModule],
    providers: [
        WrapperService,
        {
            provide: SVG_OPTIONS_TOKEN,
            useValue: {assetsPath: 'https://fusion.ironsrc.net/assets'}
        }
    ]
})
export class WrapperModule {}
