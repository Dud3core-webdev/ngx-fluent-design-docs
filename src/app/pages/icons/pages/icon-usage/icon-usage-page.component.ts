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

@Component({
    templateUrl: './icon-usage-page.component.html',
    styleUrls: ['./icon-usage-page.component.scss']
})
export class IconUsagePageComponent {
    public readonly warningIcon: INgxFluentDesignIcon = NgxFluentDesignIconInfoWarn;
    public readonly blockedIcon: INgxFluentDesignIcon = NgxFluentDesignIconInfoBlocked;
    public readonly errorIcon: INgxFluentDesignIcon = NgxFluentDesignIconInfoError;
    public readonly severeWarnIcon: INgxFluentDesignIcon = NgxFluentDesignIconInfoSevereWarn;
    public readonly successIcon: INgxFluentDesignIcon = NgxFluentDesignIconInfoSuccess;
    public readonly closeIcon: INgxFluentDesignIcon = NgxFluentDesignIconClearClose;
}
