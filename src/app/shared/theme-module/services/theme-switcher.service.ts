import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { DOCUMENT } from '@angular/common';
import { ApplicationThemeName } from '../types/application-theme-name.enum';
import { ThemeConfigFactory } from '../factories/theme-config.factory';
import Cookies from 'js-cookie';
import { switchMap } from 'rxjs/operators';

@Injectable()
export class ThemeSwitcherService {

    private readonly _cookieName: string = 'THEME_NAME';
    private readonly _themeBehaviourSubject: BehaviorSubject<string>;
    private readonly _document: Document;
    private readonly _themesMap: Map<string, Map<string, string>> = ThemeConfigFactory.for();

    constructor(@Inject(DOCUMENT) document: Document) {
        this._themeBehaviourSubject = new BehaviorSubject<string>('');
        this._document = document;

        of(Cookies.get(this._cookieName))
            .pipe(
                switchMap((response: string | undefined) => {
                    if (typeof response === 'undefined') {
                        this._themeBehaviourSubject.next(ApplicationThemeName.LIGHT);
                    } else {
                        this._themeBehaviourSubject.next(response);
                    }

                    return this._themeBehaviourSubject;
                })
            )
            .subscribe({
                next: (themeName: string): void => this.setTheme(themeName)
            });
    }

    public set theme(theme: string) {
        this._themeBehaviourSubject.next(theme);
        Cookies.set(this._cookieName, theme);
    }

    public get isNormalTheme(): boolean {
        return this._themeBehaviourSubject.value === ApplicationThemeName.LIGHT;
    }

    private setTheme(themeName: string): void {
        console.log(themeName);
        const themeMap: Map<string, string> | undefined = this._themesMap.get(themeName);

        if (typeof themeMap === 'undefined') {
            return;
        }

        themeMap.forEach((value, key) => {
            const root = this._document.body;
            root.style.setProperty(key, value);
        });
    }
}
