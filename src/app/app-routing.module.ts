import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { InputsPageComponent } from './pages/inputs-page/inputs-page.component';
import { CallsToActionPageComponent } from './pages/calls-to-action-page/calls-to-action-page.component';
import { NotificationsPageComponent } from './pages/notifications-page/notifications-page.component';
import { ProgressPageComponent } from './pages/progress-page/progress-page.component';
import { ScssUtilitiesPageComponent } from './pages/scss-utilities/scss-utilities-page.component';
import { CommonPageComponent } from './pages/common/common-page.component';
import { AlertsPageComponent } from './pages/alerts/alerts-page.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomePageComponent
    },
    {
        path: 'inputs',
        component: InputsPageComponent,
        loadChildren: () => import('./pages/inputs-page/inputs-page.module').then((module) => module.InputsPageModule)
    },
    {
        path: 'calls-to-action',
        component: CallsToActionPageComponent,
        loadChildren: () => import('./pages/calls-to-action-page/calls-to-action-page.module').then((module) => module.CallsToActionPageModule)
    },
    {
        path: 'notifications',
        component: NotificationsPageComponent,
        loadChildren: () => import('./pages/notifications-page/notifications-page.module').then((module) => module.NotificationsPageModule)
    },
    {
        path: 'alerts',
        component: AlertsPageComponent,
        loadChildren: () => import('./pages/alerts/alerts-page.module').then((module) => module.AlertsPageModule)
    },
    {
        path: 'progress',
        component: ProgressPageComponent,
        loadChildren: () => import('./pages/progress-page/progress-page.module').then((module) => module.ProgressPageModule)
    },
    {
        path: 'scss-utilities',
        component: ScssUtilitiesPageComponent,
        loadChildren: () => import('./pages/scss-utilities/scss-utilities.page.module').then((module) => module.ScssUtilitiesPageModule)
    },
    {
        path: 'common',
        component: CommonPageComponent,
        loadChildren: () => import('./pages/common/common-page.module').then((module) => module.CommonPageModule)
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
