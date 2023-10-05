import { Component, OnInit } from '@angular/core';
import {Contacts} from "@capacitor-community/contacts";
import {Router} from "@angular/router";


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
    contacts: any[] = []

    constructor(private router: Router) {
    }

    ngOnInit() {
        this.getContacts()
    }

    goToSecondlPage(contact: any) {
        this.router.navigate(['second-page'], { state: {contact: contact} });
    }

    async getContacts() {
        try {
            const permission = await Contacts.requestPermissions();
            if(!permission?.contacts) {
                return
            } else if(permission?.contacts == 'granted'){
                const result = await Contacts.getContacts({
                    projection: {
                        name: true,
                        phones: true,
                        organization: true,
                        birthday: true,
                        note: true,
                        emails: true,
                        urls: true,
                        postalAddresses: true,
                    }
                })

                this.contacts = result.contacts
            }
        } catch (e) {
            console.log(e)
        }
    }


}
