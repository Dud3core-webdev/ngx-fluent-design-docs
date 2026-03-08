import { Component } from '@angular/core';
import { VersionSupportTableComponent } from '../../../../shared/components/version-support-table/version-support-table.component';

@Component({
    standalone: true,
    templateUrl: './pivot-page.component.html',
    styleUrls: ['./pivot-page.component.scss'],
    imports: [VersionSupportTableComponent]
})
export class PivotPageComponent {}
