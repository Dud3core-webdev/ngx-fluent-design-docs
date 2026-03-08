import { Routes } from '@angular/router';
import { IconsPageComponent } from './icons-page.component';
import { IconUsagePageComponent } from './pages/icon-usage/icon-usage-page.component';
import { IconCreationPageComponent } from './pages/icon-creation/icon-creation-page.component';

export const ICONS_PAGE_ROUTES: Routes = [
    {
        path: '',
        component: IconsPageComponent,
        children: [
            {
                path: 'usage',
                component: IconUsagePageComponent
            },
            {
                path: 'custom',
                component: IconCreationPageComponent
            }
        ]
    }
];
