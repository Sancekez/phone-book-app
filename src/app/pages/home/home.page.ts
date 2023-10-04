import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Contacts } from '@capacitor-community/contacts';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
    public contacts: any[] | undefined;

    constructor(public router: Router) {}

    ngOnInit() {
        this.printContactsData();
    }

    printContactsData() {
        // @ts-ignore
        Contacts.getContacts().then(result => {
            console.log(result);
            for (const contact of result.contacts) {
                // @ts-ignore
                this.contacts.push(contact)
            }
        });
    }
}
