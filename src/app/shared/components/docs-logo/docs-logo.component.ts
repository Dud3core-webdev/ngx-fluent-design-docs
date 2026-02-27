import { Component, Input } from '@angular/core';
import { ThemeSwitcherService } from '../../../theme/services/theme-switcher.service';
import { ApplicationThemeName } from '../../theme/types/application-theme-name.enum';

@Component({
    standalone: false,
    selector: 'app-logo-component',
    templateUrl: './docs-logo.component.html',
    styleUrls: ['./docs-logo.component.scss']
})
export class DocsLogoComponent {

    private readonly _themeSwitcherService: ThemeSwitcherService;

    constructor(themeSwitcherService: ThemeSwitcherService) {
        this._themeSwitcherService = themeSwitcherService;
    }

    public get isNormalTheme(): boolean {
        return this._themeSwitcherService.currentThemeName === ApplicationThemeName.LIGHT;
    }
}
