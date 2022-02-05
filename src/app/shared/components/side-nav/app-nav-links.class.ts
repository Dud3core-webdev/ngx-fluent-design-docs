import { ApplicationNavigationLinks } from './app-nav-links.interface';

export const applicationNavigationLinks = (): ApplicationNavigationLinks => [
    {
        title: 'Inputs',
        shouldDisplayOnLive: true,
        subNavItems: [
            {
                title: 'Checkbox',
                routerLink: ['', 'inputs', 'checkbox'],
                shouldDisplayOnLive: true
            },
            {
                title: 'Form Field',
                routerLink: ['', 'inputs', 'form-field'],
                shouldDisplayOnLive: true
            },
            {
                title: 'Form Field Underlined',
                routerLink: ['', 'inputs', 'form-field-underlined'],
                shouldDisplayOnLive: true
            },
            {
                title: 'Form Field Borderless',
                routerLink: ['', 'inputs', 'form-field-borderless'],
                shouldDisplayOnLive: true
            },
            {
                title: 'Radio',
                routerLink: ['', 'inputs', 'radio'],
                shouldDisplayOnLive: true
            },
            {
                title: 'Toggle',
                routerLink: ['', 'inputs', 'toggle'],
                shouldDisplayOnLive: true
            }
        ]
    },
    {
        title: 'Calls To Action',
        shouldDisplayOnLive: true,
        subNavItems: [
            {
                title: 'Standard CTA',
                routerLink: ['', 'calls-to-action', 'standard'],
                shouldDisplayOnLive: true
            },
            {
                title: 'Compound CTA',
                routerLink: ['', 'calls-to-action', 'compound'],
                shouldDisplayOnLive: true
            },
            {
                title: 'Link Button',
                routerLink: ['', 'calls-to-action', 'link'],
                shouldDisplayOnLive: true
            }
        ]
    },
    {
        title: 'Alerts',
        shouldDisplayOnLive: true,
        subNavItems: [
            {
                title: 'Dialog',
                routerLink: ['', 'alerts', 'dialog'],
                shouldDisplayOnLive: true
            }
        ]
    },
    {
        title: 'Notifications',
        shouldDisplayOnLive: true,
        subNavItems: [
            {
                title: 'Message Bar',
                routerLink: ['', 'notifications', 'message-bar'],
                shouldDisplayOnLive: true
            }
        ]
    },
    {
        title: 'Progress',
        shouldDisplayOnLive: true,
        subNavItems: [
            {
                title: 'Progress Indicator',
                routerLink: ['', 'progress', 'progress-indicator'],
                shouldDisplayOnLive: true
            },
            {
                title: 'Indeterminate Progress Indicator',
                routerLink: ['', 'progress', 'progress-indicator-indeterminate'],
                shouldDisplayOnLive: true
            },
            {
                title: 'Spinner',
                routerLink: ['', 'progress', 'spinner'],
                shouldDisplayOnLive: true
            }
        ]
    },
    {
        title: 'Iconography',
        shouldDisplayOnLive: true,
        subNavItems: [
            {
                title: 'Usage',
                routerLink: ['', 'icons', 'usage'],
                shouldDisplayOnLive: true
            },
            {
                title: 'Custom Icons',
                routerLink: [],
                shouldDisplayOnLive: false
            }
        ]
    },
    {
        title: 'SCSS Utilities',
        shouldDisplayOnLive: true,
        subNavItems: [
            {
                title: 'Typography',
                routerLink: ['scss-utilities', 'typography'],
                shouldDisplayOnLive: true
            }
        ]
    },
    {
        title: 'Common',
        shouldDisplayOnLive: true,
        subNavItems: [
            {
                title: 'Card',
                shouldDisplayOnLive: true,
                routerLink: ['', 'common', 'card']
            },
            {
                title: 'Sheet',
                shouldDisplayOnLive: true,
                routerLink: ['', 'common', 'sheet']
            }
        ]
    }
];
