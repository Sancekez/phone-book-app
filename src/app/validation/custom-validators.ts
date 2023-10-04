import { AbstractControl, ValidatorFn } from '@angular/forms';

export function minLengthValidator(minLength: number): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
        const value: string = control.value;
        if (value && value.length < minLength) {
            return { minLength: true };
        }
        return null;
    };
}
