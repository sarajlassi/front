import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | UrlTree {
    
    const isAdmin = localStorage.getItem('role') === 'administrateur';
    if (!isAdmin) {
    
      return this.router.parseUrl('/access-denied');
    }
    return true;
  }
}
