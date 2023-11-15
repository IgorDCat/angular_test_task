import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from './auth.service';

export const AuthGuard: CanActivateFn = (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
): any => {
    const router: Router = inject(Router);
    const authService: AuthService = inject(AuthService);

    return authService.isLogin.subscribe(res => {
        if(!!res) {
            return true
        } else {
            return router.navigate(['/home'])
        }
    })
}
