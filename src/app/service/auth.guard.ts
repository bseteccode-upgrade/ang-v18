import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../service/api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard  {

  constructor(
    private router: Router,
    private apiService: ApiService
  ) { }

  canActivate() {
    if (localStorage.getItem('token') || localStorage.getItem('fromqrscanned')) {
      return true;
    } else {
      // not logged in so redirect to login page
      if (localStorage.getItem('fromqrscanned') === '' && localStorage.getItem('fromqrscanned') === null && typeof localStorage.getItem('fromqrscanned') === 'undefined') {
        this.router.navigate(['signin']);
      }
      return false;
    }
  }
}
