import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ComponentApiDataList } from '../../../../shared/components/component-api-table/types/component-api-data.class';

@Component({
    templateUrl: './text-area-underlined-page.component.html',
    styleUrls: ['./text-area-underlined-page.component.scss']
})
export class TextAreaUnderlinedPageComponent {
    public readonly apiData: ComponentApiDataList = [
        {
            name: 'label: string',
            isRequired: false,
            description: 'Sets the label for the Input',
            isInput: true
        },
        {
            name: 'id: string',
            isRequired: false,
            description: 'Sets the for tag on the encapsulated label',
            isInput: true
        },
        {
            name: 'disabled: boolean',
            isRequired: false,
            description: 'Sets whether the checkbox is in disabled state',
            isInput: true
        }
    ];
    public standardInput: FormControl = new FormControl(null);
    public standardInputValidator: FormControl = new FormControl(null, [Validators.required, Validators.minLength(8)]);
    public textAreaInput: FormControl = new FormControl(null);

    public disableStandardInput: boolean = false;
    public disableStandardInputWithValidator: boolean = false;
    public disableTextAreaInput: boolean = false;
}
