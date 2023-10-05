import { Component, OnInit } from '@angular/core';
import {Contacts} from "@capacitor-community/contacts";
import {Router} from "@angular/router";
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';
import { ContactService } from '../../services/contact.service';
import { ScannerService } from '../../services/scanner.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
    contacts: any[] = []
    scanActive: boolean = false;

    constructor(
        private router: Router,
        private contactService: ContactService,
        private scannerService: ScannerService
    ) {}

    ngOnInit() {
        this.getContacts()
    }

    async getContacts() {
        // @ts-ignore
        this.contacts = await this.contactService.getContacts();
    }

    async startScanner() {
        this.scanActive = true;
        const result = await this.scannerService.startScanner();
        if (result) {
            this.scanActive = false;
            alert(result); // Обработайте данные согласно вашим потребностям
        } else {
            this.scanActive = false;
            alert('QR do not find!');
        }
    }

    stopScanner() {
        this.scannerService.stopScanner();
        this.scanActive = false;
    }

    goToSecondlPage(contact: any) {
        this.router.navigate(['second-page'], { state: {contact: contact} });
    }
}
