import { Component } from '@angular/core';
import { INgxFluentDesignIcon, NgxFluentDesignIconInfoWarn } from 'ngx-fluent-design';

@Component({
    template: `<ngx-fluent-design-icon [icon]="warningIcon"></ngx-fluent-design-icon>`,
})
export class IconUsageExample {
    public warningIcon: INgxFluentDesignIcon = NgxFluentDesignIconInfoWarn;
}
