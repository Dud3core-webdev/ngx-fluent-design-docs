import { Component } from '@angular/core';
import { NgxFluentDesignPanelHandler } from 'ngx-fluent-design';

@Component({
    template: `
        <ngx-fluent-design-button type="primary" (clicked)="panelHandler.open()">
            Click Here to launch a dialog
        </ngx-fluent-design-button>

        <ngx-fluent-design-panel header="Tadaaaaaa"
                                 [canDismissWithOuterContent]="true"
                                 [includeReturnCta]="true"
                                 [returnCtaLabel]="'Return to application'"
                                 [handler]="panelHandler"
                                 [displayCloseIcon]="false">
            <p>Nice! This is a Panel component</p>
        </ngx-fluent-design-panel>
    `
})
export class PanelUsageExampleComponent {
    public readonly panelHandler: NgxFluentDesignPanelHandler = new NgxFluentDesignPanelHandler(false);
}
