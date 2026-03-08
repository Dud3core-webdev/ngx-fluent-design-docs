import { Component } from '@angular/core';
import { VersionSupportTableComponent } from '../../../../shared/components/version-support-table/version-support-table.component';
import { CodeExampleComponent } from '../../../../shared/components/code-example/code-example.component';
import { NgxFluentDesignButtonLinkDirective } from 'ngx-fluent-design';

@Component({
    standalone: true,
    templateUrl: './link-button-page.component.html',
    styleUrls: ['./link-button-page.component.scss'],
    imports: [VersionSupportTableComponent, CodeExampleComponent, NgxFluentDesignButtonLinkDirective]
})
export class LinkButtonPageComponent {
    public alert(message: string): void {
        window.alert(message);
    }
}
