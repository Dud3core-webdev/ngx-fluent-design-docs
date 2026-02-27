import { Component } from '@angular/core';
import { ComponentApiDataList } from '../../../../shared/components/component-api-table/types/component-api-data.class';

@Component({
    standalone: false,
    selector: 'app-progress-indicator-indeterminate-page',
    templateUrl: './progress-indicator-indeterminate-page.component.html'
})
export class ProgressIndicatorIndeterminatePageComponent {
    public readonly apiData: ComponentApiDataList = [
        {
            name: 'label: string',
            isRequired: false,
            description: 'Sets the label for the progress indicator',
            isInput: true
        },
        {
            name: 'description: string',
            isRequired: false,
            description: 'Sets a label underneath the indicator',
            isInput: true
        }
    ];
}
