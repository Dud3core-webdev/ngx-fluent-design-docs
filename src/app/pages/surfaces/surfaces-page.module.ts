import { NgModule } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';
import { NgxFluentDesignAlertModule, NgxFluentDesignSurfaceModule, NgxFluentDesignCtaModule } from 'ngx-fluent-design';
import { CommonModule } from '@angular/common';
import { SharedComponentsModule } from '../../shared/components/shared-components.module';
import { RouterModule, Routes } from '@angular/router';
import { SurfacesPageComponent } from './surfaces-page.component';
import { CardPageComponent } from './card/card-page.component';
import { SheetPageComponent } from './sheet/sheet-page.component';

const ROUTES: Routes = [
    {
        path: 'card',
        component: CardPageComponent
    },
    {
        path: 'sheet',
        component: SheetPageComponent
    }
];

const DECLARATIONS: Array<any> = [
    SurfacesPageComponent,
    CardPageComponent,
    SheetPageComponent
];

@NgModule({
    imports: [
        MarkdownModule.forChild(),
        CommonModule,
        SharedComponentsModule,
        RouterModule.forChild(ROUTES),
        NgxFluentDesignSurfaceModule,
        NgxFluentDesignCtaModule,
        NgxFluentDesignAlertModule
    ],
    declarations: [...DECLARATIONS],
})
export class SurfacesPageModule {
}
