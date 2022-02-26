import { Component } from '@angular/core';
import { ThemeSwitcherService } from '../../../shared/services/theme/theme-switcher.service';

@Component({
    templateUrl: './docs-down-for-maintainance-error-page.component.html',
    styleUrls: ['./docs-down-for-maintainance-error-page.component.scss']
})
export class DocsDownForMaintainanceErrorPageComponent {
    private readonly _themeService: ThemeSwitcherService;

    public get isNormalTheme(): boolean {
        return this._themeService.isNormalTheme;
    }

    constructor(themeService: ThemeSwitcherService) {
        this._themeService = themeService;
    }
}
