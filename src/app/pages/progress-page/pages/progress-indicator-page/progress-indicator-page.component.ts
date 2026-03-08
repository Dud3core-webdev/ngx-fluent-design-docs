import { AfterViewInit, Component, signal } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';
import { ComponentApiDataList } from '../../../../shared/components/component-api-table/types/component-api-data.class';
import { VersionSupportTableComponent } from '../../../../shared/components/version-support-table/version-support-table.component';
import { ComponentApiTableComponent } from '../../../../shared/components/component-api-table/component-api-table.component';
import { NgxFluentDesignCardComponent, NgxFluentDesignButtonComponent, NgxFluentDesignProgressIndicatorComponent } from 'ngx-fluent-design';

@Component({
    standalone: true,
    selector: 'app-progress-indicator-page',
    templateUrl: './progress-indicator-page.component.html',
    imports: [VersionSupportTableComponent, ComponentApiTableComponent, NgxFluentDesignCardComponent, NgxFluentDesignButtonComponent, NgxFluentDesignProgressIndicatorComponent, MarkdownModule]
})
export class ProgressIndicatorPageComponent implements AfterViewInit {
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
        },
        {
            name: 'currentValue: number',
            isRequired: false,
            description: 'Sets the position of the indicator.',
            isInput: true
        }
    ];

    public progressIndicatorCurrentValue = signal(0);

    public ngAfterViewInit(): void {
        this.exampleProgressLoad();
    }

    public exampleProgressLoad(percentage = 0): void {
        this.progressIndicatorCurrentValue.set(percentage);

        if (percentage >= 100) {
            return;
        }

        setTimeout(() => {
            this.exampleProgressLoad(this.progressIndicatorCurrentValue() + 1);
        }, 50);
    }

    public resetProgress(): void {
        this.progressIndicatorCurrentValue.set(0);
        this.exampleProgressLoad();
    }
}
