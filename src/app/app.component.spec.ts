import { TestBed } from '@angular/core/testing';
import { SwUpdate } from '@angular/service-worker';
import { of } from 'rxjs';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MarkdownModule } from 'ngx-markdown';
import { SharedComponentsModule } from './shared/components/shared-components.module';
import { AppNavigationModule } from './navigation/app-navigation.module';
import { NgxFluentDesignInputModule, NgxFluentDesignNotificationModule } from 'ngx-fluent-design';
import { AppStatusModule } from './status/app-status.module';
import { WINDOW_PROVIDERS } from './shared/factories/window.factory';

describe('AppComponent', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                BrowserModule,
                AppRoutingModule,
                HttpClientModule,
                MarkdownModule.forRoot(),
                SharedComponentsModule,
                AppNavigationModule.forRoot({ moduleNavigationLinks: [] }),
                NgxFluentDesignNotificationModule,
                NgxFluentDesignInputModule,
                AppStatusModule
            ],
            declarations: [
                AppComponent
            ],
            providers: [
                WINDOW_PROVIDERS,
                { provide: SwUpdate, useValue: { isEnabled: false, available: of({}), activated: of({}) } }
            ]
        }).compileComponents();
    });

    it('should create the app', () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
    });
});
