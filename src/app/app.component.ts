import { Component } from '@angular/core';
import { UserService } from './login/user.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular Test';

  constructor(private userService: UserService) {}

  logout(): void {
    console.log('logout');
    this.userService.logout();
  }
}
