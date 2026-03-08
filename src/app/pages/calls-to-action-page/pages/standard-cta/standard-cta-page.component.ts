import { Component } from '@angular/core';
import { ComponentApiDataList } from '../../../../shared/components/component-api-table/types/component-api-data.class';
import { VersionSupportTableComponent } from '../../../../shared/components/version-support-table/version-support-table.component';
import { ComponentApiTableComponent } from '../../../../shared/components/component-api-table/component-api-table.component';
import { CodeExampleComponent } from '../../../../shared/components/code-example/code-example.component';
import { NgxFluentDesignButtonComponent, NgxFluentDesignToggleComponent } from 'ngx-fluent-design';

@Component({
    standalone: true,
    templateUrl: './standard-cta-page.component.html',
    styleUrls: ['./standard-cta-page.component.scss'],
    imports: [VersionSupportTableComponent, ComponentApiTableComponent, CodeExampleComponent, NgxFluentDesignButtonComponent, NgxFluentDesignToggleComponent]
})
export class StandardCtaPageComponent {
    public standardButtonsDisabled: boolean = false;
    public apiData: ComponentApiDataList = [
        {
            name: 'disabled: boolean',
            isRequired: false,
            description: 'Sets a disabled class on the component. If not passed in, it will default to false.',
            isInput: true
        },
        {
            name: 'type: NgxFluentDesignCtaType',
            isRequired: false,
            description: 'Sets the type of the CTA, you can use either standard or primary. If not passed in, it will default to standard.',
            isInput: true
        },
        {
            name: 'clicked: EventEmitter<void>',
            isRequired: false,
            isOutput: true,
            description: 'Emits every time the CTA is clicked.'
        }
    ];


    public toggleStandardButtons(): void {
        this.standardButtonsDisabled = !this.standardButtonsDisabled;
    }
}
