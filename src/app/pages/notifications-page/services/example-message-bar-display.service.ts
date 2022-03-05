import { Injectable } from '@angular/core';
import { MessageBarType } from 'ngx-fluent-design/lib/notifications/types/message-bar.type';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ExampleMessageBarDisplayService {
    private readonly _currentMessageBarTypeSubject$: BehaviorSubject<MessageBarType>;
    private readonly _displayMessageBarSubject$: BehaviorSubject<boolean>;

    public get currentMessageBarType(): Observable<MessageBarType> {
        return this._currentMessageBarTypeSubject$.asObservable();
    }

    public get shouldDisplayMessageBar(): Observable<boolean> {
        return this._displayMessageBarSubject$.asObservable();
    }

    constructor() {
        this._currentMessageBarTypeSubject$ = new BehaviorSubject<MessageBarType>('success');
        this._displayMessageBarSubject$ = new BehaviorSubject<boolean>(false);
    }

    public setExampleMessageBarType(messageBarType: MessageBarType): void {
        this._currentMessageBarTypeSubject$.next(messageBarType);
    }

    public closeExampleMessageBar(): void {
        this._displayMessageBarSubject$.next(false);
    }

    public showExampleMessageBar(): void {
        this._displayMessageBarSubject$.next(true);
    }
}
