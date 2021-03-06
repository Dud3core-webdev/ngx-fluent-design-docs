import { Component } from '@angular/core';
import { ComponentApiDataList } from '../../../../shared/components/component-api-table/types/component-api-data.class';

@Component({
    templateUrl: './checkbox-page.component.html'
})
export class CheckboxPageComponent {
    public readonly checkboxApiData: ComponentApiDataList = [
        {
            name: 'label: string',
            isRequired: false,
            description: 'Sets the label for the checkbox',
            isInput: true
        },
        {
            name: 'checked: boolean',
            isRequired: false,
            description: 'Sets whether the checkbox is in checked state',
            isInput: true
        },
        {
            name: 'disabled: boolean',
            isRequired: false,
            description: 'Sets whether the checkbox is in disabled state',
            isInput: true
        }
    ];
}
