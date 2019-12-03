import { Component, OnInit , Input} from '@angular/core';
import { UserService } from './user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string = '';
  @Input() password: string = '';
  return: string = '';
  constructor( private userService: UserService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams
      .subscribe( (params: Query) => {
        this.return = params['return' || '/home'];
        if(!this.userService.isGuest()){
          this.go();
        }
      });
  }

  login() {
    if( this.username && this.password) {
      this.userService.login(this.username);
      this.go();
    }
    else {
      alert(' please enter credentials')
    }
  }

  private go(){
    this.router.navigateByUrl(this.return);
  }

}