import { Component } from '@angular/core';

@Component({
    template: `
        <ngx-fluent-design-card>
            <h1>This Can be anything here as it uses <ng-content></ng-content></h1>
        </ngx-fluent-design-card>
    `
})
export class CardUsageExampleComponent {}
