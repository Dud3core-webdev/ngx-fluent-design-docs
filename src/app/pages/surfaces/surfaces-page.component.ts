import { Component } from '@angular/core';
import { CodeExampleComponent } from '../../shared/components/code-example/code-example.component';
import { RouterOutlet } from '@angular/router';

@Component({
    standalone: true,
    templateUrl: './surfaces-page.component.html',
    styleUrls: ['./surfaces-page.component.scss'],
    imports: [CodeExampleComponent, RouterOutlet]
})
export class SurfacesPageComponent { }
