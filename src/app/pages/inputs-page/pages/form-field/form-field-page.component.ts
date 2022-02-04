import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
    templateUrl: './form-field-page.component.html',
    styleUrls: ['./form-field-page.component.scss']
})
export class FormFieldPageComponent {
    public standardInput: FormControl = new FormControl(null);
    public standardInputValidator: FormControl = new FormControl(null, [Validators.required, Validators.minLength(8)]);
    public textAreaInput: FormControl = new FormControl(null);

    public disableStandardInput: boolean = false;
    public disableStandardInputWithValidator: boolean = false;
    public disableTextAreaInput: boolean = false;
}
