import { Component } from '@angular/core';
import { FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { ComponentApiDataList } from '../../../../shared/components/component-api-table/types/component-api-data.class';
import { NgxFluentDesignMessageBarComponent, NgxFluentDesignTextFieldBorderlessComponent, NgxFluentDesignInputClassValidatorDirective, NgxFluentDesignToggleComponent } from 'ngx-fluent-design';
import { VersionSupportTableComponent } from '../../../../shared/components/version-support-table/version-support-table.component';
import { ComponentApiTableComponent } from '../../../../shared/components/component-api-table/component-api-table.component';
import { CodeExampleComponent } from '../../../../shared/components/code-example/code-example.component';

@Component({
    standalone: true,
    templateUrl: './form-field-borderless-page.component.html',
    styleUrls: ['./form-field-borderless-page.component.scss'],
    imports: [NgxFluentDesignMessageBarComponent, VersionSupportTableComponent, ComponentApiTableComponent, CodeExampleComponent, NgxFluentDesignTextFieldBorderlessComponent, ReactiveFormsModule, NgxFluentDesignInputClassValidatorDirective, NgxFluentDesignToggleComponent]
})
export class FormFieldBorderlessPageComponent {
    public readonly apiData: ComponentApiDataList = [
        {
            name: 'id: string',
            isRequired: false,
            description: 'Sets the for tag on the encapsulated label (more for accessibility purposes)',
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
