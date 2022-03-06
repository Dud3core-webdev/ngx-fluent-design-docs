import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodeExampleComponent } from './code-example/code-example.component';
import { MarkdownModule } from 'ngx-markdown';
import { NgxFluentDesignSurfaceModule, NgxFluentDesignCtaModule, NgxFluentDesignInputModule } from 'ngx-fluent-design';
import { ComponentApiTableComponent } from './component-api-table/component-api-table.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DocsLogoComponent } from './docs-logo/docs-logo.component';

const DECLARATIONS: Array<any> = [
    CodeExampleComponent,
    ComponentApiTableComponent,
    DocsLogoComponent
];

@NgModule({
    imports: [
        CommonModule,
        MarkdownModule.forChild(),
        NgxFluentDesignCtaModule,
        NgxFluentDesignSurfaceModule,
        ReactiveFormsModule,
        NgxFluentDesignInputModule
    ],
    declarations: [...DECLARATIONS],
    exports: [...DECLARATIONS]
})
export class SharedComponentsModule {}
