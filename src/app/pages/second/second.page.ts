import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-second',
  templateUrl: './second.page.html',
  styleUrls: ['./second.page.scss'],
})
export class SecondPage implements OnInit {
  contact: any;

  constructor(private route: ActivatedRoute, private router : Router) {
    this.contact = this.router.getCurrentNavigation()?.extras?.state?.['contact']
  }

  ngOnInit() {


    // this.route.paramMap.subscribe((params) => {
    //   const contactString = params.get('contact');
    //   if (contactString) {
    //     this.contact = JSON.parse(contactString);
    //   } else {
    //     this.contact = this.router?.getCurrentNavigation()?.extras?.state
    //   }
    //
    // });
    // this.contact = this.router?.getCurrentNavigation()?.extras?.state
  }

}
