import { Component } from '@angular/core';

@Component({
    templateUrl: './sheet-page.component.html',
    styleUrls: ['./sheet-page.component.scss']
})
export class SheetPageComponent {

    public isToggled: boolean = false;

    public toggleDialog(isToggled: boolean): void {
        this.isToggled = isToggled;
    }
}
