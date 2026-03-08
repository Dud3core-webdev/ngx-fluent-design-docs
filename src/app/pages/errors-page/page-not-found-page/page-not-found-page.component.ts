import { Component } from '@angular/core';
import { ThemeSwitcherService } from '../../../theme/services/theme-switcher.service';
import { ApplicationThemeName } from '../../../shared/theme/types/application-theme-name.enum';
import { DocsLogoComponent } from '../../../shared/components/docs-logo/docs-logo.component';

@Component({
    standalone: true,
    templateUrl: './page-not-found-page.component.html',
    styleUrls: ['./page-not-found-page.component.scss'],
    imports: [DocsLogoComponent]
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
