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
import { NgxFluentDesignNotificationModule } from 'ngx-fluent-design';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { ProgressPageModule } from './pages/progress-page/progress-page.module';
import { ScssUtilitiesPageModule } from './scss-utilities/scss-utilities.page.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        HttpClientModule,
        MarkdownModule.forRoot(),
        BrowserModule,
        AppRoutingModule,
        HomePageModule,
        InputsPageModule,
        CallsToActionPageModule,
        NotificationsPageModule,
        SharedComponentsModule,
        ProgressPageModule,
        ScssUtilitiesPageModule,
        NgxFluentDesignNotificationModule,
        ServiceWorkerModule.register('ngsw-worker.js', {
            enabled: environment.production,
            // Register the ServiceWorker as soon as the app is stable
            // or after 30 seconds (whichever comes first).
            registrationStrategy: 'registerWhenStable:30000'
        })
    ],
    providers: [WINDOW_PROVIDERS],
    bootstrap: [AppComponent]
})
export class AppModule {
}
