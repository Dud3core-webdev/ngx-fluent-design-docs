import { Component, Input } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ApplicationNavigationLinks } from './app-nav-links.interface';
import * as PackageJson from 'package.json';

@Component({
    selector: 'app-navigation',
    templateUrl: './app-navigation.component.html',
    styleUrls: ['./app-navigation.component.scss']
})
export class AppNavigationComponent {
    public readonly environment = environment;
    public readonly currentPackageVersion: string;
    @Input() public navigationLinks: ApplicationNavigationLinks = [];

    constructor() {
        this.currentPackageVersion = PackageJson.dependencies['ngx-fluent-design'];
    }
}
