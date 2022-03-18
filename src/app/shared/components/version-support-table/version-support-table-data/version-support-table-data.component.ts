import { Component, Input, OnInit } from '@angular/core';
import { NgxFluentDesignIconInfoError, NgxFluentDesignIconInfoSuccess } from 'ngx-fluent-design';

@Component({
    selector: 'version-support-table-row',
    templateUrl: './version-support-table-data.component.html',
    styleUrls: ['./version-support-table-data.component.scss']
})
export class VersionSupportTableDataComponent implements OnInit {
    @Input() public isSupported: boolean = false;
    @Input() public versionName: string = '';

    public iconConfig: { icon: any, color: string } = { icon: null, color: '' };

    public ngOnInit(): void {
        this.iconConfig = this.getIconConfiguration(this.isSupported);
    }

    public getIconConfiguration(isSupported: boolean): { icon: any, color: string } {
        if (isSupported) {
            return {
                icon: NgxFluentDesignIconInfoSuccess,
                color: '--ngx-fluent-design-status-success'
            };
        }

        return {
            icon: NgxFluentDesignIconInfoError,
            color: '--ngx-fluent-design-status-error'
        };
    }
}
