import { Injectable, Inject } from '@angular/core';
import { BehaviorSubject, Observable, fromEvent, merge } from 'rxjs';
import { map } from 'rxjs/operators';
import { WINDOW } from '../../shared/types/window-ref.clss';

@Injectable()
export class AppOnlineService {
    private readonly onlineStatusSubject$: BehaviorSubject<boolean>;

    public get onlineStatus(): Observable<boolean> {
        return this.onlineStatusSubject$.asObservable();
    }

    constructor(@Inject(WINDOW) private window: Window) {
        this.onlineStatusSubject$ = new BehaviorSubject<boolean>(this.window.navigator.onLine);
        this.initialise();
    }

    private initialise(): void {
        merge(
            fromEvent(this.window, 'online').pipe(map(() => true)),
            fromEvent(this.window, 'offline').pipe(map(() => false))
        ).subscribe(isOnline => {
            this.onlineStatusSubject$.next(isOnline);
        });
    }
}
