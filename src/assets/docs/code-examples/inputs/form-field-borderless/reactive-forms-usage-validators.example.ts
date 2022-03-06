import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
    template: `
        <form>
            <ngx-fluent-design-form-field-borderless [label]="'Standard Input'">
                <input ngxFluentDesignInput [formControl]="standardInputValidator">
            </ngx-fluent-design-form-field-borderless>
        </form>
    `
})
export class ReactiveFormsUsageExample {
    public standardInputValidator: FormControl = new FormControl(null, [Validators.required, Validators.minLength(8)]);
}
