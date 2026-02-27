import { Component } from '@angular/core';
import { NgxFluentDesignDialogHandler } from 'ngx-fluent-design';
import { ComponentApiDataList } from '../../../shared/components/component-api-table/types/component-api-data.class';

@Component({
    standalone: false,
    templateUrl: './dialog-page.component.html',
    styleUrls: ['./dialog-page.component.scss']
})
export class DialogPageComponent {
    public handler: NgxFluentDesignDialogHandler = new NgxFluentDesignDialogHandler(false);
    public readonly apiData: ComponentApiDataList = [
        {
            name: 'primaryActionName: string',
            isRequired: false,
            description: 'Sets the action name for the primary CTA that appears in the dialog component',
            isInput: true
        },
        {
            name: 'secondaryActionName: string',
            isRequired: false,
            description: 'If set, the dialog will display a secondary CTA with this name',
            isInput: true
        },
        {
            name: 'header: string',
            isRequired: false,
            description: 'Sets the dialog header',
            isInput: true
        },
        {
            name: 'displayCloseIcon: boolean',
            isRequired: false,
            description: 'Lets the integrator decide whether the close icon should appear',
            isInput: true
        },
        {
            name: 'handler: NgxFluentDesignDialogHandler',
            isRequired: true,
            description: 'Allows the integrator to control the displaying of the dialog component',
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
        },
        {
            name: 'primaryActionClicked: EventEmitter<void>',
            isRequired: false,
            description: 'Emits when the primary action has been clicked on the dialog component',
            isOutput: true
        },
        {
            name: 'secondaryActionClicked: EventEmitter<void>',
            isRequired: false,
            description: 'Emits when the secondary action has been clicked on the dialog component',
            isOutput: true
        },
    ];
}
