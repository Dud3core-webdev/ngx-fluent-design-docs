import { NgModule } from '@angular/core';
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
import { ThemeModule } from '../theme-module/theme.module';

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
        ThemeModule
    ],
    declarations: [...DECLARATIONS],
    exports: [...DECLARATIONS]
})
export class AppNavigationModule {}
