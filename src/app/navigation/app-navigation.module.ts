import { ModuleWithProviders, NgModule } from '@angular/core';
import { AppNavigationComponent } from './app-navigation.component';
import { NavDesktopComponent } from './nav-desktop/nav-desktop.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SideNavMobileComponent } from './side-nav-mobile/side-nav-mobile.component';
import {
    NgxFluentDesignSurfaceModule,
    NgxFluentDesignCtaModule,
    NgxFluentDesignIconModule,
    NgxFluentDesignInputModule
} from 'ngx-fluent-design';
import { ThemeModule } from '../theme/theme.module';
import { ThemeConfigFactory } from '../shared/application-themes-constants/factories/theme-config.factory';
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
        NgxFluentDesignCtaModule,
        NgxFluentDesignSurfaceModule,
        NgxFluentDesignIconModule,
        NgxFluentDesignInputModule,
        ThemeModule.forRoot(ThemeConfigFactory.for())
    ],
    declarations: [...DECLARATIONS],
    exports: [...DECLARATIONS]
})
export class AppNavigationModule {
    public static forRoot(config: NavigationConfigClass): ModuleWithProviders<AppNavigationModule> {
        if (!config) {
            throw new Error('Woahhhh nelly');
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
