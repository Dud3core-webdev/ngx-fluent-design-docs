import { Component } from '@angular/core';
import { NgxFluentDesignSpinnerComponent } from 'ngx-fluent-design';

@Component({
    standalone: true,
    imports: [NgxFluentDesignSpinnerComponent],
    template: `
        <ngx-fluent-design-spinner [size]="'large'" [label]="'Loading...'"></ngx-fluent-design-spinner>
    `
})
export class SpinnerUsageExample { }
