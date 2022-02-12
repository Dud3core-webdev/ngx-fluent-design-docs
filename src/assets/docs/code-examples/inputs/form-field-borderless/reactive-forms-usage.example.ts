import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    template: `
        <form>
            <ngx-fluent-design-form-field-borderless>
                <input ngxFluentDesignInput [formControl]="standardInput">
            </ngx-fluent-design-form-field-borderless>
        </form>
    `,
})
export class ReactveFormsUsageExample {
    public standardInput: FormControl = new FormControl(null);
}
