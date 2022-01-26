import { NgModule } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';
import { CommonModule } from '@angular/common';
import { SharedComponentsModule } from '../../shared/components/shared-components.module';
import { RouterModule } from '@angular/router';
import { NgxFluentDesignCardModule, NgxFluentDesignCtaModule, NgxFluentDesignProgressModule } from 'ngx-fluent-design';
import { ProgressPageComponent } from './progress-page.component';
import { ProgressIndicatorPageComponent } from './pages/progress-indicator-page/progress-indicator-page.component';
import { SpinnerPageComponent } from './pages/spinner-page/spinner-page.component';
import { ProgressIndicatorIndeterminatePageComponent } from './pages/progress-indicator-indeterminate-page/progress-indicator-indeterminate-page.component';

const DECLARATIONS: Array<any> = [
    ProgressPageComponent,
    ProgressIndicatorPageComponent,
    SpinnerPageComponent,
    ProgressIndicatorIndeterminatePageComponent
];

@NgModule({
    imports: [
        MarkdownModule.forChild(),
        NgxFluentDesignCardModule,
        NgxFluentDesignProgressModule,
        CommonModule,
        SharedComponentsModule,
        RouterModule,
        NgxFluentDesignCtaModule
    ],
    declarations: [...DECLARATIONS]
})
export class ProgressPageModule {
}
