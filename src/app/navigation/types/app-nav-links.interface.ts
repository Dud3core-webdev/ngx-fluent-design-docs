export interface IApplicationNavigationLinks {
    readonly title: string;
    readonly shouldDisplayOnLive: boolean;
    readonly routerLink?: Array<string>;
    readonly subNavItems?: Array<IApplicationNavigationLinks>;
}
