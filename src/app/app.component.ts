import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { applicationNavigationLinks } from './shared/side-nav/app-nav-links.class';
import { ApplicationNavigationLinks } from './shared/side-nav/app-nav-links.interface';
import { Event, NavigationEnd, Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { NgxFluentDesignMessageBarHandler } from 'ngx-fluent-design';
import { AppOnlineService } from './shared/app-status/services/app-online.service';
import { AppUpdateService } from './shared/app-status/services/app-update.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
    public readonly appUpdatesMessageBarHandler: NgxFluentDesignMessageBarHandler = new NgxFluentDesignMessageBarHandler(false);
    public readonly onlineStatusMessageBarHandler: NgxFluentDesignMessageBarHandler = new NgxFluentDesignMessageBarHandler(false);

    private _shouldShowNavMenu: boolean = true;

    private readonly _appUpdateService: AppUpdateService;
    private readonly _appOnlineService: AppOnlineService;
    private readonly _subscriptions: Subscription = new Subscription();
    private readonly _navItems: ApplicationNavigationLinks = applicationNavigationLinks();
    private readonly _router: Router;
    private readonly _document: Document;
    private readonly _errorRoutesWhereNavShouldNotBeDisplayed: Array<string> = [
        '/errors/down-for-maintenance'
    ];

    public get navItems(): ApplicationNavigationLinks {
        return this._navItems;
    }

    public get shouldDisplayNavMenu(): boolean {
        return this._shouldShowNavMenu;
    }

    constructor(router: Router,
                appOnlineService: AppOnlineService,
                appUpdateService: AppUpdateService,
                @Inject(DOCUMENT) document: Document) {
        this._appUpdateService = appUpdateService;
        this._appOnlineService = appOnlineService;
        this._router = router;
        this._document = document;
    }

    public ngOnInit(): void {
        this._subscriptions.add(
            this._appOnlineService.onlineStatus
                .subscribe({
                    next: (isOnline: boolean) => {
                        if (!isOnline) {
                            this.onlineStatusMessageBarHandler.open();
                        }
                    }
                })
        );

        this._subscriptions.add(
            this._appUpdateService.applicationHasUpdates
                .subscribe({
                    next: (hasUpdates: boolean) => {
                        if (hasUpdates) {
                            this.appUpdatesMessageBarHandler.open();
                        }
                    }
                })
        );

        this._subscriptions.add(
            this._router.events
                .subscribe((event: Event) => {
                    if (event instanceof NavigationEnd) {
                        this._shouldShowNavMenu = !this._errorRoutesWhereNavShouldNotBeDisplayed.includes(event.urlAfterRedirects);
                        this._document.documentElement.scrollTo(0, 0);
                    }
                })
        );
    }

    public ngOnDestroy(): void {
        this._subscriptions.unsubscribe();
    }

    public reloadApplication(): void {
        this._appUpdateService.reloadApplication();
    }
}
