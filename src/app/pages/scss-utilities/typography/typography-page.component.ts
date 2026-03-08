import { Component } from '@angular/core';
import { CodeExampleComponent } from '../../../shared/components/code-example/code-example.component';
import { NgxFluentDesignCardComponent } from 'ngx-fluent-design';

@Component({
    standalone: true,
    templateUrl: './typography-page.component.html',
    styleUrls: ['./typography-page.component.scss'],
    imports: [CodeExampleComponent, NgxFluentDesignCardComponent]
})
export class TypographyPageComponent {}
