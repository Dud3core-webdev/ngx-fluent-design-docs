import { Injectable } from '@angular/core';

@Injectable()
export class ThemeConfiguration {
    public readonly moduleThemes!: Map<string, Map<string, string>>;
}
