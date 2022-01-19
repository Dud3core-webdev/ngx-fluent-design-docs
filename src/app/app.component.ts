import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { sideNavLinks } from './shared/components/side-nav/side-nav-links.class';
import { SideNavLinks } from './shared/components/side-nav/side-nav-links.interface';

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
    private readonly _navItems: SideNavLinks = sideNavLinks();

    public get shouldDisplayUpdateAlert(): boolean {
        return this._appHasUpdates && !this._userClosedUpdateAlert;
    }

    public get shouldDisplayOfflineAlert(): boolean {
        return !this._appIsOnline && !this._userClosedOfflineAlert;
    }

    public get navItems(): SideNavLinks {
        return this._navItems;
    }

    public ngOnInit(): void {
    }

    public ngOnDestroy(): void {
        this._subscriptions.unsubscribe();
    }

    public closeUpdateMessage(): void {
        this._userClosedUpdateAlert = true;
    }

    public closeOfflineAlertMessage(): void {
        this._userClosedOfflineAlert = true;
    }

}
