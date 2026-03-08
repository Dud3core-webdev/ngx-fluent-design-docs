import { Routes } from '@angular/router';
import { ScssUtilitiesPageComponent } from './scss-utilities-page.component';
import { TypographyPageComponent } from './typography/typography-page.component';

export const SCSS_UTILITIES_PAGE_ROUTES: Routes = [
    {
        path: '',
        component: ScssUtilitiesPageComponent,
        children: [
            {
                path: 'typography',
                component: TypographyPageComponent
            }
        ]
    }
];
