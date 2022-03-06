import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, of, throwError } from 'rxjs';
import { DOCUMENT } from '@angular/common';
import { switchMap, tap } from 'rxjs/operators';
import { IThemeConfiguration } from '../types/configuration.class';
import Cookies from 'js-cookie';

@Injectable()
export class ThemeSwitcherService {

    private readonly _cookieName: string = 'THEME_NAME';
    private readonly _themeBehaviourSubject: BehaviorSubject<string>;
    private readonly _document: Document;
    private readonly _themesMap: Map<string, Map<string, string>>;

    constructor(@Inject(DOCUMENT) document: Document, themeConfig: IThemeConfiguration) {
        this._themeBehaviourSubject = new BehaviorSubject<string>('');
        this._document = document;
        this._themesMap = themeConfig.moduleThemes;

        of(Cookies.get(this._cookieName))
            .pipe(
                switchMap((response: string | undefined) => {
                    if (typeof response === 'undefined') {
                        const firstThemeAvailable = this._themesMap.entries().next().value;
                        this.theme = firstThemeAvailable[0];
                    } else {
                        this.theme = response;
                    }

                    return this._themeBehaviourSubject;
                }),
                tap((themeName: string) => this.setTheme(themeName))
            )
            .subscribe({
                error: (e) => console.error(e.message)
            });
    }

    public set theme(theme: string) {
        this._themeBehaviourSubject.next(theme);
        Cookies.set(this._cookieName, theme);
    }

    public get currentThemeName(): string {
        return this._themeBehaviourSubject.value;
    }

    private setTheme(themeName: string): void {
        const themeMap: Map<string, string> | undefined = this._themesMap.get(themeName);

        if (typeof themeMap === 'undefined') {
            throw throwError({
                message: `Could not find ${themeName}, please add ${themeName} to your forRoot configuration`
            });
        }

        themeMap.forEach((value, key) => {
            const root = this._document.body;
            root.style.setProperty(key, value);
        });
    }
}
