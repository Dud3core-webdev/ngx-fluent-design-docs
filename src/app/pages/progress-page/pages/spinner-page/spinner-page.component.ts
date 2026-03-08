import { Component } from '@angular/core';
import { ComponentApiDataList } from '../../../../shared/components/component-api-table/types/component-api-data.class';
import { VersionSupportTableComponent } from '../../../../shared/components/version-support-table/version-support-table.component';
import { ComponentApiTableComponent } from '../../../../shared/components/component-api-table/component-api-table.component';
import { NgxFluentDesignCardComponent, NgxFluentDesignSpinnerComponent } from 'ngx-fluent-design';

@Component({
    standalone: true,
    selector: 'app-spinner-page',
    templateUrl: './spinner-page.component.html',
    imports: [VersionSupportTableComponent, ComponentApiTableComponent, NgxFluentDesignCardComponent, NgxFluentDesignSpinnerComponent]
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
