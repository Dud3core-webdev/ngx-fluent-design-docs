import { Component } from '@angular/core';
import { ComponentApiDataList } from '../../../../shared/components/component-api-table/types/component-api-data.class';
import { VersionSupportTableComponent } from '../../../../shared/components/version-support-table/version-support-table.component';
import { ComponentApiTableComponent } from '../../../../shared/components/component-api-table/component-api-table.component';
import { NgxFluentDesignCardComponent, NgxFluentDesignToggleComponent } from 'ngx-fluent-design';

@Component({
    standalone: true,
    templateUrl: './toggle-page.component.html',
    styleUrls: ['./toggle-page.component.scss'],
    imports: [VersionSupportTableComponent, ComponentApiTableComponent, NgxFluentDesignCardComponent, NgxFluentDesignToggleComponent]
})
export class TogglePageComponent {
    public readonly toggleApiData: ComponentApiDataList = [
        {
            name: 'label: string',
            isRequired: false,
            description: 'Sets the label for the Input',
            isInput: true
        },
        {
            name: 'inlineLabel: boolean',
            isRequired: false,
            description: 'Inlines the toggle label',
            isInput: true
        },
        {
            name: 'toggled: boolean',
            isRequired: false,
            description: 'Sets the toggle state for the toggle',
            isInput: true
        },
        {
            name: 'disabled: boolean',
            isRequired: false,
            description: 'Sets whether the toggle is in disabled state',
            isInput: true
        },
        {
            name: 'changeEvent: EventEmitter<void>',
            isRequired: false,
            description: 'Emits every time the component is toggled',
            isOutput: true
        },
        {
            name: 'toggleOnEvent: EventEmitter<void>',
            isRequired: false,
            description: 'Emits every time the component is toggled on',
            isOutput: true
        },
        {
            name: 'toggleOffEvent: EventEmitter<void>',
            isRequired: false,
            description: 'Emits every time the component is toggled off',
            isOutput: true
        },
    ];
}
