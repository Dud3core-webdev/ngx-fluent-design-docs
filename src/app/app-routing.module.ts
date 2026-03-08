import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanActivateDocsPagesGuard } from './shared/guards/can-activate-docs-pages.guard';


const routes: Routes = [
    {
        path: '',
        redirectTo: 'home/welcome',
        pathMatch: 'full'
    },
    {
        path: 'home',
        loadComponent: () => import('./pages/home-page/home-page.component').then(c => c.HomePageComponent),
        children: [
            {
                path: '',
                redirectTo: 'welcome',
                pathMatch: 'full'
            },
            {
                path: 'welcome',
                loadComponent: () => import('./pages/home-page/introduction-page/introduction-page.component').then(c => c.IntroductionPageComponent)
            },
            {
                path: 'generate-palette',
                loadComponent: () => import('./pages/home-page/palette-generation-page/palette-generation-page.component').then(c => c.PaletteGenerationPageComponent)
            }
        ],
        canActivate: [CanActivateDocsPagesGuard]
    },
    {
        path: 'inputs',
        loadChildren: () => import('./pages/inputs-page/inputs-page.routes').then(r => r.INPUTS_PAGE_ROUTES),
        canActivate: [CanActivateDocsPagesGuard]
    },
    {
        path: 'calls-to-action',
        loadChildren: () => import('./pages/calls-to-action-page/calls-to-action-page.routes').then(r => r.CALLS_TO_ACTION_PAGE_ROUTES),
        canActivate: [CanActivateDocsPagesGuard]
    },
    {
        path: 'commands',
        loadChildren: () => import('./pages/command/command-page.routes').then(r => r.COMMAND_PAGE_ROUTES),
        canActivate: [CanActivateDocsPagesGuard]
    },
    {
        path: 'notifications',
        loadChildren: () => import('./pages/notifications-page/notifications-page.routes').then(r => r.NOTIFICATIONS_PAGE_ROUTES),
        canActivate: [CanActivateDocsPagesGuard]
    },
    {
        path: 'progress',
        loadChildren: () => import('./pages/progress-page/progress-page.routes').then(r => r.PROGRESS_PAGE_ROUTES),
        canActivate: [CanActivateDocsPagesGuard]
    },
    {
        path: 'scss-utilities',
        loadChildren: () => import('./pages/scss-utilities/scss-utilities-page.routes').then(r => r.SCSS_UTILITIES_PAGE_ROUTES),
        canActivate: [CanActivateDocsPagesGuard]
    },
    {
        path: 'surfaces',
        loadChildren: () => import('./pages/surfaces/surfaces-page.routes').then(r => r.SURFACES_PAGE_ROUTES),
        canActivate: [CanActivateDocsPagesGuard]
    },
    {
        path: 'icons',
        loadChildren: () => import('./pages/icons/icons-page.routes').then(r => r.ICONS_PAGE_ROUTES),
        canActivate: [CanActivateDocsPagesGuard]
    },
    {
        path: 'errors',
        loadChildren: () => import('./pages/errors-page/errors-page.routes').then(r => r.ERRORS_PAGE_ROUTES)
    },
    {
        path: '**',
        redirectTo: '/errors/not-found'
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
