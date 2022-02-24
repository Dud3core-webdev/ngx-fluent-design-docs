import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function hexCodeValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const value = control.value;
        const hexCodeRegex = /^#[0-9A-F]{6}$/i;

        return hexCodeRegex.test(value) ? null : { isHexCode: false };
    };
}
