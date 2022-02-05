import { Component } from '@angular/core';

@Component({
    templateUrl: './dialog-page.component.html',
    styleUrls: ['./dialog-page.component.scss']
})
export class DialogPageComponent {
    public isToggled: boolean = false;

    public toggleDialog(isToggled: boolean): void {
        this.isToggled = isToggled;
    }
}
