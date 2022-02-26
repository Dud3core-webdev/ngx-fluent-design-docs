import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { InputsPageComponent } from './pages/inputs-page/inputs-page.component';
import { CallsToActionPageComponent } from './pages/calls-to-action-page/calls-to-action-page.component';
import { NotificationsPageComponent } from './pages/notifications-page/notifications-page.component';
import { ProgressPageComponent } from './pages/progress-page/progress-page.component';
import { ScssUtilitiesPageComponent } from './pages/scss-utilities/scss-utilities-page.component';
import { SurfacesPageComponent } from './pages/surfaces/surfaces-page.component';
import { IconsPageComponent } from './pages/icons/icons-page.component';
import { CanActivateDocsPagesGuard } from './shared/guards/can-activate-docs-pages.guard';
import { ErrorsPageComponent } from './pages/errors-page/errors-page.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'home/welcome',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomePageComponent,
        loadChildren: () => import('./pages/home-page/home-page.module').then((module) => module.HomePageModule),
        canActivate: [CanActivateDocsPagesGuard]
    },
    {
        path: 'inputs',
        component: InputsPageComponent,
        loadChildren: () => import('./pages/inputs-page/inputs-page.module').then((module) => module.InputsPageModule),
        canActivate: [CanActivateDocsPagesGuard]
    },
    {
        path: 'calls-to-action',
        component: CallsToActionPageComponent,
        loadChildren: () => import('./pages/calls-to-action-page/calls-to-action-page.module').then((module) => module.CallsToActionPageModule),
        canActivate: [CanActivateDocsPagesGuard]
    },
    {
        path: 'notifications',
        component: NotificationsPageComponent,
        loadChildren: () => import('./pages/notifications-page/notifications-page.module').then((module) => module.NotificationsPageModule),
        canActivate: [CanActivateDocsPagesGuard]
    },
    {
        path: 'progress',
        component: ProgressPageComponent,
        loadChildren: () => import('./pages/progress-page/progress-page.module').then((module) => module.ProgressPageModule),
        canActivate: [CanActivateDocsPagesGuard]
    },
    {
        path: 'scss-utilities',
        component: ScssUtilitiesPageComponent,
        loadChildren: () => import('./pages/scss-utilities/scss-utilities.page.module').then((module) => module.ScssUtilitiesPageModule),
        canActivate: [CanActivateDocsPagesGuard]
    },
    {
        path: 'surfaces',
        component: SurfacesPageComponent,
        loadChildren: () => import('./pages/surfaces/surfaces-page.module').then((module) => module.SurfacesPageModule),
        canActivate: [CanActivateDocsPagesGuard]
    },
    {
        path: 'icons',
        component: IconsPageComponent,
        loadChildren: () => import('./pages/icons/icons-page.module').then((module) => module.IconsPageModule),
        canActivate: [CanActivateDocsPagesGuard]
    },
    {
        path: 'errors',
        component: ErrorsPageComponent,
        loadChildren: () => import('./pages/errors-page/errors-page.module').then((module) => module.ErrorsPageModule)
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
