import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomePageModule } from './pages/home-page/home-page.module';
import { MarkdownModule } from 'ngx-markdown';
import { HttpClientModule } from '@angular/common/http';
import { InputsPageModule } from './pages/inputs-page/inputs-page.module';
import { SharedComponentsModule } from './shared/components/shared-components.module';
import { CallsToActionPageModule } from './pages/calls-to-action-page/calls-to-action-page.module';
import { WINDOW_PROVIDERS } from './shared/factories/window.factory';
import { NotificationsPageModule } from './pages/notifications-page/notifications-page.module';
import { NgxFluentDesignInputModule, NgxFluentDesignNotificationModule } from 'ngx-fluent-design';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { ProgressPageModule } from './pages/progress-page/progress-page.module';
import { ScssUtilitiesPageModule } from './pages/scss-utilities/scss-utilities.page.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppNavigationModule } from './navigation/app-navigation.module';
import { AppStatusModule } from './status/app-status.module';
import { applicationNavigationLinks } from './shared/navigation/app-nav-links.class';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        HttpClientModule,
        MarkdownModule.forRoot(),
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        HomePageModule,
        InputsPageModule,
        CallsToActionPageModule,
        NotificationsPageModule,
        SharedComponentsModule,
        AppNavigationModule.forRoot({ moduleNavigationLinks: applicationNavigationLinks }),
        ProgressPageModule,
        ScssUtilitiesPageModule,
        NgxFluentDesignNotificationModule,
        AppStatusModule,
        ServiceWorkerModule.register('ngsw-worker.js', {
            enabled: environment.production,
            registrationStrategy: 'registerWhenStable:30000'
        }),
        NgxFluentDesignInputModule
    ],
    providers: [WINDOW_PROVIDERS],
    bootstrap: [AppComponent]
})
export class AppModule {
}
