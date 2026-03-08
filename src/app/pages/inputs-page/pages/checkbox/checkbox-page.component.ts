import { Component } from '@angular/core';
import { ComponentApiDataList } from '../../../../shared/components/component-api-table/types/component-api-data.class';
import { VersionSupportTableComponent } from '../../../../shared/components/version-support-table/version-support-table.component';
import { ComponentApiTableComponent } from '../../../../shared/components/component-api-table/component-api-table.component';
import { CodeExampleComponent } from '../../../../shared/components/code-example/code-example.component';
import { NgxFluentDesignCheckboxComponent } from 'ngx-fluent-design';

@Component({
    standalone: true,
    templateUrl: './checkbox-page.component.html',
    imports: [VersionSupportTableComponent, ComponentApiTableComponent, CodeExampleComponent, NgxFluentDesignCheckboxComponent]
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
