import { Component, OnInit } from '@angular/core';
import {style} from "@angular/animations";

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.page.html',
  styleUrls: ['./authentication.page.scss'],
})
export class AuthenticationPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

    protected readonly style = style;
}
