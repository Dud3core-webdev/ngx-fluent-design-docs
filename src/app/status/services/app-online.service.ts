import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ConnectionService } from 'ng-connection-service';

@Injectable()
export class AppOnlineService {
    private readonly _connectionService: ConnectionService;
    private readonly onlineStatusSubject$: BehaviorSubject<boolean>;

    public get onlineStatus(): Observable<boolean> {
        return this.onlineStatusSubject$.asObservable();
    }

    constructor(connectionService: ConnectionService) {
        this._connectionService = connectionService;
        this.onlineStatusSubject$ = new BehaviorSubject<boolean>(true);

        this.initialise();
    }

    private initialise(): void {
        this._connectionService.monitor()
            .subscribe({
                next: (isConnected: boolean) => this.onlineStatusSubject$.next(isConnected)
            });
    }
}
