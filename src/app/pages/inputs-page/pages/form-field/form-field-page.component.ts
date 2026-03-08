import { Component } from '@angular/core';
import { FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { ComponentApiDataList } from '../../../../shared/components/component-api-table/types/component-api-data.class';
import { VersionSupportTableComponent } from '../../../../shared/components/version-support-table/version-support-table.component';
import { ComponentApiTableComponent } from '../../../../shared/components/component-api-table/component-api-table.component';
import { CodeExampleComponent } from '../../../../shared/components/code-example/code-example.component';
import { NgxFluentDesignFormFieldComponent, NgxFluentDesignInputClassValidatorDirective, NgxFluentDesignToggleComponent } from 'ngx-fluent-design';

@Component({
    standalone: true,
    templateUrl: './form-field-page.component.html',
    styleUrls: ['./form-field-page.component.scss'],
    imports: [VersionSupportTableComponent, ComponentApiTableComponent, CodeExampleComponent, NgxFluentDesignFormFieldComponent, ReactiveFormsModule, NgxFluentDesignInputClassValidatorDirective, NgxFluentDesignToggleComponent]
})
export class FormFieldPageComponent {
    public readonly formFieldApiData: ComponentApiDataList = [
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
        },
        {
            name: 'displayLabel: boolean',
            isRequired: false,
            description: 'Determines whether to display the label',
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
