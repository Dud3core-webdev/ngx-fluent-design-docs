import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeSwitcherService } from './services/theme-switcher.service';
import { IThemeConfiguration } from './types/configuration.class';
import { HexToRgbService } from './services/hex-to-rgb.service';

@NgModule({
    imports: [CommonModule],
    providers: [
        ThemeSwitcherService,
        HexToRgbService
    ],
})
export class ThemeModule {
    public static forRoot(themes: Map<string, Map<string, string>>): ModuleWithProviders<ThemeModule> {
        if (!themes) {
            throw new Error('No themes have been provided! Please provide at least one theme to ThemeModule.forRoot');
        }

        return ({
            ngModule: ThemeModule,
            providers: [
                {
                    provide: IThemeConfiguration,
                    useFactory: () => {
                        return { moduleThemes: themes };
                    }
                }
            ]
        });
    }
}
