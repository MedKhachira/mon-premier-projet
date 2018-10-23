import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  authStatus : boolean;
  constructor(private authService : AuthService, private router:Router) { }

  ngOnInit() {
    this.authStatus = this.authService.isAuth;
  }

  onSignIn(){
    this.authService.signIn().then(
      () => {
        this.router.navigate(['appareils']);
        this.authStatus = this.authService.isAuth;
      }
      );
  }

  OnSignOut(){
    this.authService.signOut();
    this.authStatus = this.authService.isAuth;
  }

}
