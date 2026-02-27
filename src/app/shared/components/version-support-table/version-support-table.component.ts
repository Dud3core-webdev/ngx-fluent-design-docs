import { Component, Input } from '@angular/core';
import { NgxFluentDesignIconInfoSevereWarn } from 'ngx-fluent-design';

@Component({
    standalone: false,
    selector: 'version-support-table',
    templateUrl: './version-support-table.component.html',
    styleUrls: ['./version-support-table.component.scss']
})
export class VersionSupportTableComponent {
    @Input() public supportsV11: boolean = false;
    @Input() public supportsV12: boolean = false;
    @Input() public supportsV13: boolean = false;

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
