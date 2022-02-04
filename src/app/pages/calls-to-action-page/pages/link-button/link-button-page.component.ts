import { Component } from '@angular/core';

@Component({
    templateUrl: './link-button-page.component.html',
    styleUrls: ['./link-button-page.component.scss']
})
export class LinkButtonPageComponent {
    public alert(message: string): void {
        window.alert(message);
    }
}
