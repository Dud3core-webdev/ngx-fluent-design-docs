import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeSwitcherService } from './services/theme-switcher.service';
import { IThemeConfiguration } from './types/configuration.class';

@NgModule({
    imports: [CommonModule],
    providers: [ThemeSwitcherService],
})
export class ThemeModule {
    public static forRoot(themes: Map<string, Map<string, string>>): ModuleWithProviders<ThemeModule> {
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
