import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IconsPageComponent } from './icons-page.component';
import { CommonModule } from '@angular/common';
import { NgxFluentDesignCommonComponentsModule, NgxFluentDesignIconModule, NgxFluentDesignNotificationModule } from 'ngx-fluent-design';
import { IconUsagePageComponent } from './pages/icon-usage/icon-usage-page.component';
import { SharedComponentsModule } from '../../shared/components/shared-components.module';

const ROUTES: Routes = [
    {
        path: 'usage',
        component: IconUsagePageComponent
    }
];

const DECLARATIONS: Array<any> = [
    IconsPageComponent,
    IconUsagePageComponent
];

@NgModule({
    imports: [
        RouterModule.forChild(ROUTES),
        CommonModule,
        NgxFluentDesignCommonComponentsModule,
        NgxFluentDesignIconModule,
        SharedComponentsModule,
        NgxFluentDesignNotificationModule
    ],
    declarations: [...DECLARATIONS]
})
export class IconsPageModule {
}
