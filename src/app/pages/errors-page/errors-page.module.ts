import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxFluentDesignSurfaceModule } from 'ngx-fluent-design';
import { ErrorsPageComponent } from './errors-page.component';
import { RouterModule, Routes } from '@angular/router';
import { DocsDownForMaintainanceErrorPageComponent } from './docs-down-for-maintainance-error-page/docs-down-for-maintainance-error-page.component';
import { PageNotFoundPageComponent } from './page-not-found-page/page-not-found-page.component';

const DECLARATIONS = [
    ErrorsPageComponent,
    DocsDownForMaintainanceErrorPageComponent,
    PageNotFoundPageComponent
];

const ROUTES: Routes = [
    {
        path: 'down-for-maintenance',
        component: DocsDownForMaintainanceErrorPageComponent
    },
    {
        path: 'not-found',
        component: PageNotFoundPageComponent
    }
];

@NgModule({
    imports: [
        CommonModule,
        NgxFluentDesignSurfaceModule,
        RouterModule.forChild(ROUTES)
    ],
    declarations: [...DECLARATIONS]
})
export class ErrorsPageModule {
}
