import { Component } from '@angular/core';
import { ComponentApiDataList } from '../../../../shared/components/component-api-table/types/component-api-data.class';

@Component({
    templateUrl: './standard-cta-page.component.html',
    styleUrls: ['./standard-cta-page.component.scss']
})
export class StandardCtaPageComponent {
    public standardButtonsDisabled: boolean = false;
    public apiData: ComponentApiDataList = [
        {
            name: 'disabled: boolean',
            isRequired: false,
            description: 'Sets a disabled class on the component. If not passed in, it will default to false.',
            isInput: true
        },
        {
            name: 'type: NgxFluentDesignCtaType',
            isRequired: false,
            description: 'Sets the type of the CTA, you can use either standard or primary. If not passed in, it will default to standard.',
            isInput: true
        },
        {
            name: 'clicked: EventEmitter<void>',
            isRequired: false,
            isOutput: true,
            description: 'Emits every time the CTA is clicked.'
        }
    ];


    public toggleStandardButtons(): void {
        this.standardButtonsDisabled = !this.standardButtonsDisabled;
    }
}
