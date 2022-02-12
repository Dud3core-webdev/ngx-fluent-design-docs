import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    template: `
        <form>
            <ngx-fluent-design-standard-textarea [label]="'standard Input'">
                <textarea placeholder="this is a standard text area" rows="5" [formControl]="textAreaInput"></textarea>
            </ngx-fluent-design-standard-textarea>
        </form>
    `,
})
export class TextAreaStandardUsageExample {
    public textAreaInput: FormControl = new FormControl(null);
}
