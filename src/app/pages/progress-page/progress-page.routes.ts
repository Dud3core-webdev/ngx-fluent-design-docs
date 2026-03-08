import { Routes } from '@angular/router';
import { ProgressPageComponent } from './progress-page.component';
import { ProgressIndicatorPageComponent } from './pages/progress-indicator-page/progress-indicator-page.component';
import { SpinnerPageComponent } from './pages/spinner-page/spinner-page.component';
import { ProgressIndicatorIndeterminatePageComponent } from './pages/progress-indicator-indeterminate-page/progress-indicator-indeterminate-page.component';

export const PROGRESS_PAGE_ROUTES: Routes = [
    {
        path: '',
        component: ProgressPageComponent,
        children: [
            {
                path: 'progress-indicator',
                component: ProgressIndicatorPageComponent
            },
            {
                path: 'progress-indicator-indeterminate',
                component: ProgressIndicatorIndeterminatePageComponent
            },
            {
                path: 'spinner',
                component: SpinnerPageComponent
            }
        ]
    }
];
