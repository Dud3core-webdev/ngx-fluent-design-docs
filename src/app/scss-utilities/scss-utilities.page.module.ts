import { NgModule } from '@angular/core';
import { ScssUtilitiesPageComponent } from './scss-utilities-page.component';
import { CommonModule } from '@angular/common';
import { NgxFluentDesignCardModule, NgxFluentDesignNotificationModule } from 'ngx-fluent-design';
import { TypographyPageComponent } from './typography/typography-page.component';
import { RouterModule } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';
import { SharedComponentsModule } from '../shared/components/shared-components.module';

const DECLARATIONS: Array<any> = [
    ScssUtilitiesPageComponent,
    TypographyPageComponent
];

@NgModule({
    imports: [
        CommonModule,
        NgxFluentDesignCardModule,
        RouterModule,
        MarkdownModule.forChild(),
        SharedComponentsModule,
        NgxFluentDesignNotificationModule
    ],
    declarations: [...DECLARATIONS],
})
export class ScssUtilitiesPageModule {}
