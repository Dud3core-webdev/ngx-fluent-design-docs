import { Component } from '@angular/core';
import { VersionSupportTableComponent } from '../../shared/components/version-support-table/version-support-table.component';
import { CodeExampleComponent } from '../../shared/components/code-example/code-example.component';
import { RouterOutlet } from '@angular/router';

@Component({
    standalone: true,
    templateUrl: './icons-page.component.html',
    styleUrls: ['./icons-page.component.scss'],
    imports: [VersionSupportTableComponent, CodeExampleComponent, RouterOutlet]
})
export class IconsPageComponent { }
