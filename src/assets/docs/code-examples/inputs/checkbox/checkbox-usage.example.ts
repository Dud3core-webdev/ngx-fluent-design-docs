import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    template: `
        <form>
            <ngx-fluent-design-checkbox
                    [label]="'Checkbox Label'"
                    [formControl]="checkboxFormControl">
            </ngx-fluent-design-checkbox>
        </form>
    `
})
export class CheckboxUsageExample {
    public checkboxFormControl: FormControl = new FormControl(false);
}
