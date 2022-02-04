import { NgModule } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';
import { NgxFluentDesignCardModule, NgxFluentDesignCommonComponentsModule } from 'ngx-fluent-design';
import { CommonModule } from '@angular/common';
import { SharedComponentsModule } from '../../shared/components/shared-components.module';
import { RouterModule, Routes } from '@angular/router';
import { CommonPageComponent } from './common-page.component';
import { CardPageComponent } from './card/card-page.component';

const ROUTES: Routes = [
    {
        path: 'card',
        component: CardPageComponent
    }
];

const DECLARATIONS: Array<any> = [
    CommonPageComponent,
    CardPageComponent
];

@NgModule({
    imports: [
        MarkdownModule.forChild(),
        NgxFluentDesignCardModule,
        CommonModule,
        SharedComponentsModule,
        RouterModule.forChild(ROUTES),
        NgxFluentDesignCommonComponentsModule
    ],
    declarations: [...DECLARATIONS],
})
export class CommonPageModule {
}
