import { Component } from '@angular/core';
import { ThemeSwitcherService } from '../../../shared/theme-module/services/theme-switcher.service';
import { ApplicationThemeName } from '../../../shared/theme-module/types/application-theme-name.enum';

@Component({
    templateUrl: './page-not-found-page.component.html',
    styleUrls: ['./page-not-found-page.component.scss']
})
export class PageNotFoundPageComponent {
    private readonly _themeService: ThemeSwitcherService;

    public get isNormalTheme(): boolean {
        return this._themeService.currentThemeName === ApplicationThemeName.LIGHT;
    }

    constructor(themeService: ThemeSwitcherService) {
        this._themeService = themeService;
    }
}
