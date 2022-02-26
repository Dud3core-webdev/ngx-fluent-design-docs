import { Component, Inject, Input } from '@angular/core';
import { ApplicationNavigationLinks } from '../app-nav-links.interface';
import { DOCUMENT } from '@angular/common';
import { ThemeSwitcherService, ThemeType } from '../../../services/theme/theme-switcher.service';

@Component({
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
        return this._themeService.isNormalTheme;
    }

    constructor(themeService: ThemeSwitcherService) {
        this._themeService = themeService;
    }

    public toggleTheme(): void {
        if (this.isNormalTheme) {
            this._themeService.theme = ThemeType.DARK;
        } else {
            this._themeService.theme = ThemeType.LIGHT;
        }
    }
}
