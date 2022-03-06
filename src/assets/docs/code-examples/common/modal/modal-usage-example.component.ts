import { Component } from '@angular/core';
import { NgxFluentDesignModalHandler } from 'ngx-fluent-design';

@Component({
    template: `
        <ngx-fluent-design-button type="primary" (clicked)="modalHandler.open()">
            Click Here to launch a panel
        </ngx-fluent-design-button>

        <ngx-fluent-design-modal [title]="'Hello there'"
                                 [canDismissWithOuterContent]="true"
                                 [handler]="modalHandler">
            <h3>Nice! This is a Modal component</h3>

            <p>You can add whatever the hell you like in here and it will adhere to any styling</p>

            <div class="text-center w-100">
                <p>Like this</p>
            </div>

            <ngx-fluent-design-button (clicked)="modalHandler.close()">Close Modal</ngx-fluent-design-button>
        </ngx-fluent-design-modal>
    `
})
export class ModalUsageExampleComponent {
    public readonly modalHandler: NgxFluentDesignModalHandler = new NgxFluentDesignModalHandler(false);
}
