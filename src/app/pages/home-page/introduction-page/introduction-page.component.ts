import { Component } from '@angular/core';
import { ThemeSwitcherService } from '../../../theme/services/theme-switcher.service';
import { ApplicationThemeName } from '../../../shared/theme/types/application-theme-name.enum';
import { CommonModule } from '@angular/common';
import { MarkdownModule } from 'ngx-markdown';
import { NgxFluentDesignCardComponent, NgxFluentDesignMessageBarComponent } from 'ngx-fluent-design';

@Component({
    standalone: true,
    imports: [
        CommonModule,
        MarkdownModule,
        NgxFluentDesignCardComponent,
        NgxFluentDesignMessageBarComponent
    ],
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
