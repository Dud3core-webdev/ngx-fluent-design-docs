import { Component } from '@angular/core';
import { ThemeSwitcherService } from '../../../theme/services/theme-switcher.service';
import { ApplicationThemeName } from '../../../shared/theme/types/application-theme-name.enum';

@Component({
    templateUrl: './introduction-page.component.html',
    styleUrls: ['./introduction-page.component.scss']
})
export class IntroductionPageComponent {

    private readonly _themeService: ThemeSwitcherService;

    public get isNormalTheme(): boolean {
        return this._themeService.currentThemeName === ApplicationThemeName.LIGHT;
    }

    constructor(themeService: ThemeSwitcherService) {
        this._themeService = themeService;
    }
}
