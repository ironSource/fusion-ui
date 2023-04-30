import {ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MenuItem} from '@ironsource/fusion-ui/components/menu/common/base';
import {HeaderContent, LayoutConfiguration} from '../layout.entities';
import {LayoutComponent} from '../layout.component';
import {Subject} from 'rxjs';
import {FormControl} from '@angular/forms';
import {takeUntil} from 'rxjs/operators';

@Component({
    selector: 'fusion-layout-story-wrapper',
    standalone: true,
    imports: [CommonModule, LayoutComponent],
    template: `
        <fusion-layout
            [configuration]="layoutConfiguration"
            [headerContent]="headerContent"
            (menuItemClick)="onMenuItemClick($event)"
            (pageBackButtonClicked)="onPageBackButtonClicked($event)"
        >
            <div class="parent">
                <div class="div1">1</div>
                <div class="div2">2</div>
                <div class="div3">3</div>
                <div class="div4">4</div>
                <div class="div5">5</div>
                <div class="div6">6</div>
                <div class="div7">7</div>
                <div class="div8">8</div>
                <div class="div9">9</div>
                <div class="div10">10</div>
            </div>
        </fusion-layout>
    `,
    styles: [
        '.parent {padding: 24px; width: 100%; height: 100%; display: grid; grid-template-columns: repeat(4, 1fr); grid-template-rows: repeat(4, 1fr); grid-column-gap: 16px; grid-row-gap: 24px;}',
        '.div1 { grid-area: 1 / 1 / 2 / 2; }',
        '.div2 { grid-area: 1 / 2 / 2 / 3; }',
        '.div3 { grid-area: 1 / 3 / 2 / 4; }',
        '.div4 { grid-area: 1 / 4 / 2 / 5; }',
        '.div5 { grid-area: 2 / 1 / 4 / 3; }',
        '.div6 { grid-area: 2 / 3 / 4 / 5; }',
        '.div7 { grid-area: 4 / 1 / 5 / 2; }',
        '.div8 { grid-area: 4 / 2 / 5 / 3; }',
        '.div9 { grid-area: 4 / 3 / 5 / 4; }',
        '.div10 { grid-area: 4 / 4 / 5 / 5; }',
        '.parent div{background: #F7F7F7; border: 1px solid rgba(0, 0, 0, 0.08); border-radius: 4px; display: flex; align-items: center; justify-content: center}'
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayoutStoryWrapperComponent implements OnInit, OnDestroy {
    @Input() layoutConfiguration: LayoutConfiguration;
    @Input() headerContent: HeaderContent;

    private onDestroy$ = new Subject<void>();

    ngOnInit() {
        if (!!this.headerContent?.actionData?.formControl) {
            (this.headerContent.actionData.formControl as FormControl).valueChanges.pipe(takeUntil(this.onDestroy$)).subscribe(value => {
                console.log('Header Dynamic Component value changed: ', value);
            });
        }
    }

    ngOnDestroy() {
        this.onDestroy$.next();
        this.onDestroy$.complete();
    }

    onPageBackButtonClicked($event) {
        console.log('Page Back button clicked');
    }

    onMenuItemClick(menuItem: MenuItem) {
        console.log('MnuItem Clicked: ', menuItem);
        this.headerContent = {...this.headerContent, title: menuItem.name};
    }
}
