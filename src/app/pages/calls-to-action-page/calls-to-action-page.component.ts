import { Component } from '@angular/core';
import { CodeExampleComponent } from '../../shared/components/code-example/code-example.component';
import { RouterOutlet } from '@angular/router';

@Component({
    standalone: true,
    templateUrl: './calls-to-action-page.component.html',
    styleUrls: ['./calls-to-action-page.component.scss'],
    imports: [CodeExampleComponent, RouterOutlet]
})
export class CallsToActionPageComponent { }
