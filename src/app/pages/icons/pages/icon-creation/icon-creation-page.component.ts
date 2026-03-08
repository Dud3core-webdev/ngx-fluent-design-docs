import { Component } from '@angular/core';
import { ComponentApiDataList } from '../../../../shared/components/component-api-table/types/component-api-data.class';
import { ComponentApiTableComponent } from '../../../../shared/components/component-api-table/component-api-table.component';
import { CodeExampleComponent } from '../../../../shared/components/code-example/code-example.component';

@Component({
    standalone: true,
    templateUrl: './icon-creation-page.component.html',
    styleUrls: ['./icon-creation-page.component.scss'],
    imports: [ComponentApiTableComponent, CodeExampleComponent]
})
export class IconCreationPageComponent {
    public apiData: ComponentApiDataList = [
        {
            name: 'name: string',
            isRequired: true,
            description: 'Sets the name of the icon'
        },
        {
            name: 'paths: Array<string>',
            isRequired: true,
            description: 'This is an array of SVG paths, although it is recommended that you use a single path SVG'
        },
        {
            name: 'width: number',
            isRequired: true,
            description: 'Sets the width of the SVG'
        },
        {
            name: 'height: number',
            isRequired: true,
            description: 'Sets the height of the SVG'
        }
    ];
}
