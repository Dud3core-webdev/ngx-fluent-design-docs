import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { NavigationConfigClass } from './config/navigation-config.class';
import { ApplicationNavigationLinks } from './types/application-navigation-links.type';
import PackageJson from '../../../package.json';
import { NavDesktopComponent } from './nav-desktop/nav-desktop.component';
import { SideNavMobileComponent } from './side-nav-mobile/side-nav-mobile.component';

@Component({
    selector: 'app-navigation',
    templateUrl: './app-navigation.component.html',
    styleUrls: ['./app-navigation.component.scss'],
    imports: [NavDesktopComponent, SideNavMobileComponent]
})
export class AppNavigationComponent {
    public readonly environment = environment;
    public readonly currentPackageVersion: string = '';
    public readonly navigationLinks: ApplicationNavigationLinks;

    constructor(appNavigationConfig: NavigationConfigClass) {
        this.navigationLinks = appNavigationConfig.moduleNavigationLinks;
        this.currentPackageVersion = PackageJson.dependencies['ngx-fluent-design'];
    }
}
