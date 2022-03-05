import { ApplicationThemeName } from '../types/application-theme-name.enum';
import { DefaultThemeMap } from '../constants/default-theme.map';
import { DarkThemeMap } from '../constants/dark-theme.map';
import { ApplicationCssVarNames } from '../types/application-css-var-names.enum';

export class ThemeConfigFactory {
    public static for(): Map<ApplicationThemeName, Map<ApplicationCssVarNames, string>> {
        return new Map<ApplicationThemeName, Map<ApplicationCssVarNames, string>>([
            [ApplicationThemeName.LIGHT, DefaultThemeMap],
            [ApplicationThemeName.DARK, DarkThemeMap]
        ]);
    }
}
