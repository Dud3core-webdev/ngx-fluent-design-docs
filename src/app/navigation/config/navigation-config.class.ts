import { Injectable } from '@angular/core';
import { ApplicationNavigationLinks } from '../types/application-navigation-links.type';

@Injectable()
export class NavigationConfigClass {
    public readonly moduleNavigationLinks!: ApplicationNavigationLinks;
}
