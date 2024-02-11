import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MenuItem} from '@ironsource/fusion-ui/components/menu/common/base';
import {HeaderContent, LayoutConfiguration, TeleportWrapperElement} from '../layout.entities';
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
            [teleportElements]="teleportElements"
            (menuItemClick)="onMenuItemClick($event)"
            (menuItemSelectedByRoute)="onMenuItemSelectedByRoute($event)"
            (pageBackButtonClicked)="onPageBackButtonClicked($event)"
        >
            <div class="parent" [class.layout1]="isLayout1" [class.fu-header-multiline]="headerContent?.multiline">
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
        '.parent.layout1 .div1 { grid-area: 1 / 1 / 2 / 2; }',
        '.parent.layout1 .div2 { grid-area: 2 / 1 / 3 / 2; }',
        '.parent.layout1 .div3 { grid-area: 3 / 1 / 4 / 2; }',
        '.parent.layout1 .div4 { grid-area: 4 / 1 / 5 / 2; }',
        '.parent.layout1 .div5 { grid-area: 1 / 4 / 2 / 5; }',
        '.parent.layout1 .div6 { grid-area: 2 / 4 / 3 / 5; }',
        '.parent.layout1 .div7 { grid-area: 3 / 4 / 4 / 5; }',
        '.parent.layout1 .div8 { grid-area: 4 / 4 / 5 / 5; }',
        '.parent.layout1 .div9 { grid-area: 1 / 2 / 3 / 4; }',
        '.parent.layout1 .div10 { grid-area: 3 / 2 / 5 / 4; }',
        '.parent div{color: #a7a7a7; background: #F7F7F7; border: 1px solid rgba(0, 0, 0, 0.08); border-radius: 4px; display: flex; align-items: center; justify-content: center}',
        '.parent.fu-header-multiline {padding-top: 8px;}'
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayoutStoryWrapperComponent implements OnInit, OnDestroy {
    @Input() layoutConfiguration: LayoutConfiguration;
    @Input() headerContent: HeaderContent;
    @Input() teleportElements: TeleportWrapperElement[];

    // used just for update style in layout's inner content
    isLayout1 = false;

    private onDestroy$ = new Subject<void>();

    constructor(private changeDetectorRef: ChangeDetectorRef) {}

    ngOnInit() {
        if (!!this.headerContent?.actionData?.formControl) {
            (this.headerContent.actionData.formControl as FormControl).valueChanges.pipe(takeUntil(this.onDestroy$)).subscribe(value => {
                console.log('Header Dynamic Component value changed: ', value);
            });
        }

        if (!!this.headerContent?.hasBackButton) {
            this.headerContent.hasBackButton = this.testMethod.bind(this);
        }

        // const temp = this.layoutConfiguration.navigationMenuItems
        // this.layoutConfiguration.navigationMenuItems = [];

        // setTimeout(() => {
        //     this.layoutConfiguration.navigationMenuItems = temp;
        //     this.layoutConfiguration = {...this.layoutConfiguration};
        //     console.log('changes UP')
        //     this.changeDetectorRef.detectChanges();
        // }, 2000);
    }

    ngOnDestroy() {
        this.onDestroy$.next();
        this.onDestroy$.complete();
    }

    testMethod() {
        console.log('Back To custom method');
    }

    onPageBackButtonClicked(BackButtonData) {
        if (typeof BackButtonData === 'string') {
            console.log('Page Back button clicked, Navigate to', BackButtonData);
        } else if (typeof BackButtonData === 'function') {
            console.log('Page Back button clicked, Use custom method');
            BackButtonData();
        } else {
            console.log('Page Back button clicked', BackButtonData);
        }
    }

    onMenuItemClick(menuItem: MenuItem) {
        console.log('MnuItem Clicked: ', menuItem);
        this.headerContent = {...this.headerContent, title: menuItem.name};
        this.isLayout1 = !this.isLayout1;
    }

    onMenuItemSelectedByRoute(menuItem: MenuItem) {
        console.log('MnuItem Selected By Route: ', menuItem);
        this.headerContent = {...this.headerContent, title: menuItem.name};
    }
}
