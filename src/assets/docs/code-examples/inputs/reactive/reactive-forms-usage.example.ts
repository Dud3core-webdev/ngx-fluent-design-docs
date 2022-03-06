import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    template: `
        <form>
            <ngx-fluent-design-form-field [label]="'Standard Input'">
                <input ngxFluentDesignInput [formControl]="standardInput">
            </ngx-fluent-design-form-field>
        </form>
    `
})
export class ReactiveFormsUsageExample {
    public standardInput: FormControl = new FormControl(null);
}
