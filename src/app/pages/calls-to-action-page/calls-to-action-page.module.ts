import { NgModule } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';
import { CallsToActionPageComponent } from './calls-to-action-page.component';
import { SharedComponentsModule } from '../../shared/components/shared-components.module';
import { CompoundCtaPageComponent } from './pages/compound-cta/compound-cta.page.component';
import { RouterModule, Routes } from '@angular/router';
import { StandardCtaPageComponent } from './pages/standard-cta/standard-cta-page.component';
import { NgxFluentDesignCardModule, NgxFluentDesignCtaModule, NgxFluentDesignInputModule } from 'ngx-fluent-design';
import { LinkButtonPageComponent } from './pages/link-button/link-button-page.component';
import { ActionButtonPageComponent } from './pages/action-button/action-button-page.component';

const DECLARATIONS: Array<any> = [
    CallsToActionPageComponent,
    CompoundCtaPageComponent,
    StandardCtaPageComponent,
    LinkButtonPageComponent,
    ActionButtonPageComponent
];

const ROUTES: Routes = [
    {
        path: 'compound',
        component: CompoundCtaPageComponent
    },
    {
        path: 'standard',
        component: StandardCtaPageComponent
    },
    {
        path: 'link',
        component: LinkButtonPageComponent
    },
    {
        path: 'action',
        component: ActionButtonPageComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(ROUTES),
        MarkdownModule.forChild(),
        NgxFluentDesignCardModule,
        NgxFluentDesignCtaModule,
        NgxFluentDesignInputModule,
        SharedComponentsModule
    ],
    declarations: [...DECLARATIONS]
})
export class CallsToActionPageModule {}
