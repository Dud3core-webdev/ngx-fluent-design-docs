import { Component } from '@angular/core';
import {
    INgxFluentDesignIcon,
    NgxFluentDesignIconClearClose,
    NgxFluentDesignIconInfoBlocked,
    NgxFluentDesignIconInfoError,
    NgxFluentDesignIconInfoSevereWarn,
    NgxFluentDesignIconInfoSuccess,
    NgxFluentDesignIconInfoWarn
} from 'ngx-fluent-design';
import { ComponentApiDataList } from '../../../../shared/components/component-api-table/types/component-api-data.class';

@Component({
    standalone: false,
    templateUrl: './icon-usage-page.component.html',
    styleUrls: ['./icon-usage-page.component.scss']
})
export class IconUsagePageComponent {
    public apiData: ComponentApiDataList = [
        {
            name: 'icon: INgxFluentDesignIcon',
            isRequired: true,
            description: 'Sets the icon to be displayed',
            isInput: true
        },
        {
            name: 'fillColour: string',
            isRequired: false,
            description: 'sets the fill colour based off a hex code',
            isInput: true
        },
        {
            name: 'ngxFluentDesignCssVariableName: string',
            isRequired: false,
            description: 'You can use a named ngx-fluent-design scss variable to set an icon colour for consistency sake',
            isInput: true
        }
    ];

    public readonly iconList: Array<{ name: string, icon: INgxFluentDesignIcon, fillColor: string }> = [
        {
            name: 'warning',
            icon: NgxFluentDesignIconInfoWarn,
            fillColor: '--ngx-fluent-design-status-warning'
        },
        {
            name: 'blocked',
            icon: NgxFluentDesignIconInfoBlocked,
            fillColor: '--ngx-fluent-design-status-error'
        },
        {
            name: 'error',
            icon: NgxFluentDesignIconInfoError,
            fillColor: '--ngx-fluent-design-status-error'
        },
        {
            name: 'severe warning',
            icon: NgxFluentDesignIconInfoSevereWarn,
            fillColor: '--ngx-fluent-design-status-severe-warning'
        },
        {
            name: 'success',
            icon: NgxFluentDesignIconInfoSuccess,
            fillColor: '--ngx-fluent-design-status-success'
        },
        {
            name: 'close',
            icon: NgxFluentDesignIconClearClose,
            fillColor: '--ngx-fluent-design-status-warning'
        }
    ];
}
