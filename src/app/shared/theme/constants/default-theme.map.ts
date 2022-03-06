import { ApplicationCssVarNames } from '../types/application-css-var-names.enum';

export const DefaultThemeMap: Map<ApplicationCssVarNames, string > = new Map<ApplicationCssVarNames, string>([
    [ApplicationCssVarNames.APPLICATION_BACKGROUND, '#faf9f8'],
    /* New Styles that conform to variables given by
     https,//fabricweb.z5.web.core.windows.net/pr-deploy-site/refs/heads/master/theming-designer/index.html */
    [ApplicationCssVarNames.THEME_PRIMARY, '#0078d4'],
    [ApplicationCssVarNames.THEME_SECONDARY, '#2b88d8'],
    [ApplicationCssVarNames.THEME_TERTIARY, '#71afe5'],
    [ApplicationCssVarNames.THEME_LIGHT, '#c7e0f4'],
    [ApplicationCssVarNames.THEME_LIGHTER, '#deecf9'],
    [ApplicationCssVarNames.THEME_LIGHTER_ALT, '#eff6fc'],
    [ApplicationCssVarNames.THEME_DARK, '#005a9e'],
    [ApplicationCssVarNames.THEME_DARKER, '#004578'],
    [ApplicationCssVarNames.THEME_DARK_ALT, '#106ebe'],

    /* foreground **/
    [ApplicationCssVarNames.THEME_FOREGROUND_BLACK, '#000000'],
    [ApplicationCssVarNames.THEME_FOREGROUND_NEUTRAL_DARK, '#201f1e'],
    [ApplicationCssVarNames.THEME_FOREGROUND_NEUTRAL_PRIMARY, '#323130'],
    [ApplicationCssVarNames.THEME_FOREGROUND_NEUTRAL_PRIMARY_ALT, '#3b3a39'],
    [ApplicationCssVarNames.THEME_FOREGROUND_NEUTRAL_SECONDARY, '#605e5c'],
    [ApplicationCssVarNames.THEME_FOREGROUND_NEUTRAL_TERTIARY, '#a19f9d'],
    [ApplicationCssVarNames.THEME_FOREGROUND_WHITE, '#ffffff'],
    [ApplicationCssVarNames.THEME_FOREGROUND_WHITE_RGBA, 'rgb(255, 255, 255, 0.5)'],

    /* Background **/
    [ApplicationCssVarNames.THEME_BACKGROUND_NEUTRAL_TERTIARY_ALT, '#c8c6c4'],
    [ApplicationCssVarNames.THEME_BACKGROUND_NEUTRAL_DARK, '#201f1e'],
    [ApplicationCssVarNames.THEME_BACKGROUND_NEUTRAL_QUATERNARY_ALT, '#e1dfdd'],
    [ApplicationCssVarNames.THEME_BACKGROUND_NEUTRAL_LIGHT, '#edebe9'],
    [ApplicationCssVarNames.THEME_BACKGROUND_NEUTRAL_LIGHTER, '#f3f2f1'],
    [ApplicationCssVarNames.THEME_BACKGROUND_NEUTRAL_LIGHT_ALT, '#faf9f8']
]);
