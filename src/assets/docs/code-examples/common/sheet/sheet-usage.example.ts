import { Component } from '@angular/core';

@Component({
    template: `
        <ngx-fluent-design-sheet [hidden]="isHidden">
            <h1>This Can be anything here as it uses <ng-content></ng-content></h1>
        </ngx-fluent-design-sheet>
    `
})
export class SheetUsageExampleComponent {
    public isHidden: boolean = true;
}
