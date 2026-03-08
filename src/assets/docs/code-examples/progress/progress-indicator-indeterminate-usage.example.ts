import { Component } from '@angular/core';
import { NgxFluentDesignProgressIndicatorIndeterminateComponent } from 'ngx-fluent-design';

@Component({
    standalone: true,
    imports: [NgxFluentDesignProgressIndicatorIndeterminateComponent],
    template: `
        <ngx-fluent-design-progress-indicator-indeterminate 
            [label]="'Label'" 
            [description]="'Description'" 
            class="w-100">
        </ngx-fluent-design-progress-indicator-indeterminate>
    `
})
export class ProgressIndicatorIndeterminateUsageExample { }
