import { Component, Inject, Input, OnDestroy, OnInit } from '@angular/core';
import { ApplicationNavigationLinks } from '../app-nav-links.interface';
import { INgxFluentDesignIcon, NgxFluentDesignIconClearClose } from 'ngx-fluent-design';
import { MobileSideNavHandler } from './mobile-side-nav-handler.class';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { DOCUMENT } from '@angular/common';
import { Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';

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
export class SideNavMobileComponent implements OnInit, OnDestroy {
    @Input() public sideNavLinks: ApplicationNavigationLinks = [];
    @Input() public isProdEnvironment: boolean = false;
    @Input() public currentPackageVersion: string = '';

    public readonly closeIcon: INgxFluentDesignIcon = NgxFluentDesignIconClearClose;
    public readonly customOpenIcon: INgxFluentDesignIcon = {
        height: 12,
        width: 25,
        fill: '#FFFFFF',
        name: 'side-nav-open-icon',
        paths: [
            'M13.5352 5.58984C13.5352 5.77669 13.4987 5.95215 13.4258 6.11621C13.3574 6.28027 13.2617 6.42383 13.1387 6.54688C13.0156 6.66992 12.8721 6.7679 12.708 6.84082C12.5439 6.90918 12.3685 6.94336 12.1816 6.94336H5.05176L6.97266 8.85742C7.10026 8.98047 7.19824 9.1263 7.2666 9.29492C7.33496 9.46354 7.36914 9.63672 7.36914 9.81445C7.36914 10.0013 7.33268 10.1768 7.25977 10.3408C7.19141 10.5049 7.0957 10.6484 6.97266 10.7715C6.84961 10.8945 6.70605 10.9925 6.54199 11.0654C6.37793 11.1338 6.20247 11.168 6.01562 11.168C5.83789 11.168 5.66471 11.1338 5.49609 11.0654C5.33203 10.9971 5.1862 10.8991 5.05859 10.7715L0.854492 6.56055C0.704102 6.41016 0.597005 6.25521 0.533203 6.0957C0.469401 5.9362 0.4375 5.74935 0.4375 5.53516C0.4375 5.35742 0.476237 5.19108 0.553711 5.03613C0.635742 4.87663 0.736003 4.73763 0.854492 4.61914L5.05859 0.408203C5.1862 0.280599 5.33431 0.182617 5.50293 0.114258C5.67155 0.0458984 5.84473 0.0117188 6.02246 0.0117188C6.20931 0.0117188 6.38477 0.0481771 6.54883 0.121094C6.71289 0.19401 6.85417 0.291992 6.97266 0.415039C7.0957 0.538086 7.19141 0.683919 7.25977 0.852539C7.33268 1.0166 7.36914 1.18978 7.36914 1.37207C7.36914 1.5498 7.33496 1.7207 7.2666 1.88477C7.19824 2.04883 7.10026 2.19466 6.97266 2.32227L5.05176 4.23633H12.1816C12.3685 4.23633 12.5439 4.27279 12.708 4.3457C12.8721 4.41406 13.0156 4.50977 13.1387 4.63281C13.2617 4.75586 13.3574 4.89941 13.4258 5.06348C13.4987 5.22754 13.5352 5.40299 13.5352 5.58984Z'
        ]
    };
    public readonly mobileSidenavHandler: MobileSideNavHandler = new MobileSideNavHandler(false);

    private readonly _subscriptions: Subscription = new Subscription();
    private readonly _document: Document;

    constructor(@Inject(DOCUMENT) document: Document) {
        this._document = document;
    }

    public ngOnInit(): void {
        this._subscriptions.add(
            this.mobileSidenavHandler.isOpenAsObservable
                .pipe(
                    tap((isSideNavOpen: boolean) => {
                        this.toggleBodyNoScrollClass(isSideNavOpen);
                    })
                )
                .subscribe()
        );
    }

    public ngOnDestroy(): void {
        this._subscriptions.unsubscribe();
    }

    public handleCloseClickEvent(): void {
        if (this.mobileSidenavHandler.isOpen) {
            this.mobileSidenavHandler.close();
        } else {
            this.mobileSidenavHandler.open();
        }
    }

    private toggleBodyNoScrollClass(isSideNavOpen: boolean): void {
        if (isSideNavOpen) {
            this._document.body.classList.add('no-scroll');
        } else {
            this._document.body.classList.remove('no-scroll');
        }
    }

}
