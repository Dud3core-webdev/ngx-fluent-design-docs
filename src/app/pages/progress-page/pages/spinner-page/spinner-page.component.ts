import { Component } from '@angular/core';
import { ComponentApiDataList } from '../../../../shared/components/component-api-table/types/component-api-data.class';

@Component({
    standalone: false,
    selector: 'app-spinner-page',
    templateUrl: './spinner-page.component.html'
})
export class SpinnerPageComponent {
    public readonly apiData: ComponentApiDataList = [
        {
            name: 'label: string',
            isRequired: false,
            description: 'Sets the label for the progress indicator',
            isInput: true
        },
        {
            name: 'size: NgxFluentDesignProgressSizeType',
            isRequired: false,
            description: 'sets the size of the spinner. Choose from: extra-small | small | medium | large',
            isInput: true
        }
    ];
}
