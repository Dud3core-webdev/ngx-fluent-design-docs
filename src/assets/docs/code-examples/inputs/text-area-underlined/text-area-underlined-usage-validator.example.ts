import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
    template: `
        <form>
            <ngx-fluent-design-textarea-underlined [label]="'standard Input'">
                <textarea ngxFluentDesignInput placeholder="this is a standard text area" rows="5" [formControl]="textAreaInput"></textarea>
            </ngx-fluent-design-textarea-underlined>
        </form>
    `,
})
export class TextAreaUnderlinedUsageExample {
    public textAreaInput: FormControl = new FormControl(null, [Validators.required]);
}
