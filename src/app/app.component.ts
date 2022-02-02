import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { applicationNavigationLinks } from './shared/components/side-nav/app-nav-links.class';
import { ApplicationNavigationLinks } from './shared/components/side-nav/app-nav-links.interface';
import { AppStatusService } from './shared/services/app-status.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

    private _appIsOnline: boolean = true;
    private _appHasUpdates: boolean = false;
    private _userClosedUpdateAlert: boolean = false;
    private _userClosedOfflineAlert: boolean = false;

    private readonly _subscriptions: Subscription = new Subscription();
    private readonly _navItems: ApplicationNavigationLinks = applicationNavigationLinks();
    private readonly _appStatusService: AppStatusService;

    public get shouldDisplayUpdateAlert(): boolean {
        return this._appHasUpdates && !this._userClosedUpdateAlert;
    }

    public get shouldDisplayOfflineAlert(): boolean {
        return !this._appIsOnline && !this._userClosedOfflineAlert;
    }

    public get navItems(): ApplicationNavigationLinks {
        return this._navItems;
    }

    constructor(appStatusService: AppStatusService) {
        this._appStatusService = appStatusService;
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
                        this._appHasUpdates = value;
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

    public closeUpdateMessage(): void {
        this._userClosedUpdateAlert = true;
    }

    public closeOfflineAlertMessage(): void {
        this._userClosedOfflineAlert = true;
    }

}
