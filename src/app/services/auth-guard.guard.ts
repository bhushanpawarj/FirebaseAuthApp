import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate  {
  constructor(
    private router: Router,
    private authenticationService: AngularFireAuth
) { }


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | import("@angular/router").UrlTree | Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {
    const currentUser = this.authenticationService.auth.currentUser;
    if(currentUser){
      return true;
    }
    this.router.navigate(['/home'], { queryParams: { returnUrl: state.url } });
    return false;

  }
  
}
