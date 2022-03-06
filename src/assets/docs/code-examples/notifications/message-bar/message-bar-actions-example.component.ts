import { Component } from '@angular/core';

@Component({
    template: `<ngx-fluent-design-message-bar [actionName]="'Hello there'" (actionClicked)="sayHello()" messageBarType="info">Here is an info alert</ngx-fluent-design-message-bar>`
})
export class MessageBarActionsExampleComponent {
    public sayHello(): void {
        window.alert('Hello');
    }
}
