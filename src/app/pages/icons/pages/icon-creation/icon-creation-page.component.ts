import { Component } from '@angular/core';
import { ComponentApiDataList } from '../../../../shared/components/component-api-table/trypes/component-api-data.class';

@Component({
    templateUrl: './icon-creation-page.component.html',
    styleUrls: ['./icon-creation-page.component.scss']
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
            name: 'fill: string',
            isRequired: true,
            description: 'sets the fill colour of the SVG path'
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
