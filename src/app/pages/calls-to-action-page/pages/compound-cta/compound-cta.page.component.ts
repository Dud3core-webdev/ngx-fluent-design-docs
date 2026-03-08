import { Component } from '@angular/core';
import { ComponentApiDataList } from '../../../../shared/components/component-api-table/types/component-api-data.class';
import { VersionSupportTableComponent } from '../../../../shared/components/version-support-table/version-support-table.component';
import { ComponentApiTableComponent } from '../../../../shared/components/component-api-table/component-api-table.component';
import { CodeExampleComponent } from '../../../../shared/components/code-example/code-example.component';
import { NgxFluentDesignCompoundButtonComponent, NgxFluentDesignToggleComponent } from 'ngx-fluent-design';

@Component({
    standalone: true,
    templateUrl: './compound-cta.page.component.html',
    styleUrls: ['./compound-cta.page.component.scss'],
    imports: [VersionSupportTableComponent, ComponentApiTableComponent, CodeExampleComponent, NgxFluentDesignCompoundButtonComponent, NgxFluentDesignToggleComponent]
})
export class CompoundCtaPageComponent {
    public compoundButtonsDisabled: boolean = false;
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
        },
        {
            name: 'secondaryText: string',
            isInput: true,
            isRequired: false,
            description: 'Sets the secondary text. if not passed in, it will not display anything.'
        }
    ];

    public toggleCompoundButtons(): void {
        this.compoundButtonsDisabled = !this.compoundButtonsDisabled;
    }
}
