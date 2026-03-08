import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MarkdownModule } from 'ngx-markdown';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { WINDOW_PROVIDERS } from './shared/factories/window.factory';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppOnlineService } from './status/services/app-online.service';
import { AppUpdateService } from './status/services/app-update.service';
import { AppNavigationModule } from './navigation/app-navigation.module';

import { applicationNavigationLinks } from './shared/navigation/app-nav-links.class';

@NgModule({
    declarations: [],
    imports: [
        HttpClientModule,
        MarkdownModule.forRoot(),
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        AppNavigationModule.forRoot({ moduleNavigationLinks: applicationNavigationLinks }),
        AppComponent,
        ServiceWorkerModule.register('ngsw-worker.js', {
            enabled: environment.production,
            registrationStrategy: 'registerWhenStable:30000'
        })
    ],
    providers: [
        WINDOW_PROVIDERS,
        AppOnlineService,
        AppUpdateService
    ]
})
export class AppModule {
}
