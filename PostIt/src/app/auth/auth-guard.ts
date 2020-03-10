import { Injectable } from '@angular/core';

import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { PostService } from '../services/post.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    constructor(private auth: PostService, private router: Router) { }

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

        if (!this.auth.isLoggedIn()) {
            return false;
        }

        if (this.auth.isLoggedIn()) {
            return true;
        }
    }
}
