import { Component } from '@angular/core';
import { NgxFluentDesignMessageBarHandler } from 'ngx-fluent-design';
import { ComponentApiDataList } from '../../../../shared/components/component-api-table/types/component-api-data.class';
import { ExampleMessageBarDisplayService } from '../../services/example-message-bar-display.service';
import { MessageBarType } from 'ngx-fluent-design/lib/notifications/types/message-bar.type';
import { FormControl } from '@angular/forms';

@Component({
    templateUrl: './message-bar-page.component.html',
    styleUrls: ['./message-bar-page.component.scss']
})
export class MessageBarPageComponent {
    public readonly messageBarName: FormControl = new FormControl('success');
    public readonly handler: NgxFluentDesignMessageBarHandler = new NgxFluentDesignMessageBarHandler(false);
    public readonly apiData: ComponentApiDataList = [
        {
            name: 'messageBarType: MessageBarType',
            isRequired: false,
            description: 'Sets the services for the message bar type. This can be either: \n ' +
                'info, error, blocked, severe-warning, success or warning',
            isInput: true
        },
        {
            name: 'canDismiss: boolean',
            isRequired: false,
            description: 'If set to true, a close icon will appear on the top right of the component',
            isInput: true
        },
        {
            name: 'fixed: boolean',
            isRequired: false,
            description: 'If set to true, the component will be fixed to the top of the parent container (to be changed to be changed to the top of the document in the future)',
            isInput: true
        },
        {
            name: 'handler: NgxFluentDesignMessageBarHandler',
            isRequired: true,
            description: 'Allows the integrator to control the displaying of the message bar component',
            isInput: true
        }
    ];

    private readonly _exampleMessageBarDisplayService: ExampleMessageBarDisplayService;

    constructor(exampleMessageBarDisplayService: ExampleMessageBarDisplayService) {
        this._exampleMessageBarDisplayService = exampleMessageBarDisplayService;

        this.setMessageBarType('success');
    }

    public displayMessageBar(): void {
        this._exampleMessageBarDisplayService.showExampleMessageBar();
    }

    public setMessageBarType(messageBarType: MessageBarType): void {
        this.messageBarName.setValue(messageBarType);
        this._exampleMessageBarDisplayService.setExampleMessageBarType(messageBarType);
    }
}
