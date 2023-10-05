import { Component, OnInit } from '@angular/core';
import {Contacts} from "@capacitor-community/contacts";
import {Router} from "@angular/router";
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
    contacts: any[] = []
    scanActive: boolean = false;

    constructor(private router: Router) {
    }

    ngOnInit() {
        this.getContacts()
    }

    async checkPermission() {
        return new Promise(async (resolve, reject) => {
            const status = await BarcodeScanner.checkPermission({ force: true });
            if (status.granted) {
                resolve(true);
            } else if (status.denied) {
                await BarcodeScanner.openAppSettings();
                resolve(false);
            }
        });
    }

    async startScanner() {
        const allowed = await this.checkPermission();

        if (allowed) {
            this.scanActive = true;
            await BarcodeScanner.hideBackground();

            const result = await BarcodeScanner.startScan();

            if (result.hasContent) {
                this.scanActive = false;
                alert(result.content); //The QR content will come out here
                //Handle the data as your heart desires here
            } else {
                alert('NO DATA FOUND!');
            }
        } else {
            alert('NOT ALLOWED!');
        }
    }

    stopScanner() {
        BarcodeScanner.stopScan();
        this.scanActive = false;
    }

    ionViewWillLeave() {
        BarcodeScanner.stopScan();
        this.scanActive = false;
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

                this.contacts = result.contacts.filter(
                    (contact) => contact.phones && contact.phones.length > 0
                );
            }
        } catch (e) {
            console.log(e)
        }
    }
}
