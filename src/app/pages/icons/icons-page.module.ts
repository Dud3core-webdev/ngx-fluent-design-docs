import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IconsPageComponent } from './icons-page.component';
import { CommonModule } from '@angular/common';
import { NgxFluentDesignSurfaceModule, NgxFluentDesignIconModule, NgxFluentDesignNotificationModule } from 'ngx-fluent-design';
import { IconUsagePageComponent } from './pages/icon-usage/icon-usage-page.component';
import { SharedComponentsModule } from '../../shared/components/shared-components.module';
import { IconCreationPageComponent } from './pages/icon-creation/icon-creation-page.component';

const ROUTES: Routes = [
    {
        path: 'usage',
        component: IconUsagePageComponent
    },
    {
        path: 'custom',
        component: IconCreationPageComponent
    }
];

const DECLARATIONS: Array<any> = [
    IconsPageComponent,
    IconUsagePageComponent,
    IconCreationPageComponent
];

@NgModule({
    imports: [
        RouterModule.forChild(ROUTES),
        CommonModule,
        NgxFluentDesignSurfaceModule,
        NgxFluentDesignIconModule,
        SharedComponentsModule,
        NgxFluentDesignNotificationModule
    ],
    declarations: [...DECLARATIONS]
})
export class IconsPageModule {
}
