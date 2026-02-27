import { Component, Input } from '@angular/core';
import { ThemeSwitcherService } from '../../theme/services/theme-switcher.service';
import { ApplicationThemeName } from '../../shared/theme/types/application-theme-name.enum';
import { ApplicationNavigationLinks } from '../types/application-navigation-links.type';

@Component({
    standalone: false,
    selector: 'nav-desktop',
    templateUrl: './nav-desktop.component.html',
    styleUrls: ['./nav-desktop.component.scss']
})
export class NavDesktopComponent {
    @Input() public readonly sideNavLinks: ApplicationNavigationLinks = [];
    @Input() public readonly isProdEnvironment: boolean = false;
    @Input() public readonly currentPackageVersion: string = '';

    private readonly _themeService: ThemeSwitcherService;

    public get isNormalTheme(): boolean {
        return this._themeService.currentThemeName === ApplicationThemeName.LIGHT;
    }

    constructor(themeService: ThemeSwitcherService) {
        this._themeService = themeService;
    }

    public toggleTheme(): void {
        if (this.isNormalTheme) {
            this._themeService.theme = ApplicationThemeName.DARK;
        } else {
            this._themeService.theme = ApplicationThemeName.LIGHT;
        }
    }
}
