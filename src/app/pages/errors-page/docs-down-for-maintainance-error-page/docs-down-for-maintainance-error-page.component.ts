import { Component } from '@angular/core';
import { ThemeSwitcherService } from '../../../shared/theme-module/services/theme-switcher.service';
import { ApplicationThemeName } from '../../../shared/application-themes-constants/types/application-theme-name.enum';

@Component({
    templateUrl: './docs-down-for-maintainance-error-page.component.html',
    styleUrls: ['./docs-down-for-maintainance-error-page.component.scss']
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
