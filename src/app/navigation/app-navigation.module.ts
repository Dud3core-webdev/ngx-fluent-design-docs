import { ModuleWithProviders, NgModule } from '@angular/core';
import { AppNavigationComponent } from './app-navigation.component';
import { NavDesktopComponent } from './nav-desktop/nav-desktop.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SideNavMobileComponent } from './side-nav-mobile/side-nav-mobile.component';
import { NgxFluentDesignDialogComponent, NgxFluentDesignSheetComponent, NgxFluentDesignPanelComponent, NgxFluentDesignModalComponent, NgxFluentDesignButtonComponent, NgxFluentDesignCompoundButtonComponent, NgxFluentDesignButtonLinkDirective, NgxFluentDesignActionButtonDirective, NgxFluentDesignIconComponent, NgxFluentDesignFormFieldComponent, NgxFluentDesignTextareaComponent, NgxFluentDesignFormFieldUnderlinedComponent, NgxFluentDesignTextareaUnderlinedComponent, NgxFluentDesignTextFieldBorderlessComponent, NgxFluentDesignTextareaBorderlessComponent, NgxFluentDesignToggleComponent, NgxFluentDesignCheckboxComponent, NgxFluentDesignSelectComponent, NgxFluentDesignRadioComponent, NgxFluentDesignInputClassValidatorDirective, NgxFluentDesignCardComponent, NgxFluentDesignMessageBarComponent } from 'ngx-fluent-design';
import { ThemeModule } from '../theme/theme.module';
import { ThemeConfigFactory } from '../shared/theme/factories/theme-config.factory';
import { NavigationConfigClass } from './config/navigation-config.class';

const DECLARATIONS: Array<any> = [
    AppNavigationComponent,
    NavDesktopComponent,
    SideNavMobileComponent
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        NgxFluentDesignButtonComponent, NgxFluentDesignCompoundButtonComponent, NgxFluentDesignButtonLinkDirective, NgxFluentDesignActionButtonDirective,
        NgxFluentDesignDialogComponent, NgxFluentDesignSheetComponent, NgxFluentDesignPanelComponent, NgxFluentDesignModalComponent,
        NgxFluentDesignIconComponent,
        NgxFluentDesignFormFieldComponent, NgxFluentDesignTextareaComponent, NgxFluentDesignFormFieldUnderlinedComponent, NgxFluentDesignTextareaUnderlinedComponent, NgxFluentDesignTextFieldBorderlessComponent, NgxFluentDesignTextareaBorderlessComponent, NgxFluentDesignToggleComponent, NgxFluentDesignCheckboxComponent, NgxFluentDesignSelectComponent, NgxFluentDesignRadioComponent, NgxFluentDesignInputClassValidatorDirective,
        ThemeModule.forRoot(ThemeConfigFactory.for()),
        NgxFluentDesignCardComponent, NgxFluentDesignMessageBarComponent,
        ...DECLARATIONS
    ],
    exports: [...DECLARATIONS]
})
export class AppNavigationModule {
    public static forRoot(config: NavigationConfigClass): ModuleWithProviders<AppNavigationModule> {
        if (!config) {
            throw new Error('No navigation config provided.');
        }

        return ({
            ngModule: AppNavigationModule,
            providers: [
                {
                    provide: NavigationConfigClass,
                    useFactory: () => config
                }
            ]
        });
    }
}
