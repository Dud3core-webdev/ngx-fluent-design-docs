import { Routes } from '@angular/router';
import { ErrorsPageComponent } from './errors-page.component';
import { DocsDownForMaintainanceErrorPageComponent } from './docs-down-for-maintainance-error-page/docs-down-for-maintainance-error-page.component';
import { PageNotFoundPageComponent } from './page-not-found-page/page-not-found-page.component';

export const ERRORS_PAGE_ROUTES: Routes = [
    {
        path: '',
        component: ErrorsPageComponent,
        children: [
            {
                path: 'down-for-maintenance',
                component: DocsDownForMaintainanceErrorPageComponent
            },
            {
                path: 'not-found',
                component: PageNotFoundPageComponent
            }
        ]
    }
];
