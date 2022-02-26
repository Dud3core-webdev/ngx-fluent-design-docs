import { Component } from '@angular/core';
import { NgxFluentDesignDialogHandler } from 'ngx-fluent-design';

@Component({
    template: `
        <ngx-fluent-design-dialog header="Tadaaaaaa"
                                  primaryActionName="Close"
                                  [canDismissWithOuterContent]="true"
                                  [handler]="handler"
                                  [displayCloseIcon]="true"
                                  (primaryActionClicked)="handler.close()">
            <p>Nice! This is a dialog component</p>
        </ngx-fluent-design-dialog>
    `
})
export class AlertUsageExampleComponent {
    public handler: NgxFluentDesignDialogHandler = new NgxFluentDesignDialogHandler(false);
}
