import { Component } from '@angular/core';
import { ComponentApiDataList } from '../../../../shared/components/component-api-table/types/component-api-data.class';
import { VersionSupportTableComponent } from '../../../../shared/components/version-support-table/version-support-table.component';
import { ComponentApiTableComponent } from '../../../../shared/components/component-api-table/component-api-table.component';
import { CodeExampleComponent } from '../../../../shared/components/code-example/code-example.component';
import { NgxFluentDesignRadioComponent } from 'ngx-fluent-design';

@Component({
    standalone: true,
    templateUrl: 'radio-page.component.html',
    imports: [VersionSupportTableComponent, ComponentApiTableComponent, CodeExampleComponent, NgxFluentDesignRadioComponent]
})

export class RadioPageComponent {
    public readonly radioButtonApiData: ComponentApiDataList = [
        {
            name: 'label: string',
            isRequired: false,
            description: 'Sets the label for the Input',
            isInput: true
        },
        {
            name: 'name: string',
            isRequired: false,
            description: 'Sets the name for the Input',
            isInput: true
        },
        {
            name: 'checked: boolean',
            isRequired: false,
            description: 'Sets the checked state for the radio button',
            isInput: true
        },
        {
            name: 'disabled: boolean',
            isRequired: false,
            description: 'Sets the disabled state for the radio button',
            isInput: true
        },
        {
            name: 'value: string',
            isRequired: false,
            description: 'Sets the value emitted from the radio when it is checked',
            isInput: true
        }
    ];
}
