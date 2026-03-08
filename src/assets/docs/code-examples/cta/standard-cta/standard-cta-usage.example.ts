import { Component } from '@angular/core';
import { NgxFluentDesignButtonComponent } from 'ngx-fluent-design';

@Component({
    standalone: true,
    imports: [NgxFluentDesignButtonComponent],
    template: `
        <ngx-fluent-design-button [disabled]="false" type="primary">
            This is an example
        </ngx-fluent-design-button>
    `
})
export class StandardCtaUsageExample { }
