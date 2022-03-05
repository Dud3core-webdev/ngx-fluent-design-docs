import { NgModule } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';
import { NgxFluentDesignSurfaceModule, NgxFluentDesignCtaModule, NgxFluentDesignNotificationModule } from 'ngx-fluent-design';
import { CommonModule } from '@angular/common';
import { SharedComponentsModule } from '../../shared/components/shared-components.module';
import { RouterModule, Routes } from '@angular/router';
import { SurfacesPageComponent } from './surfaces-page.component';
import { CardPageComponent } from './card/card-page.component';
import { DialogPageComponent } from './dialog/dialog-page.component';
import { PanelPageComponent } from './panel/panel-page.component';

const ROUTES: Routes = [
    {
        path: 'card',
        component: CardPageComponent
    },
    {
        path: 'dialog',
        component: DialogPageComponent
    },
    {
        path: 'panel',
        component: PanelPageComponent
    }
];

const DECLARATIONS: Array<any> = [
    SurfacesPageComponent,
    CardPageComponent,
    DialogPageComponent,
    PanelPageComponent
];

@NgModule({
    imports: [
        MarkdownModule.forChild(),
        CommonModule,
        SharedComponentsModule,
        RouterModule.forChild(ROUTES),
        NgxFluentDesignSurfaceModule,
        NgxFluentDesignCtaModule,
        NgxFluentDesignNotificationModule,
    ],
    declarations: [...DECLARATIONS],
})
export class SurfacesPageModule {
}
