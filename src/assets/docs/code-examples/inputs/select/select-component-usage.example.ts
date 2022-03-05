import { Component } from '@angular/core';

@Component({
    template: `<ngx-fluent-design-select-component [options]="['Option 1', 'Option 2']"
                                                   [id]="'SomeId'"
                                                   [label]="'Select'"
                                                    (optionClicked)="doSomethingWithOptions($event)">
                </ngx-fluent-design-select-component>`,
})
export class SelectComponentUsageExample {
    public doSomethingWithOptions(option: string): void {
        window.alert(option);
    }
}
