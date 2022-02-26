import { Component } from '@angular/core';
import { ThemeSwitcherService } from '../../../shared/services/theme/theme-switcher.service';

@Component({
    templateUrl: './introduction-page.component.html',
    styleUrls: ['./introduction-page.component.scss']
})
export class IntroductionPageComponent {

    private readonly _themeService: ThemeSwitcherService;

    public get isNormalTheme(): boolean {
        return this._themeService.isNormalTheme;
    }

    constructor(themeService: ThemeSwitcherService) {
        this._themeService = themeService;
    }
}
