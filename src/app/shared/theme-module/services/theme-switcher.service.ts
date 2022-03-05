import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DOCUMENT } from '@angular/common';
import { ApplicationThemeName } from '../types/application-theme-name.enum';
import { ThemeConfigFactory } from '../factories/theme-config.factory';

@Injectable()
export class ThemeSwitcherService {

    private readonly _themesMap: Map<string, Map<string, string>> = ThemeConfigFactory.for();

    constructor(@Inject(DOCUMENT) document: Document) {
        this._themeBehaviourSubject = new BehaviorSubject<ApplicationThemeName>(ApplicationThemeName.LIGHT);
        this._document = document;

        this._themeBehaviourSubject.subscribe({
            next: (themeName: ApplicationThemeName) => {
                this.setTheme(themeName);
            }
        });
    }

    public set theme(theme: ApplicationThemeName) {
        this._themeBehaviourSubject.next(theme);
    }

    public get isNormalTheme(): boolean {
        return this._themeBehaviourSubject.value === ApplicationThemeName.LIGHT;
    }

    private readonly _themeBehaviourSubject: BehaviorSubject<ApplicationThemeName>;
    private readonly _document: Document;

    private setTheme(themeName: ApplicationThemeName): void {
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
