import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
    templateUrl: './form-field-borderless-page.component.html',
    styleUrls: ['./form-field-borderless-page.component.scss']
})
export class FormFieldBorderlessPageComponent {
    public standardInput: FormControl = new FormControl(null);
    public standardInputValidator: FormControl = new FormControl(null, [Validators.required, Validators.minLength(8)]);
    public textAreaInput: FormControl = new FormControl(null);
}
