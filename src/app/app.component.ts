import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { applicationNavigationLinks } from './shared/components/side-nav/app-nav-links.class';
import { ApplicationNavigationLinks } from './shared/components/side-nav/app-nav-links.interface';
import { AppStatusService } from './shared/services/app-status.service';
import { Event, NavigationEnd, Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { NgxFluentDesignMessageBarHandler } from 'ngx-fluent-design';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
    public appUpdatesMessageBarHandler: NgxFluentDesignMessageBarHandler = new NgxFluentDesignMessageBarHandler(false);

    private _appIsOnline: boolean = true;
    private _userClosedOfflineAlert: boolean = false;
    private _shouldShowNavMenu: boolean = true;

    private readonly _subscriptions: Subscription = new Subscription();
    private readonly _navItems: ApplicationNavigationLinks = applicationNavigationLinks();
    private readonly _appStatusService: AppStatusService;
    private readonly _router: Router;
    private readonly _document: Document;
    private readonly _errorRoutesWhereNavShouldNotBeDisplayed: Array<string> = [
        '/errors/down-for-maintenance'
    ];

    public get shouldDisplayOfflineAlert(): boolean {
        return !this._appIsOnline && !this._userClosedOfflineAlert;
    }

    public get navItems(): ApplicationNavigationLinks {
        return this._navItems;
    }

    public get shouldDisplayNavMenu(): boolean {
        return this._shouldShowNavMenu;
    }

    constructor(appStatusService: AppStatusService,
                router: Router,
                @Inject(DOCUMENT) document: Document) {
        this._appStatusService = appStatusService;
        this._router = router;
        this._document = document;
    }

    public ngOnInit(): void {
        this._subscriptions.add(
            this._appStatusService.onlineStatus
                .subscribe({
                    next: (value): void => {
                        this._appIsOnline = value.windowOnline;
                    }
                })
        );

        this._subscriptions.add(
            this._appStatusService.updateAvailable
                .subscribe({
                    next: (value): void => {
                        if (value) {
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

    public reloadWindow(): void {
        this._appStatusService.reloadApp();
    }

    public closeOfflineAlertMessage(): void {
        this._userClosedOfflineAlert = true;
    }

}
