import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  templateUrl: 'login.component.html'
})
export class LoginComponent {
  username: string;
  password: string;
  successUrl: string;
  constructor(protected a_router: Router) { }

  login() {
   //if(this.username === "admin" && this.password === "hxw"){
     this.successUrl = "/dashboard"
     this.a_router.navigate([this.successUrl]);

  // }
  }
}
