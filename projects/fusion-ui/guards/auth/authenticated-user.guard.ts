import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';
import {catchError, map} from 'rxjs/operators';
import {Observable, of} from 'rxjs';
import {AuthService} from '@ironsource/fusion-ui/services/auth';
import {UserService} from '@ironsource/fusion-ui/services/user';
import {RedirectService} from '@ironsource/fusion-ui/services/redirect';

@Injectable({
    providedIn: 'root'
})
export class AuthenticatedUserGuard implements CanActivate {
    constructor(private authService: AuthService, private redirectService: RedirectService, private userService: UserService) {}

    canActivate(_route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> {
        if (this.authService.authToken) {
            return this.userService.fetchUserData().pipe(
                catchError(() => of(true)),
                map(() => {
                    this.redirectService.redirectToBase();
                    return false;
                })
            );
        } else {
            return true;
        }
    }
}
