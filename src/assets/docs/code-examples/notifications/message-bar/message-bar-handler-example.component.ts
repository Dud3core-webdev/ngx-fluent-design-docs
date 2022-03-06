import { Component } from '@angular/core';
import { NgxFluentDesignMessageBarHandler } from 'ngx-fluent-design';

@Component({
    template: `
        <ngx-fluent-design-button (clicked)="exampleMessageBarHandler.open()">Click me</ngx-fluent-design-button>
        <ngx-fluent-design-message-bar [handler]="exampleMessageBarHandler" class="mb-3" messageBarType="info">Here is an info alert</ngx-fluent-design-message-bar>
    `
})
export class MessageBarHandlerExampleComponent {
    public readonly exampleMessageBarHandler: NgxFluentDesignMessageBarHandler = new NgxFluentDesignMessageBarHandler(false);
}
