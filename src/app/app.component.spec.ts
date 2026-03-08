import { TestBed } from '@angular/core/testing';
import { SwUpdate } from '@angular/service-worker';
import { of } from 'rxjs';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MarkdownModule } from 'ngx-markdown';
import { AppNavigationModule } from './navigation/app-navigation.module';
import { NgxFluentDesignFormFieldComponent, NgxFluentDesignTextareaComponent, NgxFluentDesignFormFieldUnderlinedComponent, NgxFluentDesignTextareaUnderlinedComponent, NgxFluentDesignTextFieldBorderlessComponent, NgxFluentDesignTextareaBorderlessComponent, NgxFluentDesignToggleComponent, NgxFluentDesignCheckboxComponent, NgxFluentDesignSelectComponent, NgxFluentDesignRadioComponent, NgxFluentDesignInputClassValidatorDirective, NgxFluentDesignMessageBarComponent, NgxFluentDesignCardComponent } from 'ngx-fluent-design';
import { AppOnlineService } from './status/services/app-online.service';
import { AppUpdateService } from './status/services/app-update.service';
import { WINDOW_PROVIDERS } from './shared/factories/window.factory';
import { applicationNavigationLinks } from './shared/navigation/app-nav-links.class';


describe('AppComponent', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                BrowserModule,
                AppRoutingModule,
                HttpClientModule,
                MarkdownModule.forRoot(),
                AppNavigationModule.forRoot({ moduleNavigationLinks: applicationNavigationLinks }),
                NgxFluentDesignMessageBarComponent,
                NgxFluentDesignFormFieldComponent, NgxFluentDesignTextareaComponent, NgxFluentDesignFormFieldUnderlinedComponent, NgxFluentDesignTextareaUnderlinedComponent, NgxFluentDesignTextFieldBorderlessComponent, NgxFluentDesignTextareaBorderlessComponent, NgxFluentDesignToggleComponent, NgxFluentDesignCheckboxComponent, NgxFluentDesignSelectComponent, NgxFluentDesignRadioComponent, NgxFluentDesignInputClassValidatorDirective,
                AppComponent
            ],
            providers: [
                WINDOW_PROVIDERS,
                AppOnlineService,
                AppUpdateService,
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
