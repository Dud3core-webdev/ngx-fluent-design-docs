import { Component } from '@angular/core';

@Component({
    template: `
        <!-- Launch it inside a sheet for the best usage -->
        <ngx-fluent-design-sheet [hidden]="!isToggled">
            <section class="w-100 h-100 d-flex align-items-center justify-content-center">  <!-- <- We use Bootstrap alongside this library to build docs-->
                <ngx-fluent-design-dialog header="Tadaaaaaa"
                                          primaryActionName="Close"
                                          [displaySecondaryAction]="false"
                                          (primaryActionClicked)="toggleDialog(false)">
                    <p>Nice! This is a Dialog component on top of a sheet</p>
                </ngx-fluent-design-dialog>
            </section>
        </ngx-fluent-design-sheet>
    `
})
export class AlertUsageExampleComponent {
    public isToggled: boolean = false;

    public toggleDialog(isToggled: boolean): void {
        this.isToggled = isToggled;
    }
}
