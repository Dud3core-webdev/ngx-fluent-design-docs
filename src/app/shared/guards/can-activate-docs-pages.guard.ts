import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class CanActivateDocsPagesGuard implements CanActivate, CanActivateChild {
    private readonly _router: Router;

    constructor(router: Router) {
        this._router = router;
    }

    public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        if (environment.redirectToDownPage) {
            this._router.navigate(['', 'errors', 'down-for-maintenance']);
            return of(false);
        }

        return of(true);
    }

    public canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        return this.canActivate(childRoute, state);
    }
}
