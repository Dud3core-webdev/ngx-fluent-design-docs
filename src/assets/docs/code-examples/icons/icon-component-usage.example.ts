import { Component } from '@angular/core';
import { INgxFluentDesignIcon } from 'ngx-fluent-design';
import { NgxFluentDesignIconInfoWarn } from 'ngx-fluent-design/lib/icons/shared/constants/ngx-fluent-design-icons-list';

@Component({
    template: `
        <form>
            <ngx-fluent-design-icon [icon]="warningIcon"></ngx-fluent-design-icon>
        </form>
    `,
})
export class IconUsageExample {
    public warningIcon: INgxFluentDesignIcon = NgxFluentDesignIconInfoWarn;
}
