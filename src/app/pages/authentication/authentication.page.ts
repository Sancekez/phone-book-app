import { Component, OnInit } from '@angular/core';
import {style} from "@angular/animations";
import {Router} from '@angular/router';
@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.page.html',
  styleUrls: ['./authentication.page.scss'],
})
export class AuthenticationPage implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }
  goHome(){

    this.router.navigate(['home']);
  }

    protected readonly style = style;
    protected readonly console = console;
  protected readonly alert = alert;
}
