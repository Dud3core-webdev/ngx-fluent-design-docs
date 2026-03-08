import { Component } from '@angular/core';
import { CodeExampleComponent } from '../../shared/components/code-example/code-example.component';
import { RouterOutlet } from '@angular/router';

@Component({
    standalone: true,
    selector: 'app-progress-page',
    templateUrl: './progress-page.component.html',
    imports: [CodeExampleComponent, RouterOutlet]
})
export class ProgressPageComponent {
}
