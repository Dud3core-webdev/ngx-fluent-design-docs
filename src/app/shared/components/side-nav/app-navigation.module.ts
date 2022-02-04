import { NgModule } from '@angular/core';
import { NgxFluentDesignCommonComponentsModule, NgxFluentDesignCtaModule } from 'ngx-fluent-design';
import { AppNavigationComponent } from './app-navigation.component';
import { NavDesktopComponent } from './nav-desktop/nav-desktop.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SideNavMobileComponent } from './side-nav-mobile/side-nav-mobile.component';

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
        NgxFluentDesignCommonComponentsModule
    ],
    declarations: [...DECLARATIONS],
    exports: [...DECLARATIONS]
})
export class AppNavigationModule {}
