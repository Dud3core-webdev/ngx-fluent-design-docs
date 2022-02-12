import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    template: `
        <form>
            <ngx-fluent-design-form-field-borderless>
                <textarea ngxFluentDesignInput placeholder="this is a standard text area" rows="5" [formControl]="textAreaInput"></textarea>
            </ngx-fluent-design-form-field-borderless>
        </form>
    `,
})
export class FormFieldBorderlessTextAreaUsageExample {
    public textAreaInput: FormControl = new FormControl(null);
}
