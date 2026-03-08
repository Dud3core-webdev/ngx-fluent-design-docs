import { Component, Input } from '@angular/core';
import { NgxFluentDesignIconInfoSevereWarn, NgxFluentDesignCardComponent, NgxFluentDesignMessageBarComponent } from 'ngx-fluent-design';
import { VersionSupportTableDataComponent } from './version-support-table-data/version-support-table-data.component';

@Component({
    selector: 'version-support-table',
    standalone: true,
    templateUrl: './version-support-table.component.html',
    styleUrls: ['./version-support-table.component.scss'],
    imports: [NgxFluentDesignCardComponent, VersionSupportTableDataComponent]
})
export class VersionSupportTableComponent {
    @Input() public supportsV11: boolean = false;
    @Input() public supportsV12: boolean = false;
    @Input() public supportsV13: boolean = false;
    @Input() public supportsV21: boolean = true;

    public getIconConfiguration(isSupported: boolean): any {
        if (isSupported) {
            return {
                icon: NgxFluentDesignIconInfoSevereWarn,
                ngxFluentDesignCssVariableIconFill: '--ngx-fluent-design-status-severe-warning'
            };
        }

        return {
            icon: NgxFluentDesignIconInfoSevereWarn,
            ngxFluentDesignCssVariableIconFill: '--ngx-fluent-design-status-severe-warning'
        };
    }
}
