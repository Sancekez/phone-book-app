import { Injectable } from '@angular/core';
import { Contacts } from "@capacitor-community/contacts";

@Injectable({
    providedIn: 'root'
})
export class ContactService {
    // @ts-ignore
    async getContacts() {
        try {
            const permission = await Contacts.requestPermissions();
            if (!permission?.contacts) {
                return [];
            } else if (permission?.contacts == 'granted') {
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
                });

                return result.contacts.filter(
                    (contact) => contact.phones && contact.name && contact.phones.length > 0
                );
            }
        } catch (e) {
            console.log(e);
            return [];
        }
    }
}
