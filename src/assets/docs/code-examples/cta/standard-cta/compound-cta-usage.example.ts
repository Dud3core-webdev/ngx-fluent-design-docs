import { Component } from '@angular/core';
import { NgxFluentDesignCompoundButtonComponent } from 'ngx-fluent-design';

@Component({
    standalone: true,
    imports: [NgxFluentDesignCompoundButtonComponent],
    template: `
        <ngx-fluent-design-compound-button
            [disabled]="false"
            [secondaryText]="'And some secondary text'"
            type="primary">
            This is an example
        </ngx-fluent-design-compound-button>
    `
})
export class CompoundCtaUsageExample { }
