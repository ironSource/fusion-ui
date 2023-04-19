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
        ></fusion-layout>
    `,
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
