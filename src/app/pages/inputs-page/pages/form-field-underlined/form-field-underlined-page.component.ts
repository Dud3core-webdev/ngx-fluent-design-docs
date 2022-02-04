import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
    templateUrl: './form-field-underlined-page.component.html',
    styleUrls: ['./form-field-underlined-page.component.scss']
})
export class FormFieldUnderlinedPageComponent {
    public standardInput: FormControl = new FormControl(null);
    public standardInputValidator: FormControl = new FormControl(null, [Validators.required, Validators.minLength(8)]);
    public textAreaInput: FormControl = new FormControl(null);

    public disableStandardInput: boolean = false;
    public disableStandardInputWithValidator: boolean = false;
    public disableTextAreaInput: boolean = false;
}
