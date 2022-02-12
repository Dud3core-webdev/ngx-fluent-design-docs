import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    template: `
        <form>
            <ngx-fluent-design-textarea-borderless>
                <textarea placeholder="this is a standard text area" rows="5"
                  [formControl]="textAreaInput">
                </textarea>
            </ngx-fluent-design-textarea-borderless>
        </form>
    `,
})
export class TextAreaBorderlessUsageExample {
    public textAreaInput: FormControl = new FormControl(null);
}
