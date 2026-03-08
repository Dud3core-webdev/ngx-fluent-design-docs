import { Routes } from '@angular/router';
import { CallsToActionPageComponent } from './calls-to-action-page.component';
import { CompoundCtaPageComponent } from './pages/compound-cta/compound-cta.page.component';
import { StandardCtaPageComponent } from './pages/standard-cta/standard-cta-page.component';
import { LinkButtonPageComponent } from './pages/link-button/link-button-page.component';
import { ActionButtonPageComponent } from './pages/action-button/action-button-page.component';

export const CALLS_TO_ACTION_PAGE_ROUTES: Routes = [
    {
        path: '',
        component: CallsToActionPageComponent,
        children: [
            {
                path: 'compound',
                component: CompoundCtaPageComponent
            },
            {
                path: 'standard',
                component: StandardCtaPageComponent
            },
            {
                path: 'link',
                component: LinkButtonPageComponent
            },
            {
                path: 'action',
                component: ActionButtonPageComponent
            }
        ]
    }
];
