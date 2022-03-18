import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodeExampleComponent } from './code-example/code-example.component';
import { MarkdownModule } from 'ngx-markdown';
import {
    NgxFluentDesignSurfaceModule,
    NgxFluentDesignCtaModule,
    NgxFluentDesignInputModule,
    NgxFluentDesignIconModule
} from 'ngx-fluent-design';
import { ComponentApiTableComponent } from './component-api-table/component-api-table.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DocsLogoComponent } from './docs-logo/docs-logo.component';
import { VersionSupportTableDataComponent } from './version-support-table/version-support-table-data/version-support-table-data.component';
import { VersionSupportTableComponent } from './version-support-table/version-support-table.component';

const DECLARATIONS: Array<any> = [
    CodeExampleComponent,
    ComponentApiTableComponent,
    DocsLogoComponent,
    VersionSupportTableDataComponent,
    VersionSupportTableComponent
];

@NgModule({
    imports: [
        CommonModule,
        MarkdownModule.forChild(),
        NgxFluentDesignCtaModule,
        NgxFluentDesignSurfaceModule,
        ReactiveFormsModule,
        NgxFluentDesignInputModule,
        NgxFluentDesignIconModule
    ],
    declarations: [...DECLARATIONS],
    exports: [...DECLARATIONS]
})
export class SharedComponentsModule {}
