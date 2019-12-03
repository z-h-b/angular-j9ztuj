import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class UserService {

  guest: boolean = false;

  constructor(private router: Router) { }

  isGuest() : boolean{
    return this.guest ;
  }
  login(username: string) : void {
    localStorage.setItem('username', username);
    this.guest = false;
  }

  logout(): void {
    localStorage.setItem('username', '');
    this.guest = true;
    this.router.navigate(['/login']);

  }
}