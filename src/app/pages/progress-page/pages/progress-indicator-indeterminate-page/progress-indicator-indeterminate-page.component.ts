import { Component } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';
import { ComponentApiDataList } from '../../../../shared/components/component-api-table/types/component-api-data.class';
import { VersionSupportTableComponent } from '../../../../shared/components/version-support-table/version-support-table.component';
import { ComponentApiTableComponent } from '../../../../shared/components/component-api-table/component-api-table.component';
import { NgxFluentDesignCardComponent, NgxFluentDesignProgressIndicatorIndeterminateComponent } from 'ngx-fluent-design';

@Component({
    standalone: true,
    selector: 'app-progress-indicator-indeterminate-page',
    templateUrl: './progress-indicator-indeterminate-page.component.html',
    imports: [VersionSupportTableComponent, ComponentApiTableComponent, NgxFluentDesignCardComponent, NgxFluentDesignProgressIndicatorIndeterminateComponent, MarkdownModule]
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
