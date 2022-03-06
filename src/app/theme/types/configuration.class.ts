import { Injectable } from '@angular/core';

@Injectable()
export class IThemeConfiguration {
    public readonly moduleThemes!: Map<string, Map<string, string>>;
}
