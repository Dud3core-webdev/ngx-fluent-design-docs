import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, interval, Observable } from 'rxjs';
import { SwUpdate } from '@angular/service-worker';
import { WINDOW } from '../../shared/types/window-ref.clss';
import { switchMap } from 'rxjs/operators';
import { fromPromise } from 'rxjs/internal-compatibility';

@Injectable()
export class AppUpdateService {
    private readonly _updates: SwUpdate;
    private readonly _window: Window;
    private readonly serviceWorkerUpdatesSubject$: BehaviorSubject<boolean>;

    public get applicationHasUpdates(): Observable<boolean> {
        return this.serviceWorkerUpdatesSubject$.asObservable();
    }

    constructor(updates: SwUpdate, @Inject(WINDOW) window: Window) {
        this._updates = updates;
        this._window = window;
        this.serviceWorkerUpdatesSubject$ = new BehaviorSubject<boolean>(false);

        this.initialise();
    }

    public reloadApplication(): void {
        this._updates.activateUpdate()
            .then((success: boolean) => {
                if (!success) {
                    this._window.location.reload();
                }
            });
    }

    private initialise(): void {
        const twoMinuteInterval: Observable<number> = interval(120000);

        if (this._updates.isEnabled) {
            twoMinuteInterval.pipe(switchMap(() => fromPromise(this._updates.checkForUpdate())))
                .subscribe({
                    next: (hasUpdates: boolean) => this.serviceWorkerUpdatesSubject$.next(hasUpdates)
                });
        } else {
            console.warn('Service worker not available in development mode.');
        }
    }

}
