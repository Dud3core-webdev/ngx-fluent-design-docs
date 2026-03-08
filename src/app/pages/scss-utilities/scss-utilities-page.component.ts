import { Component } from '@angular/core';
import { NgxFluentDesignMessageBarComponent } from 'ngx-fluent-design';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
    standalone: true,
    templateUrl: './scss-utilities-page.component.html',
    styleUrls: ['./scss-utilities-page.component.scss'],
    imports: [NgxFluentDesignMessageBarComponent, RouterLink, RouterOutlet]
})
export class ScssUtilitiesPageComponent { }
