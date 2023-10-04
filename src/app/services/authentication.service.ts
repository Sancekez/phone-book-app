import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {
    private isAuthenticated: boolean = false;

    login(login: string, password: string): boolean {
        // Проверьте логин и пароль здесь. Например, сравните с "admin/admin".
        if (login === 'a' && password === 'a') {
            this.isAuthenticated = true;
            return true;
        }
        return false;
    }

    logout(): void {
        this.isAuthenticated = false;
    }

    isLoggedIn(): boolean {
        return this.isAuthenticated;
    }
}
