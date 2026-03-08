import { Component } from '@angular/core';
import { CodeExampleComponent } from '../../shared/components/code-example/code-example.component';
import { RouterOutlet } from '@angular/router';

@Component({
    standalone: true,
    templateUrl: './notifications-page.component.html',
    styleUrls: ['./notifications-page.component.scss'],
    imports: [CodeExampleComponent, RouterOutlet]
})
export class NotificationsPageComponent { }
