import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxFluentDesignAlertModule, NgxFluentDesignCommonComponentsModule, NgxFluentDesignCtaModule } from 'ngx-fluent-design';
import { SharedComponentsModule } from '../../shared/components/shared-components.module';
import { RouterModule, Routes } from '@angular/router';
import { DialogPageComponent } from './dialog/dialog-page.component';
import { AlertsPageComponent } from './alerts-page.component';

const ROUTES: Routes = [
    {
        path: 'dialog',
        component: DialogPageComponent
    }
];

const DECLARATIONS: Array<any> = [
    DialogPageComponent,
    AlertsPageComponent
];

@NgModule({
    imports: [
        CommonModule,
        NgxFluentDesignCommonComponentsModule,
        SharedComponentsModule,
        RouterModule.forChild(ROUTES),
        NgxFluentDesignAlertModule,
        NgxFluentDesignCtaModule
    ],
    declarations: [...DECLARATIONS],
    exports: [...DECLARATIONS]
})
export class AlertsPageModule {
}
