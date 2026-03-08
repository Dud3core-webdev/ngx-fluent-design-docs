import { Component } from '@angular/core';
import { ComponentApiDataList } from '../../../../shared/components/component-api-table/types/component-api-data.class';
import { VersionSupportTableComponent } from '../../../../shared/components/version-support-table/version-support-table.component';
import { ComponentApiTableComponent } from '../../../../shared/components/component-api-table/component-api-table.component';
import { CodeExampleComponent } from '../../../../shared/components/code-example/code-example.component';
import { NgxFluentDesignSelectComponent } from 'ngx-fluent-design';

@Component({
    standalone: true,
    templateUrl: './select.page.component.html',
    imports: [VersionSupportTableComponent, ComponentApiTableComponent, CodeExampleComponent, NgxFluentDesignSelectComponent]
})
export class SelectPageComponent {
    public readonly selectApiData: ComponentApiDataList = [
        {
            name: 'label: string',
            description: 'Sets the label for the select component',
            isRequired: false,
            isInput: true
        },
        {
            name: 'options: Array<string>',
            description: 'Sets the selectable options in the select component',
            isRequired: true,
            isInput: true
        },
        {
            name: 'id: string',
            description: 'Sets the select ID',
            isRequired: false,
            isInput: true
        },
        {
            name: 'optionClicked: EventEmitter<string>',
            description: 'When an option is selected, the component emits the value for the consumer to use',
            isOutput: true,
            isRequired: false
        }
    ];

}
