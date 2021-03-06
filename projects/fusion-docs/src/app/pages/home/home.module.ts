import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home.component';
import {Routes, RouterModule} from '@angular/router';
import {ButtonModule} from '@ironsource/fusion-ui/components/button/v1';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    }
];

@NgModule({
    declarations: [HomeComponent],
    imports: [CommonModule, RouterModule.forChild(routes), ButtonModule, IconModule]
})
export class HomeModule {}
