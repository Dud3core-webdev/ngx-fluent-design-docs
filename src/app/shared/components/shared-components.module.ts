import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodeExampleComponent } from './code-example/code-example.component';
import { MarkdownModule } from 'ngx-markdown';
import { NgxFluentDesignSurfaceModule, NgxFluentDesignCtaModule } from 'ngx-fluent-design';
import { AppNavigationModule } from './side-nav/app-navigation.module';
import { ComponentApiTableComponent } from './component-api-table/component-api-table.component';
import { ScssPaletteGenerationComponent } from './scss-pallete-generation-component/scss-palette-generation.component';

const DECLARATIONS: Array<any> = [
    CodeExampleComponent,
    ComponentApiTableComponent,
    ScssPaletteGenerationComponent
];

@NgModule({
    imports: [
        CommonModule,
        MarkdownModule.forChild(),
        NgxFluentDesignCtaModule,
        AppNavigationModule,
        NgxFluentDesignSurfaceModule
    ],
    declarations: [...DECLARATIONS],
    exports: [...DECLARATIONS, AppNavigationModule]
})
export class SharedComponentsModule {}
