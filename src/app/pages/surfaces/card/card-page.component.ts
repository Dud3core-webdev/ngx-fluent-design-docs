import { Component } from '@angular/core';
import { VersionSupportTableComponent } from '../../../shared/components/version-support-table/version-support-table.component';
import { CodeExampleComponent } from '../../../shared/components/code-example/code-example.component';

@Component({
    standalone: true,
    templateUrl: './card-page.component.html',
    styleUrls: ['./card-page.component.scss'],
    imports: [VersionSupportTableComponent, CodeExampleComponent]
})
export class CardPageComponent {}
