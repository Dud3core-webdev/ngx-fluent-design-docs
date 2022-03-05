import { ApplicationCssVarNames } from '../types/application-css-var-names.enum';

export const DarkThemeMap: Map<ApplicationCssVarNames, string> = new Map<ApplicationCssVarNames, string>([
    [ApplicationCssVarNames.APPLICATION_BACKGROUND, '#383737'],
    /* New Styles that conform to variables given by
         https,//fabricweb.z5.web.core.windows.net/pr-deploy-site/refs/heads/master/theming-designer/index.html */
    [ApplicationCssVarNames.THEME_PRIMARY, '#8ca3ff'],
    [ApplicationCssVarNames.THEME_SECONDARY, '#7b90e0'],
    [ApplicationCssVarNames.THEME_TERTIARY, '#546299'],
    [ApplicationCssVarNames.THEME_LIGHT, '#2a314d'],
    [ApplicationCssVarNames.THEME_LIGHTER, '#161a29'],
    [ApplicationCssVarNames.THEME_LIGHTER_ALT, '#06070a'],
    [ApplicationCssVarNames.THEME_DARK, '#a8b9ff'],
    [ApplicationCssVarNames.THEME_DARKER, '#bfccff'],
    [ApplicationCssVarNames.THEME_DARK_ALT, '#98acff'],

    /* foreground **/
    [ApplicationCssVarNames.THEME_FOREGROUND_BLACK, '#f8f8f8'],
    [ApplicationCssVarNames.THEME_FOREGROUND_NEUTRAL_DARK, '#f4f4f4'],
    [ApplicationCssVarNames.THEME_FOREGROUND_NEUTRAL_PRIMARY, '#ffffff'],
    [ApplicationCssVarNames.THEME_FOREGROUND_NEUTRAL_PRIMARY_ALT, '#dadada'],
    [ApplicationCssVarNames.THEME_FOREGROUND_NEUTRAL_SECONDARY, '#d0d0d0'],
    [ApplicationCssVarNames.THEME_FOREGROUND_NEUTRAL_TERTIARY, '#c8c8c8'],
    [ApplicationCssVarNames.THEME_FOREGROUND_WHITE, '#292828'],
    [ApplicationCssVarNames.THEME_FOREGROUND_WHITE_RGBA, 'rgb(41, 40, 40, 0.5)'],

    /* Background **/
    [ApplicationCssVarNames.THEME_BACKGROUND_NEUTRAL_TERTIARY_ALT, '#747171'],
    [ApplicationCssVarNames.THEME_BACKGROUND_NEUTRAL_DARK, '#f4f4f4'],
    [ApplicationCssVarNames.THEME_BACKGROUND_NEUTRAL_QUATERNARY_ALT, '#504e4e'],
    [ApplicationCssVarNames.THEME_BACKGROUND_NEUTRAL_LIGHT, '#484646'],
    [ApplicationCssVarNames.THEME_BACKGROUND_NEUTRAL_LIGHTER, '#3a3939'],
    [ApplicationCssVarNames.THEME_BACKGROUND_NEUTRAL_LIGHT_ALT, '#323131']
]);
