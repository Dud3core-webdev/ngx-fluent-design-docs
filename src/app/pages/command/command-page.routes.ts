import { Routes } from '@angular/router';
import { CommandPageComponent } from './command-page.component';
import { PivotPageComponent } from './pages/pivot/pivot-page.component';

export const COMMAND_PAGE_ROUTES: Routes = [
    {
        path: '',
        component: CommandPageComponent,
        children: [
            {
                path: 'pivot',
                component: PivotPageComponent
            }
        ]
    }
];
