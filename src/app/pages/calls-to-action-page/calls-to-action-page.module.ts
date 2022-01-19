import { NgModule } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';
import { CallsToActionPageComponent } from './calls-to-action-page.component';
import { SharedComponentsModule } from '../../shared/components/shared-components.module';
import { CompoundCtaPageComponent } from './pages/compound-cta/compound-cta.page.component';
import { RouterModule } from '@angular/router';
import { StandardCtaPageComponent } from './pages/standard-cta/standard-cta-page.component';
import { NgxFluentDesignCardModule, NgxFluentDesignCtaModule, NgxFluentDesignInputModule } from 'ngx-fluent-design';

const DECLARATIONS: Array<any> = [
    CallsToActionPageComponent,
    CompoundCtaPageComponent,
    StandardCtaPageComponent
];

@NgModule({
    imports: [
        RouterModule,
        MarkdownModule.forChild(),
        NgxFluentDesignCardModule,
        NgxFluentDesignCtaModule,
        NgxFluentDesignInputModule,
        SharedComponentsModule
    ],
    declarations: [...DECLARATIONS]
})
export class CallsToActionPageModule {}
