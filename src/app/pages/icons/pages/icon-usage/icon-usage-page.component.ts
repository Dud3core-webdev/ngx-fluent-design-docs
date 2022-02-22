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
import { ComponentApiDataList } from '../../../../shared/components/component-api-table/trypes/component-api-data.class';

@Component({
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
        }
    ];


    public readonly warningIcon: INgxFluentDesignIcon = NgxFluentDesignIconInfoWarn;
    public readonly blockedIcon: INgxFluentDesignIcon = NgxFluentDesignIconInfoBlocked;
    public readonly errorIcon: INgxFluentDesignIcon = NgxFluentDesignIconInfoError;
    public readonly severeWarnIcon: INgxFluentDesignIcon = NgxFluentDesignIconInfoSevereWarn;
    public readonly successIcon: INgxFluentDesignIcon = NgxFluentDesignIconInfoSuccess;
    public readonly closeIcon: INgxFluentDesignIcon = NgxFluentDesignIconClearClose;
}
