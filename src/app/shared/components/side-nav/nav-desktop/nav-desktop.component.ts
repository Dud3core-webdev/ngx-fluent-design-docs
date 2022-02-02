import { Component, Input } from '@angular/core';
import { ApplicationNavigationLinks } from '../app-nav-links.interface';

@Component({
    selector: 'nav-desktop',
    templateUrl: './nav-desktop.component.html',
    styleUrls: ['./nav-desktop.component.scss']
})
export class NavDesktopComponent {
    @Input() public readonly sideNavLinks: ApplicationNavigationLinks = [];
    @Input() public readonly isProdEnvironment: boolean = false;
}
