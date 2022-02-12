import { Component } from '@angular/core';

@Component({
    templateUrl: './action-button-page.component.html',
    styleUrls: ['./action-button-page.component.scss']
})
export class ActionButtonPageComponent {
    public alert(message: string): void {
        window.alert(message);
    }
}
