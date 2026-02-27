import { Component } from '@angular/core';
import { NgxFluentDesignPanelHandler } from 'ngx-fluent-design';
import { ComponentApiDataList } from '../../../shared/components/component-api-table/types/component-api-data.class';

@Component({
    standalone: false,
    templateUrl: './panel-page.component.html',
    styleUrls: ['./panel-page.component.scss']
})
export class PanelPageComponent {
    public readonly panelHandler: NgxFluentDesignPanelHandler = new NgxFluentDesignPanelHandler(false);
    public readonly apiData: ComponentApiDataList = [
        {
            name: 'secondaryActionName: string',
            isRequired: false,
            description: 'If set, the dialog will display a secondary CTA with this name',
            isInput: true
        },
        {
            name: 'header: string',
            isRequired: false,
            description: 'Sets the panel header',
            isInput: true
        },
        {
            name: 'displayCloseIcon: boolean',
            isRequired: false,
            description: 'Lets the integrator decide whether the close icon should appear',
            isInput: true
        },
        {
            name: 'includeReturnCta: boolean',
            isRequired: false,
            description: 'Lets the integrator decide whether return icon should appear',
            isInput: true
        },
        {
            name: 'returnCtaLabel: string',
            isRequired: false,
            description: 'Set the label for the return cta if set to true',
            isInput: true
        },
        {
            name: 'handler: NgxFluentDesignPanelHandler',
            isRequired: true,
            description: 'Allows the integrator to control the displaying of the panel component',
            isInput: true
        },
        {
            name: 'canDismissWithOuterContent: boolean',
            isRequired: false,
            description: 'If set to true, clicking outside the dialog component will close it.',
            isInput: true
        },
        {
            name: 'componentClosed: EventEmitter<void>',
            isRequired: false,
            description: 'Emits when the user closes the component',
            isOutput: true
        }
    ];
}
