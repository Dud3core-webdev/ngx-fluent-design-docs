import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    template: `
        <form>
            <ngx-fluent-design-radio
                    [label]="'Radio Label'"
                    [name]="'Radio Name'"
                    [formControl]="radioFormControl">
            </ngx-fluent-design-radio>
        </form>
    `
})
export class RadioUsageExample {
    public radioFormControl: FormControl = new FormControl('Some Radio Value');
}
