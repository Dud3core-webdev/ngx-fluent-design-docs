import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxFluentDesignSurfaceModule } from 'ngx-fluent-design';
import { ErrorsPageComponent } from './errors-page.component';
import { RouterModule, Routes } from '@angular/router';
import { DocsDownForMaintainanceErrorPageComponent } from './docs-down-for-maintainance-error-page/docs-down-for-maintainance-error-page.component';

const DECLARATIONS = [
    ErrorsPageComponent,
    DocsDownForMaintainanceErrorPageComponent
];

const ROUTES: Routes = [
    {
        path: 'down-for-maintenance',
        component: DocsDownForMaintainanceErrorPageComponent
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
