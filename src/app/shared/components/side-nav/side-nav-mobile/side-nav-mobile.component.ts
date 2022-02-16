import { Component, Inject, Input, OnInit } from '@angular/core';
import { ApplicationNavigationLinks } from '../app-nav-links.interface';
import { Event, NavigationEnd, Router } from '@angular/router';
import { INgxFluentDesignIcon, NgxFluentDesignIconClearClose } from 'ngx-fluent-design';
import { MobileSideNavHandler } from './mobile-side-nav-handler.class';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { DOCUMENT } from '@angular/common';
import { combineLatest, Subscription } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Component({
    selector: 'side-nav-mobile',
    templateUrl: './side-nav-mobile.component.html',
    styleUrls: ['./side-nav-mobile.component.scss'],
    animations: [
        trigger('slideInRight', [
            state('hide', style({
                transform: 'translateX(-100%)'
            })),
            state('show', style({
                transform: 'translateX(0%)'
            })),
            transition('show => hide', [
                animate('150ms')
            ]),
            transition('hide => show', [
                animate('150ms')
            ]),
        ])
    ]
})
export class SideNavMobileComponent implements OnInit {
    @Input() public sideNavLinks: ApplicationNavigationLinks = [];
    @Input() public isProdEnvironment: boolean = false;

    public readonly closeIcon: INgxFluentDesignIcon = NgxFluentDesignIconClearClose;
    public readonly mobileSidenavHandler: MobileSideNavHandler = new MobileSideNavHandler(false);

    private readonly _subscriptions: Subscription = new Subscription();
    private readonly _router: Router;
    private readonly _document: Document;

    constructor(router: Router, @Inject(DOCUMENT) document: Document) {
        this._router = router;
        this._document = document;
    }

    public ngOnInit(): void {
        this._subscriptions.add(
            combineLatest([this._router.events, this.mobileSidenavHandler.isOpenAsObservable])
                .pipe(
                    map(([routerEvents, sideNavIsOpen]: [Event, boolean]): { isNavigationEndEvent: boolean, isSideNavOpen: boolean } => {
                        return {
                            isNavigationEndEvent: routerEvents instanceof NavigationEnd,
                            isSideNavOpen: sideNavIsOpen
                        };
                    }),
                    tap((data: { isNavigationEndEvent: boolean, isSideNavOpen: boolean }) => {
                        this.toggleBodyNoScrollClass(data.isSideNavOpen);
                        if (data.isNavigationEndEvent) {
                           this.mobileSidenavHandler.close();
                        }
                    })
                )
                .subscribe()
        );
    }

    public handleCloseClickEvent(): void {
        this.mobileSidenavHandler.close();
    }

    private toggleBodyNoScrollClass(isSideNavOpen: boolean): void {
        if (isSideNavOpen) {
            this._document.body.classList.add('no-scroll');
        } else {
            this._document.body.classList.remove('no-scroll');
        }
    }
}
