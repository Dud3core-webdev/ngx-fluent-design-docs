import { Component } from '@angular/core';
import { VersionSupportTableComponent } from '../../../../shared/components/version-support-table/version-support-table.component';
import { CodeExampleComponent } from '../../../../shared/components/code-example/code-example.component';
import { NgxFluentDesignActionButtonDirective } from 'ngx-fluent-design';

@Component({
    standalone: true,
    templateUrl: './action-button-page.component.html',
    styleUrls: ['./action-button-page.component.scss'],
    imports: [VersionSupportTableComponent, CodeExampleComponent, NgxFluentDesignActionButtonDirective]
})
export class ActionButtonPageComponent {
    public alert(message: string): void {
        window.alert(message);
    }
}
