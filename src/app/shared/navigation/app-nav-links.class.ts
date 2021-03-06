import { ApplicationNavigationLinks } from '../../navigation/types/application-navigation-links.type';

export const applicationNavigationLinks: ApplicationNavigationLinks = [
    {
        title: 'Getting Started',
        shouldDisplayOnLive: true,
        subNavItems: [
            {
                title: 'SCSS Palette Generation',
                routerLink: ['', 'home', 'generate-palette'],
                shouldDisplayOnLive: true
            }
        ]
    },
    {
        title: 'Commands',
        shouldDisplayOnLive: false,
        subNavItems: [
            {
                title: 'Pivot',
                routerLink: ['', 'commands', 'pivot'],
                shouldDisplayOnLive: false
            }
        ]
    },
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
                title: 'Text Area',
                routerLink: ['', 'inputs', 'text-area'],
                shouldDisplayOnLive: true
            },
            {
                title: 'Form Field Underlined',
                routerLink: ['', 'inputs', 'form-field-underlined'],
                shouldDisplayOnLive: true
            },
            {
                title: 'Text Area Underlined',
                routerLink: ['', 'inputs', 'text-area-underlined'],
                shouldDisplayOnLive: true
            },
            {
                title: 'Form Field Borderless',
                routerLink: ['', 'inputs', 'form-field-borderless'],
                shouldDisplayOnLive: true
            },
            {
                title: 'Text Area Borderless',
                routerLink: ['', 'inputs', 'text-area-borderless'],
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
            },
            {
                title: 'Select',
                routerLink: ['', 'inputs', 'select'],
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
            },
            {
                title: 'Action Button',
                routerLink: ['', 'calls-to-action', 'action'],
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
                routerLink: ['', 'icons', 'custom'],
                shouldDisplayOnLive: true
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
        title: 'Surfaces',
        shouldDisplayOnLive: true,
        subNavItems: [
            {
                title: 'Card',
                shouldDisplayOnLive: true,
                routerLink: ['', 'surfaces', 'card']
            },
            {
                title: 'Dialog',
                routerLink: ['', 'surfaces', 'dialog'],
                shouldDisplayOnLive: true
            },
            {
                title: 'Panel',
                routerLink: ['', 'surfaces', 'panel'],
                shouldDisplayOnLive: true
            },
            {
                title: 'Modal',
                routerLink: ['', 'surfaces', 'modal'],
                shouldDisplayOnLive: true
            }
        ]
    }
];
