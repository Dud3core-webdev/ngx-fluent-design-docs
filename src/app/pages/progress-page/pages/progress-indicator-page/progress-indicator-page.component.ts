import { AfterViewInit, Component } from '@angular/core';

@Component({
    selector: 'app-progress-indicator-page',
    templateUrl: './progress-indicator-page.component.html'
})
export class ProgressIndicatorPageComponent implements AfterViewInit {
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
