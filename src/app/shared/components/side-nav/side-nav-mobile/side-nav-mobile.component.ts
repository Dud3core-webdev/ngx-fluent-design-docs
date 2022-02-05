import { Component, Input, OnInit } from '@angular/core';
import { ApplicationNavigationLinks } from '../app-nav-links.interface';
import { Event, NavigationEnd, Router } from '@angular/router';
import { INgxFluentDesignIcon, NgxFluentDesignIconClearClose } from 'ngx-fluent-design';

@Component({
    selector: 'side-nav-mobile',
    templateUrl: './side-nav-mobile.component.html',
    styleUrls: ['./side-nav-mobile.component.scss']
})
export class SideNavMobileComponent implements OnInit {
    @Input() public readonly sideNavLinks: ApplicationNavigationLinks = [];
    @Input() public readonly isProdEnvironment: boolean = false;
    public readonly closeIcon: INgxFluentDesignIcon = NgxFluentDesignIconClearClose;

    private readonly _router: Router;
    private _isNavMenuOpen: boolean = false;

    public get isNavMenuOpen(): boolean {
        return this._isNavMenuOpen;
    }

    constructor(router: Router) {
        this._router = router;
    }

    public ngOnInit(): void {
        this._router.events
            .subscribe((event: Event) => {
                if (event instanceof NavigationEnd) {
                    this.setIsNavMenuOpen(false);
                }
            });
    }

    public setIsNavMenuOpen(isNavMenuOpen: boolean): void {
        this._isNavMenuOpen = isNavMenuOpen;
    }
}
