import { Component, OnInit } from '@angular/core';
import {Contacts} from "@capacitor-community/contacts";


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
    contacts: any[] = []

    constructor() {
    }

    ngOnInit() {
        this.getContacts()
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
                        image: true
                    }
                })

                this.contacts = result.contacts
            }
        } catch (e) {
            console.log(e)
        }
    }


}
