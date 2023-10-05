import { Injectable } from '@angular/core';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';


@Injectable({
    providedIn: 'root'
})
export class ScannerService {
    private backButtonListener: any;

    constructor() {
        this.setupBackButtonListener();
    }

    // function for stop scanner when user press "back button"
    private setupBackButtonListener() {
        this.backButtonListener = window.addEventListener('popstate', () => {
            this.stopScanner();
        });
    }
    async checkPermission() {
        const status = await BarcodeScanner.checkPermission({ force: true });
        return status.granted;
    }

    async startScanner() {
        const allowed = await this.checkPermission();

        if (allowed) {
            await BarcodeScanner.hideBackground();
            const result = await BarcodeScanner.startScan();
            return result.hasContent ? result.content : null;
        } else {
            return null;
        }
    }

    stopScanner() {
        BarcodeScanner.stopScan();
    }
}
