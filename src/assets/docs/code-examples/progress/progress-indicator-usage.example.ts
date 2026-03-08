import { Component, signal, AfterViewInit } from '@angular/core';
import { NgxFluentDesignProgressIndicatorComponent, NgxFluentDesignButtonComponent } from 'ngx-fluent-design';

@Component({
    standalone: true,
    imports: [NgxFluentDesignProgressIndicatorComponent, NgxFluentDesignButtonComponent],
    template: `
        <ngx-fluent-design-button (clicked)="resetProgress()" 
                                  [disabled]="progressIndicatorCurrentValue() < 100">
            Reset progress
        </ngx-fluent-design-button>
        
        <ngx-fluent-design-progress-indicator [label]="'Label'" 
                                              [description]="'Description'"
                                              [currentValue]="progressIndicatorCurrentValue()" 
                                              class="w-100">
        </ngx-fluent-design-progress-indicator>
    `
})
export class ProgressIndicatorUsageExample implements AfterViewInit {
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
