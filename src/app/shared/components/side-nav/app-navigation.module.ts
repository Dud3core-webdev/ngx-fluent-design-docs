import { NgModule } from '@angular/core';
import { AppNavigationComponent } from './app-navigation.component';
import { NavDesktopComponent } from './nav-desktop/nav-desktop.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SideNavMobileComponent } from './side-nav-mobile/side-nav-mobile.component';
import { NgxFluentDesignCommonComponentsModule, NgxFluentDesignCtaModule, NgxFluentDesignIconModule } from 'ngx-fluent-design';

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
        NgxFluentDesignCommonComponentsModule,
        NgxFluentDesignIconModule
    ],
    declarations: [...DECLARATIONS],
    exports: [...DECLARATIONS]
})
export class AppNavigationModule {}
