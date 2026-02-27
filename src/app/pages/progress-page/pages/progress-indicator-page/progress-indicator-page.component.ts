import { AfterViewInit, Component } from '@angular/core';
import { ComponentApiDataList } from '../../../../shared/components/component-api-table/types/component-api-data.class';

@Component({
    standalone: false,
    selector: 'app-progress-indicator-page',
    templateUrl: './progress-indicator-page.component.html'
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
    public progressIndicatorCurrentValue: number = 0;

    ngAfterViewInit(): void {
        this.exampleProgressLoad();
    }

    public exampleProgressLoad(percentage = 0): void {
        this.progressIndicatorCurrentValue = percentage;

        if (percentage >= 100) {
            return;
        }
        requestAnimationFrame(() => this.exampleProgressLoad(this.progressIndicatorCurrentValue + 0.1));
    }

    public resetProgress(): void {
        this.progressIndicatorCurrentValue = 0;
        this.exampleProgressLoad();
    }
}
