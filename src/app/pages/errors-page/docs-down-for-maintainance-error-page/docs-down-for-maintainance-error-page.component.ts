import { Component } from '@angular/core';
import { ThemeSwitcherService } from '../../../theme/services/theme-switcher.service';
import { ApplicationThemeName } from '../../../shared/theme/types/application-theme-name.enum';
import { DocsLogoComponent } from '../../../shared/components/docs-logo/docs-logo.component';
import { NgxFluentDesignCardComponent } from 'ngx-fluent-design';

@Component({
    standalone: true,
    templateUrl: './docs-down-for-maintainance-error-page.component.html',
    styleUrls: ['./docs-down-for-maintainance-error-page.component.scss'],
    imports: [DocsLogoComponent, NgxFluentDesignCardComponent]
})
export class DocsDownForMaintainanceErrorPageComponent {
    private readonly _themeService: ThemeSwitcherService;

    public get isLightTheme(): boolean {
        return this._themeService.currentThemeName === ApplicationThemeName.LIGHT;
    }

    constructor(themeService: ThemeSwitcherService) {
        this._themeService = themeService;
    }
}
