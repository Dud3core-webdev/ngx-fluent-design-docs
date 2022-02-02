import { Component, Input } from '@angular/core';
import { ApplicationNavigationLinks } from '../app-nav-links.interface';

@Component({
    selector: 'side-nav-mobile',
    templateUrl: './side-nav-mobile.component.html',
    styleUrls: ['./side-nav-mobile.component.scss']
})
export class SideNavMobileComponent {
    @Input() public readonly sideNavLinks: ApplicationNavigationLinks = [];
    @Input() public readonly isProdEnvironment: boolean = false;

    private _isNavMenuOpen: boolean = false;

    public get isNavMenuOpen(): boolean {
        return this._isNavMenuOpen;
    }

    public setIsNavMenuOpen(isNavMenuOpen: boolean) {
        this._isNavMenuOpen = isNavMenuOpen;
    }
}
