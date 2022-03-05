import { Component } from '@angular/core';
import { ThemeSwitcherService } from '../../../shared/theme-module/services/theme-switcher.service';

@Component({
    templateUrl: './page-not-found-page.component.html',
    styleUrls: ['./page-not-found-page.component.scss']
})
export class PageNotFoundPageComponent {
    private readonly _themeService: ThemeSwitcherService;

    public get isNormalTheme(): boolean {
        return this._themeService.isNormalTheme;
    }

    constructor(themeService: ThemeSwitcherService) {
        this._themeService = themeService;
    }
}
