import { Component } from '@angular/core';
import { NgxFluentDesignModalHandler } from 'ngx-fluent-design';
import { ComponentApiDataList } from '../../../shared/components/component-api-table/types/component-api-data.class';

@Component({
    templateUrl: './modal-page.component.html',
    styleUrls: ['./modal-page.component.scss']
})
export class ModalPageComponent {
    public readonly modalHandler: NgxFluentDesignModalHandler = new NgxFluentDesignModalHandler(false);
    public readonly apiData: ComponentApiDataList = [
        {
            name: 'handler: NgxFluentDesignModalHandler',
            isRequired: true,
            description: 'Allows the integrator to control the displaying of the Modal component',
            isInput: true
        },
        {
            name: 'canDismissWithOuterContent: boolean',
            isRequired: false,
            description: 'If set to true, clicking outside the dialog component will close it.',
            isInput: true
        }
    ];
}
